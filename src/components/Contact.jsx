import { useState } from "react"
import { Download, Mail, MapPin, Send } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

const contactLinks = [
  {
    name: "Email",
    value: "mesithrathnayake0930@gmail.com",
    href: "mailto:mesithrathnayake0930@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/mesith-rathnayake-37647a213/",
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    value: "View my repositories",
    href: "https://github.com/Mesit-Rathnayake",
    icon: FaGithub,
  },
]

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject =
      formData.subject || `Portfolio enquiry from ${formData.name}`

    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `.trim()

    const mailtoUrl =
      `mailto:mesithrathnayake0930@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
  }

  return (
    <section
      id="contact"
      className="relative border-t border-white/5 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-amber-400/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
              Contact
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Let&apos;s build something meaningful together.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-400 sm:text-lg">
              I am always open to connecting with professionals, discussing innovative ideas, exploring collaborative projects, and learning about opportunities across software engineering, artificial intelligence, computer vision, DevOps, and cloud technologies.
            </p>

            <div className="mt-9 flex items-center gap-3 text-sm text-neutral-400">
              <MapPin size={18} className="text-amber-300" />
              Sri Lanka
            </div>

            <div className="mt-8 space-y-4">
              {contactLinks.map(({ name, value, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target={name === "Email" ? undefined : "_blank"}
                  rel={name === "Email" ? undefined : "noreferrer"}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-amber-400/30 hover:bg-white/[0.05]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
                    <Icon size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      {name}
                    </p>

                    <p className="mt-1 break-all text-sm text-neutral-500">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="/Mesith-Rathnayake-CV.pdf"
              download
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-amber-400/40 px-6 py-3 font-semibold text-amber-300 transition hover:border-amber-300 hover:bg-amber-400 hover:text-neutral-950"
            >
              <Download size={18} />
              Download My CV
            </a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                Send a message
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                Tell me about your idea or opportunity.
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-neutral-300"
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition placeholder:text-neutral-600 focus:border-amber-400/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-neutral-300"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition placeholder:text-neutral-600 focus:border-amber-400/50"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition placeholder:text-neutral-600 focus:border-amber-400/50"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition placeholder:text-neutral-600 focus:border-amber-400/50"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-3.5 font-semibold text-neutral-950 transition hover:bg-amber-300 sm:w-auto"
              >
                Send Message
                <Send size={18} />
              </button>

              <p className="text-sm leading-6 text-neutral-600">
                This opens your default email application with the message
                already prepared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact