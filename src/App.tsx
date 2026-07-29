import { useState } from "react";
import "./App.css";
import Vidone from "./assets/videos/liveproduction/1.mp4";
import Vidtwo from "./assets/videos/liveproduction/2.mp4";
import Vidthree from "./assets/videos/liveproduction/3.mp4";
import Profile from "./assets/1000109178.jpeg";

type PortfolioView = "home" | "video-edits" | "live-productions" | "live-event";

type VideoItem = {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
  poster?: string;
};

type LiveEvent = {
  id: string;
  name: string;
  description: string;
  location: string;
  videos: VideoItem[];
};

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
    title: "Videography for Live Productions",
    description:
      "Capturing live events with sharp framing, smooth coverage, and reliable storytelling from the first moment to the final highlight.",
  },
];

const featuredWork = [
  {
    title: "Video edits",
    category: "Cinematic cuts",
    blurb:
      "Browse polished edits designed for brand storytelling, social campaigns, and cinematic releases.",
    view: "video-edits" as const,
  },
  {
    title: "Live productions",
    category: "Events & broadcasts",
    blurb:
      "Open the live production archive to explore event recaps and broadcast-ready highlights.",
    view: "live-productions" as const,
  },
];

const videoProjects: VideoItem[] = [
  {
    id: "launch-film",
    title: "AIHS",
    description:
      "Africa International Housing Show (AIHS) 2024 was Africa's largest housing and construction event, drawing over 40,000 participants and 500 exhibitors from more than 20 countries.",
    videoUrl: "https://youtu.be/DhzfzyjAhfo",
    duration: "01:00",
  },
  {
    id: "creator-reel",
    title: "Lizzy Bright",
    description: "Lizzy Bright Fabulous@40",
    videoUrl: "https://youtu.be/9RzhQo_Z0vU",
    duration: "05:33",
  },
  {
    id: "brand-story",
    title: "Airbnb",
    description: "An Airbnb interior video edit.",
    videoUrl: "https://youtu.be/Ns0Sp7J1Hsg",
    duration: "01:29",
  },
];

const liveProductionEvents: LiveEvent[] = [
  {
    id: "launch-night",
    name: "Event Hosted by Bank of Industry",
    description:
      "A full-room event production with live cuts, crowd energy, and a polished recap.",
    location: "Abuja",
    videos: [
      {
        id: "launch-night-highlight",
        title: "Video 1",
        description: "",
        videoUrl: Vidone,
        duration: "00:32",
      },
      {
        id: "launch-night-afterglow",
        title: "Video 2",
        description: "",
        videoUrl: Vidtwo,
        duration: "00:22",
      },
      {
        id: "launch-night-afterglow",
        title: "Video 3",
        description: "",
        videoUrl: Vidthree,
        duration: "00:18",
      },
    ],
  },
];

const renderMediaPlayer = (video: VideoItem) => {
  const youtubeMatch = video.videoUrl.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/,
  );

  if (youtubeMatch) {
    const videoId = youtubeMatch[1];

    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={video.title}
        className="aspect-video w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <video
      className="aspect-video w-full"
      controls
      playsInline
      preload="metadata"
      poster={video.poster}
    >
      <source src={video.videoUrl} type="video/mp4" />
    </video>
  );
};

