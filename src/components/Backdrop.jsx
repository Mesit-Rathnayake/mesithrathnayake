import GradientASCII from "./GradientASCII"
import Starburst from "./Starburst"

/* Retro-futuristic living backdrop:
   WebGL GradientASCII field layered behind frosted glass panels,
   balanced with deep dark space, subtle mid-century astronomical geometry,
   and responsive cursor wave interactions. */

function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Dynamic Retro-Futuristic ASCII Gradient Field with deep dark space */}
      <div className="absolute inset-0 opacity-75">
        <GradientASCII
          colors={[
            "#080504",
            "#381308",
            "#6e2b12",
            "#b86214",
            "#f0642b",
            "#f0e8d8",
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

      {/* Atmospheric vignette pulling in deeper darkness across perimeter and lower sections */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 95% 85% at 50% 25%, transparent 20%, rgba(28, 26, 23, 0.45) 55%, rgba(28, 26, 23, 0.9) 100%)",
        }}
      />

      {/* Subtle mid-century / retro-space orbital geometry */}
      <div className="absolute -top-[12vmin] -right-[12vmin] h-[58vmin] w-[58vmin] rounded-full border border-fg/10" />
      <div className="absolute bottom-[8%] right-[10%] h-[32vmin] w-[32vmin] rounded-full border border-fg/10" />
      <div className="halftone absolute left-[3%] top-[16%] h-[20vmin] w-[20vmin] opacity-15" />
      <Starburst className="slow-spin absolute bottom-[14%] right-[6%] w-[12vmin] text-fg/15" />
    </div>
  )
}

export default Backdrop
