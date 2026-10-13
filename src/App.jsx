

import { useState } from 'react'

import {

  ArrowDownRight,

  ArrowRight,

  Atom,

  Beaker,

  FlaskConical,

  Menu,

  Plus,

  Send,

  X,

  Microscope,

  Dna,

} from 'lucide-react'

// Official X logo — separate from the mobile menu's close icon

function XLogo({ size = 18 }) {

  return (

    <svg

      width={size}

      height={size}

      viewBox="0 0 24 24"

      fill="currentColor"

      aria-hidden="true"

    >

      <path d="M18.901 1.153h3.308l-7.227 8.26 8.502 11.434h-6.657l-5.214-6.817-5.966 6.817H2.337l7.73-8.835L1.912 1.153h6.826l4.713 6.231zM17.74 18.83h1.833L7.827 3.065H5.86z" />

    </svg>

  )

}

const experiments = [

  {

    id: "EXP-001",

    name: "First Experiment",

    status: "AWAITING LAUNCH",

    description:

      "Something is brewing in the lab. Details will be revealed when the experiment is ready.",

    icon: FlaskConical,

    statusClass:

      "border-orange-500/20 bg-orange-500/10 text-orange-300",

  },

  {

    id: "EXP-002",

    name: "Experiment Two",

    status: "IN THE LAB",

    description:

      "A new creation is under development. Stay tuned for the next discovery.",

    icon: Atom,

    statusClass:

      "border-purple-400/20 bg-purple-400/10 text-purple-300",

  },

  {

    id: "EXP-003",

    name: "Classified Experiment",

    status: "AWAITING REVEAL",

    description:

      "Not every experiment is ready for public viewing. Keep an eye on the laboratory.",

    icon: Microscope,

    statusClass:

      "border-amber-400/20 bg-amber-400/10 text-amber-300",

  },

];

const roadmap = [

  [

    '01',

    'Establish the Lab',

    'Introduce Grem Labs Inc. and Dr. Grem.',

    [

      'Develop the lab’s visual identity and core narrative.',

      'Set up official social channels and a community hub.',

    ],

  ],

  [

    '02',

    'Build the System',

    'Create a process for developing and reviewing new ideas.',

    [

      'Establish standards for artwork, storytelling, and community support.',

      'Organize how each experiment fits within the Grem Labs universe.',

    ],

  ],

  [

    '03',

    'Connect the Community',

    'Share behind-the-scenes updates from the laboratory.',

    [

      'Host AMAs, creative challenges, and community discussions.',

      'Use feedback to help shape future experiments.',

    ],

  ],

  [

    '04',

    'Expand the Laboratory',

    'Develop new characters, concepts, and stories.',

    [

      'Connect experiments through shared lore and crossover events.',

      'Grow the creative team and explore collaborations.',

    ],

  ],

  [

    '05',

    'Strengthen the Ecosystem',

    'Build a central hub for experiments, content, and updates.',

    [

      'Improve the system as the laboratory grows.',

      'Maintain ongoing support for existing projects.',

      'Build a recognizable brand with an active, connected community.',

    ],

  ],

]

function SectionTitle({ eyebrow, title, description }) {

  return (

    <div className="mb-10 max-w-2xl">

      <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-orange-500">

        {eyebrow}

      </p>

      <h2 className="text-3xl font-black uppercase leading-tight tracking-tight sm:text-5xl">

        {title}

      </h2>

      {description && (

        <p className="mt-4 max-w-xl leading-7 text-stone-400">{description}</p>

      )}

    </div>

  )

}

export default function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  const [idea, setIdea] = useState({ name: '', description: '' })

  const [image, setImage] = useState(null)

  const [message, setMessage] = useState('')

  function submitIdea(e) {

    e.preventDefault()

    setMessage(

      'Your form is working! Connect a database and image storage to save submissions permanently.'

    )

  }

const navItems = [

  ['The Lab', '#home'],

  ['Experiments', '#experiments'],

  ['Roadmap', '#roadmap'],

  ['Community', '#community'],

  ['Our Story', '#story'],

]

  return (

    <div className="min-h-screen overflow-hidden bg-[#090807] text-stone-100">

      <div className="h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090807]/90 backdrop-blur-xl">

        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">

          <a href="#home" className="flex shrink-0 items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center border border-orange-500/60 bg-orange-500/10 text-orange-400">

              <Atom size={27} />

            </div>

            <div>

              <p className="text-sm font-black uppercase tracking-wider sm:text-base">

                Grem Labs <span className="text-orange-500">Inc.</span>

              </p>

              <p className="text-[9px] uppercase tracking-[0.25em] text-stone-500">

                Experimental Division

              </p>

            </div>

          </a>

          <div className="hidden items-center gap-7 lg:flex">

            {navItems.map(([label, href]) => (

              <a

                key={label}

                href={href}

                className="text-xs font-bold uppercase tracking-wider text-stone-400 transition hover:text-orange-400"

              >

                {label}

              </a>

            ))}

          </div>

          {/* ADDED: Social links in the desktop navbar */}

          <div className="hidden items-center gap-4 lg:flex">

            <a

              href="https://x.com/gremlabsinc?s=11"

              target="_blank"

              rel="noreferrer"

              aria-label="Grem Labs on X"

              title="X"

              className="text-stone-400 transition hover:text-orange-400"

            >

              <XLogo size={18} />

            </a>

            <a

              href="https://t.me/+YLTnMtYgZJo5ZjJh"

              target="_blank"

              rel="noreferrer"

              aria-label="Grem Labs on Telegram"

              title="Telegram"

              className="text-stone-400 transition hover:text-orange-400"

            >

              <Send size={18} />

            </a>

          </div>

          <a

            href="#community"

            className="hidden shrink-0 border border-orange-500 px-4 py-3 text-[10px] font-black uppercase tracking-wider text-orange-400 transition hover:bg-orange-500 hover:text-black sm:block"

          >

            Join the Community ↗

          </a>

          <button

            onClick={() => setMenuOpen(!menuOpen)}

            className="p-2 text-orange-400 lg:hidden"

            aria-label="Toggle navigation"

            aria-expanded={menuOpen}

          >

            {menuOpen ? <X /> : <Menu />}

          </button>

        </nav>

        {menuOpen && (

          <div className="border-t border-white/10 bg-[#100d0b] px-5 py-4 lg:hidden">

            {navItems.map(([label, href]) => (

              <a

                key={label}

                href={href}

                onClick={() => setMenuOpen(false)}

                className="block border-b border-white/5 py-4 text-sm uppercase tracking-wider text-stone-300 transition hover:text-orange-400"

              >

                {label}

              </a>

            ))}

            {/* ADDED: Social links in the mobile menu */}

            <div className="flex items-center justify-between border-t border-white/10 pt-5 mt-4">

              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">

                Connect with us

              </span>

              <div className="flex items-center gap-5">

                <a

                  href="https://x.com/gremlabsinc?s=11"

                  target="_blank"

                  rel="noreferrer"

                  aria-label="Grem Labs on X"

                  title="X"

                  className="text-stone-400 transition hover:text-orange-400"

                >

                  <XLogo size={20} />

                </a>

                <a

                  href="https://t.me/+YLTnMtYgZJo5ZjJh"

                  target="_blank"

                  rel="noreferrer"

                  aria-label="Grem Labs on Telegram"

                  title="Telegram"

                  className="text-stone-400 transition hover:text-orange-400"

                >

                  <Send size={20} />

                </a>

              </div>

            </div>

          </div>

        )}

      </header>

      <main>

        <section id="home" className="relative isolate">

          <div className="pointer-events-none absolute -left-48 top-10 -z-10 h-96 w-96 rounded-full bg-orange-600/10 blur-[130px]" />

          <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-24">

            <div>

              <div className="mb-7 inline-flex items-center gap-2 border border-orange-500/30 bg-orange-500/5 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-orange-400">

                <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />

                Laboratory status: Operational

              </div>

              <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-stone-500">

                Welcome to the chaos

              </p>

              <h1 className="text-6xl font-black uppercase leading-[0.92] tracking-[-0.06em] sm:text-8xl">

                Small

                <br />

                Trouble<span className="text-orange-500">.</span>

                <br />

                <span className="text-orange-500">Big Ideas.</span>

              </h1>

              <div className="my-7 h-1 w-24 bg-orange-500" />

              <p className="max-w-lg text-base leading-8 text-stone-400 sm:text-lg">

                Where innovation meets chaos. One experimental laboratory.

                An expanding universe of characters, concepts and crypto

                creations. Nobody knows what Dr. Grem is cooking up next.

              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <a

                  href="#experiments"

                  className="inline-flex items-center gap-3 bg-orange-500 px-6 py-4 text-xs font-black uppercase tracking-wider text-black transition hover:bg-orange-400"

                >

                  Explore experiments <ArrowRight size={16} />

                </a>

                <a

                  href="#story"

                  className="inline-flex items-center gap-3 border border-white/15 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:border-orange-500"

                >

                  Meet the lab <ArrowDownRight size={16} />

                </a>

              </div>

              <div className="mt-12 flex items-center gap-5 border-t border-white/10 pt-6">

                <div>

                  <p className="text-2xl font-black">01</p>

                  <p className="mt-1 text-[9px] uppercase tracking-widest text-stone-500">

                    Connected universe

                  </p>

                </div>

                <div className="h-9 w-px bg-white/10" />

                <div>

                  <p className="text-2xl font-black">∞</p>

                  <p className="mt-1 text-[9px] uppercase tracking-widest text-stone-500">

                    Ideas to experiment with

                  </p>

                </div>

              </div>

            </div>

            <div className="relative mx-auto w-full max-w-xl">

              <div className="absolute -inset-5 -z-10 bg-orange-600/10 blur-3xl" />

              <div className="relative overflow-hidden border border-orange-500/30 bg-[#120d09] shadow-[0_0_60px_rgba(249,115,22,0.12)]">

                <div className="flex items-center justify-between border-b border-orange-500/20 px-4 py-3">

                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-orange-400">

                    G.L. // Specimen archive

                  </span>

                  <span className="text-[9px] text-stone-500">FILE 001</span>

                </div>

                <div className="relative">

                  <img

                    src="/grem-labs-hero.png"

                    alt="Dr. Grem working in the Grem Labs experimental laboratory"

                    className="block h-auto max-h-[650px] w-full object-cover object-center"

                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-5 pb-5 pt-16">

                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-400">

                      Specimen No. 001

                    </p>

                    <h2 className="mt-2 text-2xl font-black uppercase sm:text-3xl">

                      Dr. Grem's Lab

                    </h2>

                    <p className="mt-1 text-xs text-stone-300">

                      Creativity. Curiosity. A little chaos.

                    </p>

                  </div>

                </div>

                <div className="grid grid-cols-3 border-t border-orange-500/20">

                  {['CREATE', 'INNOVATE', 'MISCHIEF'].map((word) => (

                    <div

                      key={word}

                      className="border-r border-orange-500/20 py-4 text-center text-[9px] font-black tracking-widest text-orange-400 last:border-0"

                    >

                      {word}

                    </div>

                  ))}

                </div>

              </div>

              <div className="absolute -right-3 top-16 hidden border border-orange-500/40 bg-[#090807] px-3 py-2 text-[9px] uppercase tracking-widest text-orange-400 sm:block">

                Experiment active

              </div>

            </div>

          </div>

        </section>

        {/* Experiments Section */}

<section

  id="experiments"

  className="relative overflow-hidden px-6 py-24 text-white sm:px-10 lg:px-16"

>

  <div className="mx-auto max-w-7xl">

    {/* Section heading */}

    <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

      <div>

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-400">

          The Experiment Archive

        </p>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">

          Something is brewing

          <span className="text-orange-500">.</span>

        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">

          Dr. Grem is working on the next creation. Explore the

          experiments in our laboratory as the Grem Labs ecosystem grows.

        </p>

      </div>

      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs font-medium text-orange-300">

        <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />

        First Experiments Coming Soon

      </div>

    </div>

    {/* Experiment cards */}

    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

      {experiments.map((experiment) => {

        const Icon = experiment.icon;

        return (

          <article

            key={experiment.id}

            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white/[0.05] sm:p-6"

          >

            {/* Card header */}

            <div className="mb-5 flex items-center justify-between gap-3">

              <span className="font-mono text-xs tracking-wider text-gray-500">

                {experiment.id}

              </span>

              <span

                className={`rounded-full border px-3 py-1.5 text-[10px] font-semibold tracking-wider ${experiment.statusClass}`}

              >

                {experiment.status}

              </span>

            </div>

            {/* Visual placeholder */}

            <div className="relative mb-6 flex h-40 flex-col items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-orange-500/[0.10] via-slate-900/40 to-transparent">

              <div className="absolute inset-0 opacity-30">

                <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-500/20" />

                <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-500/20" />

              </div>

              <Icon className="relative mb-3 h-9 w-9 text-orange-300 transition duration-300 group-hover:scale-110" />

              <span className="relative text-[10px] font-medium uppercase tracking-[0.25em] text-gray-500">

                Classified Project

              </span>

            </div>

            {/* Experiment details */}

            <h3 className="text-xl font-semibold tracking-tight">

              {experiment.name}

            </h3>

            <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-gray-400">

              {experiment.description}

            </p>

            {/* Market data */}

            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">

              <div className="rounded-lg bg-black/20 p-3">

                <p className="text-[10px] uppercase tracking-wider text-gray-500">

                  Market Cap

                </p>

                <p className="mt-2 text-lg font-semibold text-gray-300">

                  —

                </p>

              </div>

              <div className="rounded-lg bg-black/20 p-3">

                <p className="text-[10px] uppercase tracking-wider text-gray-500">

                  All-Time High

                </p>

                <p className="mt-2 text-lg font-semibold text-gray-300">

                  —

                </p>

              </div>

            </div>

            {/* Card footer */}

            <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">

              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">

                Grem Labs Inc.

              </span>

              <span className="text-xs text-orange-300/70">

                More details soon

              </span>

            </div>

          </article>

        );

      })}

    </div>

    <p className="mt-8 text-center text-xs leading-6 text-gray-500">

      No experiments have launched yet. Market data will appear here

      when the relevant tokens go live.

    </p>

  </div>

</section>

        <section id="story" className="px-5 py-24 sm:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="mb-16 max-w-4xl">

              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-orange-500">

                🧪 GREM LABS INC.

              </p>

              <h2 className="text-4xl font-black uppercase leading-tight sm:text-6xl">

                SMALL TROUBLE. <span className="text-orange-500">BIG IDEAS.</span> 🧬

              </h2>

              <p className="mt-6 text-lg leading-8 text-stone-300">

                Where innovation meets chaos, and every experiment has the potential

                to become something extraordinary.

              </p>

              <p className="mt-6 leading-8 text-stone-400">

                Founded by the mysterious mastermind <strong className="text-stone-200">Dr. Grem</strong>,

                Grem Labs is an experimental laboratory dedicated to creating,

                developing, and launching an entire universe of unique cryptocurrency

                projects.

              </p>

              <p className="mt-5 text-xl font-bold leading-8 text-stone-200">

                We’re not here to create just one coin. We’re here to build an

                empire of experiments.

              </p>

            </div>

            <div className="grid gap-6 lg:grid-cols-2">

              <article className="border border-orange-500/30 bg-[#100d0a] p-6 sm:p-9">

                <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-orange-500">

                  🔬 THE LABORATORY

                </p>

                <div className="space-y-5 leading-8 text-stone-400">

                  <p>

                    Deep inside Grem Labs, Dr. Grem is constantly working on his

                    next creation. Every experiment introduces a new concept, a new

                    character, and a new memecoin to the growing Grem Labs universe.

                  </p>

                  <p>

                    Each project will have its own identity, narrative, and community

                    while remaining connected to the larger Grem Labs ecosystem.

                  </p>

                </div>

              </article>

              <article className="border border-orange-500/30 bg-[#100d0a] p-6 sm:p-9">

                <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-orange-500">

                  🧬 OUR VISION

                </p>

                <div className="space-y-5 leading-8 text-stone-400">

                  <p>

                    Grem Labs aims to become a recognizable memecoin brand built

                    around creativity, storytelling, community, and continuous

                    innovation.

                  </p>

                  <p>

                    As the laboratory expands, new experiments will be revealed,

                    new characters will emerge, and new projects will add to the

                    universe.

                  </p>

                  <p>

                    Every experiment brings something different.

                    <br />

                    Every creation adds another chapter.

                  </p>

                  <p>

                    And nobody knows what Dr. Grem is cooking up next.

                  </p>

                </div>

              </article>

            </div>

            <div className="mt-10 border border-orange-500/30 bg-orange-500/5 px-6 py-8 text-center">

              <p className="text-xl font-black text-orange-400 sm:text-2xl">

                The laboratory is officially open. 🧪

              </p>

            </div>

          </div>

        </section>

        <section

          id="roadmap"

          className="border-y border-white/10 bg-[#0e0c0a] px-5 py-24 sm:px-8"

        >

          <div className="mx-auto max-w-5xl">

            <SectionTitle

              eyebrow="// The master plan"

              title={<>The <span className="text-orange-500">Roadmap.</span></>}

              description="Five phases. One evolving laboratory. Here's the vision for the Grem Labs universe."

            />

            <div className="space-y-4">

              {roadmap.map(([number, title, description, details]) => (

                <article

                  key={number}

                  className="grid gap-5 border border-orange-500/30 bg-[#12100e] p-5 transition hover:border-orange-500/70 sm:grid-cols-[64px_1fr] sm:p-7"

                >

                  <div className="flex h-12 w-12 items-center justify-center border-2 border-orange-500 text-xl font-black text-orange-400">

                    {number}

                  </div>

                  <div>

                    <h3 className="text-lg font-black uppercase leading-snug sm:text-xl">

                      <span className="text-orange-500">Phase {Number(number)} — </span>

                      {title}

                    </h3>

                    <ul className="mt-4 space-y-3">

                      {[description, ...details].map((item) => (

                        <li

                          key={item}

                          className="flex items-start gap-3 text-sm leading-6 text-stone-300"

                        >

                          <span className="mt-2 h-2 w-2 shrink-0 bg-orange-500" />

                          <span>{item}</span>

                        </li>

                      ))}

                    </ul>

                  </div>

                </article>

              ))}

            </div>

            <div className="mt-10 border border-orange-500/30 bg-orange-500/5 px-5 py-8 text-center">

              <h3 className="text-xl font-black uppercase leading-relaxed sm:text-2xl">

                One Lab. Many Ideas.

                <br />

                <span className="text-orange-500">One Connected Universe.</span>

              </h3>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-stone-400">

                Every experiment adds a chapter. Every chapter grows the world of

                Grem Labs. The laboratory keeps evolving.

              </p>

            </div>

          </div>

        </section>

<section

  id="community"

  className="relative overflow-hidden px-6 py-24 text-white sm:px-10 lg:px-16"

>

  <div className="mx-auto max-w-7xl">

    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

      {/* Community introduction */}

      <div>

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-400">

          Beyond The Laboratory

        </p>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">

          The lab is better

          <span className="text-orange-400"> together.</span>

        </h2>

        <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">

          Great experiments don't happen in isolation. Follow the

          journey, join the conversation, and become part of the

          growing Grem Labs community.

        </p>

        <p className="mt-4 text-sm text-gray-500">

          Creativity. Curiosity. A little chaos.

        </p>

      </div>

      {/* Community links */}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

        <a

          href="https://t.me/+YLTnMtYgZJo5ZjJh"

          target="_blank"

          rel="noopener noreferrer"

          className="group rounded-2xl border border-orange-500/20 bg-orange-500/[0.05] p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-orange-500/[0.09]"

        >

          <div className="flex items-start justify-between">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-300">

              <Send className="h-6 w-6" />

            </div>

            <ArrowRight className="h-5 w-5 text-gray-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-300" />

          </div>

          <h3 className="mt-6 text-xl font-semibold">

            Join the Telegram

          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-400">

            Connect with the community and stay close to what's

            happening inside the lab.

          </p>

          <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-wider text-orange-300">

            Join the community ↗

          </span>

        </a>

        <a

          href="https://x.com/gremlabsinc"

          target="_blank"

          rel="noopener noreferrer"

          className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"

        >

          <div className="flex items-start justify-between">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-white">

              <span className="text-xl font-bold">𝕏</span>

            </div>

            <ArrowRight className="h-5 w-5 text-gray-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />

          </div>

          <h3 className="mt-6 text-xl font-semibold">

            Follow Grem Labs

          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-400">

            Follow our updates, discover new experiments, and

            see where the next idea takes us.

          </p>

          <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-wider text-gray-300">

            Find us on X ↗

          </span>

        </a>

      </div>

    </div>

  </div>

</section>

        <section className="px-5 pb-24 sm:px-8">

          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 border border-orange-500/30 bg-[radial-gradient(ellipse_at_right,#301709_0%,#100b08_65%)] p-8 sm:flex-row sm:items-center sm:p-12">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500">

                The next experiment awaits

              </p>

              <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">

                Stay curious. Stay chaotic.

              </h2>

            </div>

            <a

              href="#experiments"

              className="inline-flex shrink-0 items-center gap-3 bg-orange-500 px-6 py-4 text-xs font-black uppercase text-black transition hover:bg-orange-400"

            >

              Enter the lab <ArrowRight size={16} />

            </a>

          </div>

        </section>

      </main>

      <footer className="border-t border-white/10 bg-[#070605] px-5 py-10 sm:px-8">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">

          <a href="#home" className="flex items-center gap-3">

            <Atom className="text-orange-500" size={27} />

            <div>

              <p className="text-sm font-black uppercase">Grem Labs Inc.</p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-stone-600">

                Small trouble. Big ideas.

              </p>

            </div>

          </a>

          <div className="flex flex-wrap gap-6 text-[10px] font-bold uppercase tracking-wider text-stone-500">

            <a href="https://x.com/gremlabsinc" target="_blank" rel="noreferrer" className="transition hover:text-orange-400">X / Twitter ↗</a>

            <a href="https://t.me/+YLTnMtYgZJo5ZjJh" target="_blank" rel="noreferrer" className="transition hover:text-orange-400">Telegram ↗</a>

            <a href="#home" className="transition hover:text-orange-400">Back to top ↑</a>

          </div>

          <p className="text-[10px] text-stone-600">© 2026 Grem Labs Inc.</p>

        </div>

      </footer>

    </div>

  )

}
