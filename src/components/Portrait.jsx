import portrait from "../images/mesith-portrait.jpg"
import { profile } from "../data/portfolio"

function Portrait() {
  return (
    <figure className="relative mx-auto w-full max-w-sm lg:max-w-none">
      {/* Offset colour block, like a misregistered screen print. */}
      <div
        aria-hidden="true"
        className="absolute -bottom-4 -right-4 h-full w-full bg-accent/80"
      />

      <div className="glass relative p-2.5">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={portrait}
            alt={`Portrait of ${profile.name}`}
            width={960}
            height={1280}
            className="portrait-photo h-full w-full object-cover object-top"
          />
          <div className="portrait-tint absolute inset-0" />
          <div className="halftone absolute inset-x-0 bottom-0 h-1/4 opacity-20 [mask-image:linear-gradient(to_top,black,transparent)]" />
        </div>
      </div>

      <figcaption className="label relative mt-7 flex items-center justify-between">
        <span>Fig. 01</span>
        <span>{profile.name}</span>
      </figcaption>
    </figure>
  )
}

export default Portrait
