function Section({ id, index, title, children }) {
  return (
    <section
      id={id}
      className="border-t border-line px-6 py-24 md:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-12">
        <header className="lg:col-span-3">
          <div className="lg:sticky lg:top-24">
            <p className="label">({index})</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              {title}
            </h2>
          </div>
        </header>

        <div className="lg:col-span-9">{children}</div>
      </div>
    </section>
  )
}

export default Section
