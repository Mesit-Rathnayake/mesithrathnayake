function Starburst({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 0l1.6 9.2L12 12l-1.6-2.8L12 0zm12 12l-9.2 1.6L12 12l2.8-1.6L24 12zM12 24l-1.6-9.2L12 12l1.6 2.8L12 24zM0 12l9.2-1.6L12 12l-2.8 1.6L0 12z" />
      <path
        opacity="0.55"
        d="M3.5 3.5l6.1 4.6L12 12 7.9 9.6 3.5 3.5zm17 0l-4.6 6.1L12 12l2.4-4.1 6.1-4.4zm0 17l-6.1-4.6L12 12l4.1 2.4 4.4 6.1zm-17 0l4.6-6.1L12 12l-2.4 4.1-6.2 4.4z"
      />
    </svg>
  )
}

export default Starburst
