import { useState, useEffect, useMemo, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  Calendar,
  Flame,
  GitCommit,
  Trophy,
  Sparkles,
  ExternalLink,
  RefreshCw,
  Info,
  Terminal,
} from "lucide-react"
import { FaGithub } from "react-icons/fa"

const GITHUB_USERNAME = "Mesit-Rathnayake"
const API_BASE = "https://github-contributions-api.jogruber.de/v4"

const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
]

const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

// Fallback snapshot data in case user is offline or API is unreachable
const fallbackData = {
  total: { lastYear: 462 },
  contributions: [
    { date: "2026-09-23", count: 3, level: 1 },
    { date: "2026-09-22", count: 2, level: 1 },
    { date: "2026-09-21", count: 3, level: 1 },
    { date: "2026-09-18", count: 5, level: 2 },
    { date: "2026-09-15", count: 14, level: 4 },
    { date: "2026-09-08", count: 11, level: 4 },
  ],
}

function formatDate(dateStr) {
  if (!dateStr) return ""
  const date = new Date(dateStr + "T00:00:00")
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

function GithubActivity() {
  const [yearOption, setYearOption] = useState("last")
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [colorTheme, setColorTheme] = useState("emerald") // 'emerald' | 'amber'
  const [hoveredDay, setHoveredDay] = useState(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
  const [isRefreshing, setIsRefreshing] = useState(false)
  const containerRef = useRef(null)

  const fetchContributions = async (year, isManualRefresh = false) => {
    if (isManualRefresh) setIsRefreshing(true)
    else setLoading(true)

    const cacheKey = `gh_contrib_${GITHUB_USERNAME}_${year}`
    const cached = localStorage.getItem(cacheKey)

    // Use cached data immediately if recent (< 1 hour)
    if (cached && !isManualRefresh) {
      try {
        const parsed = JSON.parse(cached)
        if (Date.now() - parsed.timestamp < 3600000) {
          setData(parsed.data)
          setLoading(false)
        }
      } catch (e) {
        console.warn("Failed to parse cached GitHub activity", e)
      }
    }

    try {
      const response = await fetch(`${API_BASE}/${GITHUB_USERNAME}?y=${year}`)
      if (!response.ok) throw new Error("API request failed")
      const json = await response.json()
      setData(json)
      localStorage.setItem(
        cacheKey,
        JSON.stringify({ timestamp: Date.now(), data: json })
      )
    } catch (err) {
      console.warn("Could not fetch live GitHub activity, using fallback", err)
      if (!data) {
        setData(fallbackData)
      }
    } finally {
      setLoading(false)
      setIsRefreshing(false)
    }
  }

  useEffect(() => {
    fetchContributions(yearOption)
  }, [yearOption])

  // Process data into 53 weeks
  const { weeks, monthMarkers, stats } = useMemo(() => {
    if (!data?.contributions || data.contributions.length === 0) {
      return { weeks: [], monthMarkers: [], stats: { total: 0, currentStreak: 0, longestStreak: 0, maxDay: { count: 0 } } }
    }

    const days = data.contributions
    const weeksList = []
    let currentWeek = []

    // Streak calculation
    let maxStreak = 0
    let tempStreak = 0
    let maxDay = { count: 0, date: "" }

    for (let i = 0; i < days.length; i++) {
      const d = days[i]
      if (d.count > maxDay.count) {
        maxDay = d
      }
      if (d.count > 0) {
        tempStreak++
        if (tempStreak > maxStreak) maxStreak = tempStreak
      } else {
        tempStreak = 0
      }
    }

    // Current streak from the end backwards
    let currentStreak = 0
    let idx = days.length - 1
    // Skip today if 0 commits and still early
    while (
      idx >= 0 &&
      days[idx].count === 0 &&
      new Date(days[idx].date).getTime() > Date.now() - 86400000 * 2
    ) {
      idx--
    }
    while (idx >= 0 && days[idx].count > 0) {
      currentStreak++
      idx--
    }

    // Pad beginning to align with Sunday
    const firstDayOfWeek = new Date(days[0].date + "T00:00:00").getDay()
    for (let i = 0; i < firstDayOfWeek; i++) {
      currentWeek.push(null)
    }

    days.forEach((day) => {
      currentWeek.push(day)
      if (currentWeek.length === 7) {
        weeksList.push(currentWeek)
        currentWeek = []
      }
    })

    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null)
      }
      weeksList.push(currentWeek)
    }

    // Determine month headers
    const markers = []
    let lastMonth = -1
    weeksList.forEach((week, wIdx) => {
      const validDay = week.find((d) => d !== null)
      if (validDay) {
        const month = new Date(validDay.date + "T00:00:00").getMonth()
        if (month !== lastMonth) {
          markers.push({ weekIndex: wIdx, name: monthNames[month] })
          lastMonth = month
        }
      }
    })

    const totalCount =
      data.total?.[yearOption === "last" ? "lastYear" : yearOption] ??
      days.reduce((acc, d) => acc + (d.count || 0), 0)

    return {
      weeks: weeksList,
      monthMarkers: markers,
      stats: {
        total: totalCount,
        currentStreak,
        longestStreak: maxStreak,
        maxDay,
      },
    }
  }, [data, yearOption])

  // Color classes mapping
  const getCellColor = (level) => {
    if (colorTheme === "amber") {
      switch (level) {
        case 1:
          return "bg-amber-950/70 border-amber-800/40 hover:border-amber-400"
        case 2:
          return "bg-amber-800/80 border-amber-600/50 hover:border-amber-300"
        case 3:
          return "bg-amber-500 border-amber-400/80 shadow-[0_0_8px_rgba(245,158,11,0.4)]"
        case 4:
          return "bg-amber-400 border-amber-200 shadow-[0_0_12px_rgba(251,191,36,0.7)]"
        default:
          return "bg-white/[0.04] border-white/5 hover:border-white/20"
      }
    } else {
      // Classic emerald GitHub style
      switch (level) {
        case 1:
          return "bg-emerald-950/80 border-emerald-800/40 hover:border-emerald-400"
        case 2:
          return "bg-emerald-800/90 border-emerald-600/60 hover:border-emerald-300"
        case 3:
          return "bg-emerald-500 border-emerald-400/80 shadow-[0_0_8px_rgba(16,185,129,0.4)]"
        case 4:
          return "bg-emerald-400 border-emerald-200 shadow-[0_0_12px_rgba(52,211,153,0.7)]"
        default:
          return "bg-white/[0.04] border-white/5 hover:border-white/20"
      }
    }
  }

  const handleCellMouseEnter = (e, day) => {
    if (!day) return
    const rect = e.currentTarget.getBoundingClientRect()
    const containerRect = containerRef.current?.getBoundingClientRect() || {
      left: 0,
      top: 0,
    }
    setTooltipPos({
      x: rect.left - containerRect.left + rect.width / 2,
      y: rect.top - containerRect.top - 12,
    })
    setHoveredDay(day)
  }

  const handleCellClick = (e, day) => {
    if (!day) return
    handleCellMouseEnter(e, day)
  }

  return (
    <section
      id="activity"
      className="relative border-t border-white/5 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400 font-mono">
                Open Source & Engineering Activity
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Consistent code, continuous evolution.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-400 sm:text-lg">
              Live contributions across public repositories, algorithmic
              solutions, and full-stack engineering. Public commit telemetry
              directly synchronized from GitHub.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Theme Toggle Button */}
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 text-xs font-mono">
              <button
                onClick={() => setColorTheme("emerald")}
                className={`rounded-full px-3 py-1.5 transition ${
                  colorTheme === "emerald"
                    ? "bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/40"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Emerald
              </button>
              <button
                onClick={() => setColorTheme("amber")}
                className={`rounded-full px-3 py-1.5 transition ${
                  colorTheme === "amber"
                    ? "bg-amber-400/20 text-amber-300 font-semibold border border-amber-400/40"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Amber
              </button>
            </div>

            {/* GitHub Profile CTA */}
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-amber-400/50 hover:bg-amber-400/10 hover:text-amber-300 active:scale-95"
            >
              <FaGithub size={16} />
              <span>@{GITHUB_USERNAME}</span>
              <ExternalLink size={14} className="text-neutral-400" />
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl transition hover:border-amber-400/30 hover:bg-white/[0.04]">
            <div className="flex items-center justify-between text-neutral-400">
              <span className="text-xs font-mono uppercase tracking-wider">
                Total Commits
              </span>
              <div className="rounded-lg border border-amber-400/20 bg-amber-400/10 p-2 text-amber-400">
                <GitCommit size={16} />
              </div>
            </div>
            <p className="mt-3 text-3xl font-bold tracking-tight text-white font-mono">
              {loading ? (
                <span className="inline-block h-8 w-16 animate-pulse rounded bg-white/10" />
              ) : (
                stats.total
              )}
            </p>
            <p className="mt-1 text-xs text-neutral-400">
              {yearOption === "last" ? "In the last 365 days" : `During ${yearOption}`}
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl transition hover:border-emerald-400/30 hover:bg-white/[0.04]">
            <div className="flex items-center justify-between text-neutral-400">
              <span className="text-xs font-mono uppercase tracking-wider">
                Current Streak
              </span>
              <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-2 text-emerald-400">
                <Flame size={16} />
              </div>
            </div>
            <p className="mt-3 text-3xl font-bold tracking-tight text-white font-mono">
              {loading ? (
                <span className="inline-block h-8 w-16 animate-pulse rounded bg-white/10" />
              ) : (
                `${stats.currentStreak} ${stats.currentStreak === 1 ? "Day" : "Days"}`
              )}
            </p>
            <p className="mt-1 text-xs text-neutral-400">Active consecutive streak</p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl transition hover:border-amber-400/30 hover:bg-white/[0.04]">
            <div className="flex items-center justify-between text-neutral-400">
              <span className="text-xs font-mono uppercase tracking-wider">
                Longest Streak
              </span>
              <div className="rounded-lg border border-amber-400/20 bg-amber-400/10 p-2 text-amber-300">
                <Trophy size={16} />
              </div>
            </div>
            <p className="mt-3 text-3xl font-bold tracking-tight text-white font-mono">
              {loading ? (
                <span className="inline-block h-8 w-16 animate-pulse rounded bg-white/10" />
              ) : (
                `${stats.longestStreak} Days`
              )}
            </p>
            <p className="mt-1 text-xs text-neutral-400">Personal peak streak</p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl transition hover:border-purple-400/30 hover:bg-white/[0.04]">
            <div className="flex items-center justify-between text-neutral-400">
              <span className="text-xs font-mono uppercase tracking-wider">
                Peak Day Activity
              </span>
              <div className="rounded-lg border border-purple-400/20 bg-purple-400/10 p-2 text-purple-400">
                <Sparkles size={16} />
              </div>
            </div>
            <p className="mt-3 text-3xl font-bold tracking-tight text-white font-mono">
              {loading ? (
                <span className="inline-block h-8 w-16 animate-pulse rounded bg-white/10" />
              ) : (
                `${stats.maxDay.count} Commits`
              )}
            </p>
            <p className="mt-1 text-xs text-neutral-400 truncate">
              {stats.maxDay.date ? formatDate(stats.maxDay.date) : "Recorded peak"}
            </p>
          </div>
        </div>

        {/* Heatmap Card in Terminal Style */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0f]/90 shadow-2xl backdrop-blur-xl">
          {/* Terminal Window Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-white/[0.02] px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              </div>

              <div className="ml-2 flex items-center gap-2 font-mono text-xs text-neutral-400">
                <Terminal size={14} className="text-amber-400" />
                <span>mesith@portfolio:~$ git log --graph --activity</span>
              </div>
            </div>

            {/* Year Selector Tabs & Refresh */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-1 font-mono text-xs">
                {[
                  { label: "Last 12 Months", value: "last" },
                  { label: "2026", value: "2026" },
                  { label: "2025", value: "2025" },
                  { label: "2024", value: "2024" },
                ].map((item) => (
                  <button
                    key={item.value}
                    onClick={() => setYearOption(item.value)}
                    className={`rounded-lg px-3 py-1 transition ${
                      yearOption === item.value
                        ? "bg-amber-400 font-semibold text-neutral-950 shadow-[0_0_10px_rgba(245,158,11,0.4)]"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => fetchContributions(yearOption, true)}
                disabled={isRefreshing}
                aria-label="Refresh GitHub Contributions"
                className="group flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-neutral-400 transition hover:border-amber-400/40 hover:text-amber-300"
              >
                <RefreshCw
                  size={14}
                  className={`transition-transform duration-500 ${
                    isRefreshing ? "animate-spin text-amber-400" : "group-hover:rotate-180"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Contribution Calendar Heatmap Area */}
          <div
            ref={containerRef}
            className="relative p-6 sm:p-8"
          >
            {/* Floating Tooltip */}
            <AnimatePresence>
              {hoveredDay && (
                <motion.div
                  initial={{ opacity: 0, y: 4, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    left: `${tooltipPos.x}px`,
                    top: `${tooltipPos.y}px`,
                  }}
                  className="pointer-events-none absolute z-30 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-xl border border-white/20 bg-neutral-900/95 px-3 py-2 text-xs font-mono shadow-2xl backdrop-blur-xl"
                >
                  <p className="font-semibold text-white">
                    {hoveredDay.count === 0
                      ? "No contributions"
                      : `${hoveredDay.count} ${
                          hoveredDay.count === 1 ? "contribution" : "contributions"
                        }`}
                  </p>
                  <p className="text-[11px] text-neutral-400">
                    {formatDate(hoveredDay.date)}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {loading ? (
              <div className="flex h-44 w-full flex-col items-center justify-center gap-3">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-amber-400 border-t-transparent" />
                <span className="font-mono text-xs text-neutral-400">
                  Fetching live contributions from GitHub...
                </span>
              </div>
            ) : (
              <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/10">
                <div className="min-w-[820px] select-none">
                  {/* Month Labels Header */}
                  <div className="relative mb-2 ml-8 flex h-5 text-xs font-mono text-neutral-400">
                    {monthMarkers.map((marker, idx) => (
                      <span
                        key={idx}
                        style={{
                          position: "absolute",
                          left: `${marker.weekIndex * 15}px`,
                        }}
                      >
                        {marker.name}
                      </span>
                    ))}
                  </div>

                  {/* Grid: 7 Rows (Days) x 53 Columns (Weeks) */}
                  <div className="flex gap-2">
                    {/* Day of Week Labels (Mon, Wed, Fri) */}
                    <div className="flex flex-col justify-between py-0.5 text-[10px] font-mono text-neutral-500 w-6">
                      <span className="h-3 leading-3">Sun</span>
                      <span className="h-3 leading-3">Mon</span>
                      <span className="h-3 leading-3">Tue</span>
                      <span className="h-3 leading-3">Wed</span>
                      <span className="h-3 leading-3">Thu</span>
                      <span className="h-3 leading-3">Fri</span>
                      <span className="h-3 leading-3">Sat</span>
                    </div>

                    {/* Columns of Weeks */}
                    <div className="flex gap-[3.5px]">
                      {weeks.map((week, wIdx) => (
                        <div key={wIdx} className="flex flex-col gap-[3.5px]">
                          {week.map((day, dIdx) => {
                            if (!day) {
                              return (
                                <div
                                  key={dIdx}
                                  className="h-3 w-3 rounded-[3px] opacity-0"
                                />
                              )
                            }

                            const isSelected = hoveredDay?.date === day.date

                            return (
                              <button
                                key={day.date}
                                type="button"
                                onMouseEnter={(e) => handleCellMouseEnter(e, day)}
                                onMouseLeave={() => setHoveredDay(null)}
                                onClick={(e) => handleCellClick(e, day)}
                                onFocus={(e) => handleCellMouseEnter(e, day)}
                                onBlur={() => setHoveredDay(null)}
                                aria-label={`${day.count} contributions on ${day.date}`}
                                className={`h-3 w-3 rounded-[3px] border transition-transform duration-150 focus:outline-none ${getCellColor(
                                  day.level
                                )} ${isSelected ? "scale-125 z-20 border-white ring-2 ring-amber-400/50" : "hover:scale-125 hover:z-10"}`}
                              />
                            )
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Legend and Info Bar */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-4 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <Info size={13} className="text-amber-400/80" />
                <span>
                  {hoveredDay ? (
                    <span className="text-white font-medium">
                      {hoveredDay.count} commits on {formatDate(hoveredDay.date)}
                    </span>
                  ) : (
                    <span>Hover or tap any square to inspect commits</span>
                  )}
                </span>
              </div>

              {/* Intensity Scale Legend */}
              <div className="flex items-center gap-2">
                <span className="text-neutral-500 text-[11px]">Less</span>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`h-3 w-3 rounded-[2px] border ${getCellColor(
                        level
                      )}`}
                    />
                  ))}
                </div>
                <span className="text-neutral-500 text-[11px]">More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GithubActivity
