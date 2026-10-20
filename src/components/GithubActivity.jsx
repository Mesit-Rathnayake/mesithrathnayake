import { useEffect, useMemo, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { profile } from "../data/portfolio"
import Section from "./Section"

const API_BASE = "https://github-contributions-api.jogruber.de/v4"

const YEARS = [
  { label: "12M", value: "last" },
  { label: "2026", value: "2026" },
  { label: "2025", value: "2025" },
  { label: "2024", value: "2024" },
]

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
]

const LEVEL_CLASS = [
  "bg-fg/10",
  "bg-accent/25",
  "bg-accent/50",
  "bg-accent/75",
  "bg-accent",
]

const CELL = 11
const GAP = 3

function formatDate(date) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

function buildCalendar(days) {
  const weeks = []
  const months = []
  let week = new Array(new Date(`${days[0].date}T00:00:00`).getDay()).fill(null)

  days.forEach((day) => {
    week.push(day)
    if (week.length === 7) {
      weeks.push(week)
      week = []
    }
  })
  if (week.length) {
    weeks.push([...week, ...new Array(7 - week.length).fill(null)])
  }

  let lastMonth = -1
  weeks.forEach((w, index) => {
    const first = w.find(Boolean)
    const month = new Date(`${first.date}T00:00:00`).getMonth()
    if (month !== lastMonth) {
      months.push({ week: index, name: MONTHS[month] })
      lastMonth = month
    }
  })

  let total = 0
  let longest = 0
  let run = 0
  days.forEach((day) => {
    total += day.count
    run = day.count > 0 ? run + 1 : 0
    longest = Math.max(longest, run)
  })

  // Today may legitimately still be empty, so don't break the streak on it.
  let current = 0
  let cursor = days.length - 1
  if (days[cursor].count === 0) cursor--
  while (cursor >= 0 && days[cursor].count > 0) {
    current++
    cursor--
  }

  return { weeks, months, total, longest, current }
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="label">{label}</p>
      <p className="mt-2 text-4xl font-semibold tabular-nums tracking-tight sm:text-5xl">
        {value}
      </p>
    </div>
  )
}

function GithubActivity() {
  const [year, setYear] = useState("last")
  const [result, setResult] = useState({ year: null, days: null })
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const response = await fetch(
          `${API_BASE}/${profile.githubUser}?y=${year}`
        )
        if (!response.ok) throw new Error("Request failed")
        const json = await response.json()
        if (!cancelled) setResult({ year, days: json.contributions })
      } catch {
        if (!cancelled) setResult({ year, days: null })
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [year])

  const loading = result.year !== year
  const calendar = useMemo(
    () =>
      !loading && result.days?.length ? buildCalendar(result.days) : null,
    [loading, result.days]
  )
  const failed = !loading && !calendar

  const stat = (value) => (loading || failed ? "—" : value)

  return (
    <Section id="activity" index="04" title="Activity">
      <div className="grid grid-cols-3 gap-6">
        <Stat label="Contributions" value={stat(calendar?.total)} />
        <Stat label="Current streak" value={stat(calendar?.current)} />
        <Stat label="Longest streak" value={stat(calendar?.longest)} />
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
        <ul className="flex gap-5">
          {YEARS.map((item) => (
            <li key={item.value}>
              <button
                type="button"
                onClick={() => setYear(item.value)}
                aria-pressed={year === item.value}
                className={`label border-b pb-1 transition-colors hover:text-fg ${
                  year === item.value
                    ? "border-accent !text-fg"
                    : "border-transparent"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="label inline-flex items-center gap-1 transition-colors hover:text-accent"
        >
          @{profile.githubUser}
          <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="glass mt-8 p-5 md:p-8">
      <div className="overflow-x-auto pb-2">
        {calendar ? (
          <div className="min-w-[760px] select-none">
            <div
              className="relative mb-2 h-4"
              style={{ width: calendar.weeks.length * (CELL + GAP) }}
            >
              {calendar.months.map((month) => (
                <span
                  key={`${month.name}-${month.week}`}
                  className="label absolute"
                  style={{ left: month.week * (CELL + GAP) }}
                >
                  {month.name}
                </span>
              ))}
            </div>

            <div className="flex" style={{ gap: GAP }}>
              {calendar.weeks.map((week, weekIndex) => (
                <div
                  key={weekIndex}
                  className="flex flex-col"
                  style={{ gap: GAP }}
                >
                  {week.map((day, dayIndex) =>
                    day ? (
                      <button
                        key={day.date}
                        type="button"
                        onMouseEnter={() => setHovered(day)}
                        onMouseLeave={() => setHovered(null)}
                        onFocus={() => setHovered(day)}
                        onBlur={() => setHovered(null)}
                        aria-label={`${day.count} contributions on ${day.date}`}
                        style={{ width: CELL, height: CELL }}
                        className={`${
                          LEVEL_CLASS[day.level] ?? LEVEL_CLASS[0]
                        } hover:outline hover:outline-1 hover:outline-fg`}
                      />
                    ) : (
                      <span
                        key={`empty-${dayIndex}`}
                        style={{ width: CELL, height: CELL }}
                      />
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="label py-10">
            {loading ? "Loading activity" : "Activity is unavailable right now"}
          </p>
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="label min-h-4 !text-fg">
          {hovered
            ? `${hovered.count} contribution${hovered.count === 1 ? "" : "s"} — ${formatDate(hovered.date)}`
            : ""}
        </p>

        <div className="flex items-center gap-2">
          <span className="label">Less</span>
          {LEVEL_CLASS.map((cls) => (
            <span
              key={cls}
              className={cls}
              style={{ width: CELL, height: CELL }}
            />
          ))}
          <span className="label">More</span>
        </div>
      </div>
      </div>
    </Section>
  )
}

export default GithubActivity
