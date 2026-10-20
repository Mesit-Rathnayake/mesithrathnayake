import GradientASCII from "./GradientASCII"
import Starburst from "./Starburst"

/* 60-30-10 Living Backdrop:
   60% Pure Pitch Black Canvas (#000000)
   30% Structural Deep Slate-Petrol Navy (#233D4D) & Light Silver (#EAECF0)
   10% Sunset Amber-Orange Accent Flare (#FE7F2D) */

function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black"
    >
      {/* Dynamic Retro-Futuristic ASCII Gradient Field */}
      <div className="absolute inset-0 opacity-75">
        <GradientASCII
          colors={[
            "#000000",
            "#0d1820",
            "#233d4d",
            "#3a647d",
            "#fe7f2d",
            "#eaecf0",
          ]}
          shape="horizon"
          characters=" .:-=+*#%@"
          cellSize={17}
          density={0.72}
          glyphOpacity={0.95}
          glow={0.22}
          depthOfField={0.03}
          flicker={0.16}
          softness={0.35}
          scale={1.12}
          flow={0.5}
          speed={0.8}
          gradientOpacity={0.28}
          grain={0.06}
          variation={0}
          mouseInteraction={true}
          scrambleRadius={0.12}
          clickEffect="wave"
          intro={true}
          lightMode={false}
          fontFamily='"JetBrains Mono Variable", "Geist Mono", ui-monospace, monospace'
        />
      </div>

      {/* Atmospheric vignette pulling in 60% pure black across perimeter and lower sections */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 95% 85% at 50% 25%, transparent 20%, rgba(0, 0, 0, 0.5) 55%, rgba(0, 0, 0, 0.96) 100%)",
        }}
      />

      {/* Subtle mid-century / retro-space orbital geometry using 30% petrol tone */}
      <div className="absolute -top-[12vmin] -right-[12vmin] h-[58vmin] w-[58vmin] rounded-full border border-petrol/25" />
      <div className="absolute bottom-[8%] right-[10%] h-[32vmin] w-[32vmin] rounded-full border border-petrol/25" />
      <div className="halftone absolute left-[3%] top-[16%] h-[20vmin] w-[20vmin] opacity-15" />
      <Starburst className="slow-spin absolute bottom-[14%] right-[6%] w-[12vmin] text-petrol/40" />
    </div>
  )
}

export default Backdrop
