/**
 * Robustly trigger a direct file download for the CV, preventing browser in-tab preview
 * and ensuring the file is saved directly to the user's Downloads folder.
 */
export async function downloadCV(e, cvUrl = "/Mesith-Rathnayake-CV.pdf", filename = "Mesith-Rathnayake-CV.pdf") {
  if (e?.preventDefault) {
    e.preventDefault()
  }

  try {
    const res = await fetch(cvUrl)
    if (!res.ok) throw new Error("Failed to fetch CV file")
    const blob = await res.blob()
    const blobUrl = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = blobUrl
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000)
  } catch {
    // Fallback: direct anchor trigger
    const link = document.createElement("a")
    link.href = cvUrl
    link.download = filename
    link.target = "_blank"
    link.rel = "noopener noreferrer"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}