function App() {
  const [view, setView] = useState<PortfolioView>("home");
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const activeEvent =
    liveProductionEvents.find((event) => event.id === selectedEventId) ?? null;

  const navigateHome = () => {
    setView("home");
    setSelectedEventId(null);
    setSelectedVideo(null);
  };

  const openVideo = (video: VideoItem) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const openVideoCategory = () => {
    setView("video-edits");
    setSelectedEventId(null);
    setSelectedVideo(null);
  };

  const openLiveCategory = () => {
    setView("live-productions");
    setSelectedEventId(null);
    setSelectedVideo(null);
  };

  const openEvent = (eventId: string) => {
    setSelectedEventId(eventId);
    setView("live-event");
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-[#05070b] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070b]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <button
            type="button"
            onClick={navigateHome}
            className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300"
          >
            DAVIES PRECIOUS
          </button>
          <div className="hidden items-center gap-6 md:flex">
            {view === "home" ? (
              navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))
            ) : (
              <button
                type="button"
                onClick={navigateHome}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                Back home
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={view === "home" ? openVideoCategory : navigateHome}
            className="rounded-full border border-cyan-400/40 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/10"
          >
            {view === "home" ? "View work" : "Back"}
          </button>
        </nav>
      </header>

      <main>
        {view === "home" ? (
          <>
            <section className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-28">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%)]" />
              <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-8">
                  <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.3em] text-cyan-200">
                    Videographer • Video editor • Motion storyteller
                  </span>
                  <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                    Hi! My name is Davies Precious, and I'm a videographer and
                    editor.
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-slate-300">
                    As a videographer and editor, I blend on-camera
                    storytelling, sharp pacing, and modern visuals to help
                    brands, creators, and teams communicate with impact.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button
                      type="button"
                      onClick={openVideoCategory}
                      className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                    >
                      View featured work
                    </button>
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
                      Freestyle storytelling, brand edits, and cinematic motion
                      for clients who want polished content that stands out.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="about" className="px-6 py-16 lg:px-8">
              <div className="mx-auto flex max-w-7xl flex-col-reverse gap-8 rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 lg:flex-row lg:items-center lg:gap-10 lg:p-12">
                <div className="flex-1">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                    About
                  </p>
                  <div className="mt-4 space-y-4 text-sm leading-8 text-slate-300">
                    <p>
                      I'm a passionate videographer and video editor dedicated
                      to creating compelling visual stories that leave a lasting
                      impression. I specialize in capturing authentic moments
                      and transforming raw footage into polished, engaging
                      content that reflects each client's vision.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:max-w-[420px]">
                  <div className="h-[320px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-800/80 shadow-xl shadow-black/20">
                    <img
                      src={Profile}
                      alt="Davies Precious in a creative studio setting"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
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
                  </div>
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
                    Choose a collection to explore the work in more detail.
                  </h2>
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                  {featuredWork.map((item) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() =>
                        item.view === "video-edits"
                          ? openVideoCategory()
                          : openLiveCategory()
                      }
                      className="card-hover rounded-[1.5rem] border border-white/10 bg-black/20 p-6 text-left"
                    >
                      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                        {item.category}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        {item.blurb}
                      </p>
                    </button>
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
                  If you need a sharp edit, a strong story, or a reliable
                  partner for your next release, I’d love to help.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  Reach out for collaborations, freelance work, or full-scale
                  editing support for campaigns, content, and branded
                  storytelling.
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
          </>
        ) : view === "video-edits" ? (
          <section className="px-6 py-16 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                    Video edits
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                    Select a reel to open the player.
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={navigateHome}
                  className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Back to home
                </button>
              </div>
              <div className="grid gap-6 lg:grid-cols-3">
                {videoProjects.map((project) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => openVideo(project)}
                    className="card-hover rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 text-left"
                  >
                    <div className="mb-5 flex h-36 items-center justify-center rounded-[1rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_60%)]">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-950/70 shadow-lg shadow-cyan-950/30">
                        <svg
                          viewBox="0 0 24 24"
                          className="ml-1 h-6 w-6 fill-cyan-300"
                          aria-hidden="true"
                        >
                          <path d="M8 6.5v11a1 1 0 0 0 1.5.87l8-5.5a1 1 0 0 0 0-1.74l-8-5.5A1 1 0 0 0 8 6.5Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                        {project.duration}
                      </p>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                        Preview
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {project.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </section>
        ) : view === "live-productions" ? (
          <section className="px-6 py-16 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                    Live productions
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                    Choose an event to see the clips within it.
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={navigateHome}
                  className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Back to home
                </button>
              </div>
              <div className="grid gap-6 lg:grid-cols-3">
                {liveProductionEvents.map((event) => (
                  <button
                    key={event.id}
                    type="button"
                    onClick={() => openEvent(event.id)}
                    className="card-hover rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 text-left"
                  >
                    <div className="mb-5 flex h-36 items-center justify-center rounded-[1rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_60%)]">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-950/70 shadow-lg shadow-cyan-950/30">
                        <svg
                          viewBox="0 0 24 24"
                          className="ml-1 h-6 w-6 fill-cyan-300"
                          aria-hidden="true"
                        >
                          <path d="M8 6.5v11a1 1 0 0 0 1.5.87l8-5.5a1 1 0 0 0 0-1.74l-8-5.5A1 1 0 0 0 8 6.5Z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                      {event.location}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-white">
                      {event.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {event.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="px-6 py-16 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                    {activeEvent?.name ?? "Live production"}
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                    Explore clips from this event.
                  </h2>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setView("live-productions")}
                    className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                  >
                    Back to events
                  </button>
                  <button
                    type="button"
                    onClick={navigateHome}
                    className="rounded-full border border-cyan-400/30 px-5 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/10"
                  >
                    Back to home
                  </button>
                </div>
              </div>
              <div className="mb-8 rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                  Event details
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {activeEvent?.name}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                  {activeEvent?.description}
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-3">
                {activeEvent?.videos.map((video) => (
                  <button
                    key={video.id}
                    type="button"
                    onClick={() => openVideo(video)}
                    className="card-hover rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 text-left"
                  >
                    <div className="mb-5 flex h-36 items-center justify-center rounded-[1rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_60%)]">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-950/70 shadow-lg shadow-cyan-950/30">
                        <svg
                          viewBox="0 0 24 24"
                          className="ml-1 h-6 w-6 fill-cyan-300"
                          aria-hidden="true"
                        >
                          <path d="M8 6.5v11a1 1 0 0 0 1.5.87l8-5.5a1 1 0 0 0 0-1.74l-8-5.5A1 1 0 0 0 8 6.5Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                        {video.duration}
                      </p>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                        Watch
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-white">
                      {video.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {video.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {selectedVideo ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 px-4 py-8 backdrop-blur">
          <div className="w-full max-w-4xl rounded-[2rem] border border-white/10 bg-slate-900/95 p-4 shadow-2xl shadow-cyan-950/40 sm:p-6">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                  Now playing
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {selectedVideo.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeVideo}
                className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Close
              </button>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
              {renderMediaPlayer(selectedVideo)}
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {selectedVideo.description}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
