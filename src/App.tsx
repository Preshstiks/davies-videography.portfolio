import "./App.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Cinematic Editing",
    description:
      "Narrative pacing, emotional transitions, and clean storytelling that make every frame feel intentional.",
  },
  {
    title: "Social Reels",
    description:
      "Fast-moving edits built for Instagram, TikTok, YouTube Shorts, and campaign launches.",
  },
  {
    title: "Brand Motion",
    description:
      "Motion graphics, title design, and polished visuals that reinforce your message with confidence.",
  },
];

const featuredWork = [
  {
    title: "Launch Film",
    category: "Brand campaign",
    blurb: "A high-impact short film designed to turn attention into action.",
  },
  {
    title: "Creator Reel",
    category: "Personal brand",
    blurb:
      "A punchy, story-led edit that highlights voice, personality, and momentum.",
  },
  {
    title: "Event Recap",
    category: "Live coverage",
    blurb:
      "A fast, cinematic recap that captures the energy of the room from start to finish.",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-[#05070b] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070b]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#home"
            className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300"
          >
            DAVIES PRECIOUS
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full border border-cyan-400/40 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/10"
          >
            Book a call
          </a>
        </nav>
      </header>

      <main id="home">
        <section className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8">
              <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.3em] text-cyan-200">
                Videographer • Video editor • Motion storyteller
              </span>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                I turn real moments and raw footage into cinematic stories that
                feel clear, powerful, and impossible to forget.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                As a videographer and editor, I blend on-camera storytelling,
                sharp pacing, and modern visuals to help brands, creators, and
                teams communicate with impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#work"
                  className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  View featured work
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Let’s talk
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-3 shadow-2xl shadow-cyan-950/30 backdrop-blur">
              <img
                src="/portfolio-portrait.svg"
                alt="Portrait of Aiden Vale"
                className="h-[480px] w-full rounded-[1.5rem] object-cover object-center"
              />
              <div className="absolute inset-x-6 bottom-6 rounded-[1.25rem] border border-white/10 bg-slate-950/75 p-4 backdrop-blur">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                    Current focus
                  </p>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    Open for projects
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Freestyle storytelling, brand edits, and cinematic motion for
                  clients who want polished content that stands out.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="px-6 py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                About
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                I’m a videographer and editor who creates work that feels
                thoughtful, modern, and made for real audiences.
              </h2>
            </div>
            <div className="space-y-4 text-lg leading-8 text-slate-300">
              <p>
                My work blends on-location storytelling, editing rhythm, and
                polished motion design so each project feels intentional from
                the first frame to the last.
              </p>
              <p>
                Whether I’m shaping a brand film, cutting a promotional reel, or
                helping a team deliver a strong narrative, I focus on clarity,
                emotion, and a premium final result that reflects the value
                behind the story.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                  Services
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                  Built for brands, creators, and teams that need momentum.
                </h2>
              </div>
              <p className="max-w-2xl text-slate-300">
                I deliver work that’s sharp, adaptable, and built to meet the
                pace of modern content creation.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="card-hover rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-linear-to-br from-slate-900 to-slate-950 p-8 lg:p-12">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                Featured work
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                A few examples of work that balances story and polish.
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {featuredWork.map((item) => (
                <article
                  key={item.title}
                  className="card-hover rounded-[1.5rem] border border-white/10 bg-black/20 p-6"
                >
                  <div className="mb-6 h-36 rounded-[1rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_60%)]" />
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                    {item.category}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.blurb}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-400/20 bg-cyan-500/10 p-8 text-center lg:p-12">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              If you need a sharp edit, a strong story, or a reliable partner
              for your next release, I’d love to help.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Reach out for collaborations, freelance work, or full-scale
              editing support for campaigns, content, and branded storytelling.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:preshydave.d5@gmail.com"
                className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                preshydave.d5@gmail.com
              </a>
              <a
                href="#home"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Back to top
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
