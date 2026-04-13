import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react'
import './App.css'

const stats = [
  { value: '10M+', label: 'LinkedIn impressions generated across founder profiles' },
  { value: '30+', label: 'founders and professionals helped with positioning' },
  { value: '1,000+', label: 'ERP users supported through backend systems' },
  { value: '10k+', label: 'requests per minute handled in rate limiting work' },
  { value: '<800ms', label: 'API latency after backend optimization' },
]

const journey = [
  {
    label: 'Where I am coming from',
    title: 'Life sciences, storytelling, and founder positioning built my range.',
    text:
      'I did not arrive through the most obvious lane. I came from life sciences, then learned how narrative, positioning, and distribution create leverage. That path made me unusually product-aware for a backend engineer.',
  },
  {
    label: 'Where I am going',
    title: 'Toward backend, IoT, and applied AI systems with real-world impact.',
    text:
      'I am now compounding around distributed systems, API performance, transactional integrity, caching, and applied AI systems that move beyond software alone. That direction now includes IoT-driven problem solving and invention-led work.',
  },
]

const focusCards = [
  {
    tag: 'Systems',
    title: 'Backend logic that survives real load',
    text:
      'Concurrency, transactions, indexing, and rate limiting are where I like to play.',
  },
  {
    tag: 'Signal',
    title: 'A sharper sense for product and distribution',
    text:
      'I understand not only how systems work, but how good work gets noticed and trusted.',
  },
  {
    tag: 'Trajectory',
    title: 'Engineering direction with intent',
    text:
      'I am optimizing toward backend-heavy roles while moving into AI, IoT, and invention-led systems work.',
  },
]

const upcomingPatent = {
  tag: 'Coming Soon',
  title: 'An IoT patent in precision agriculture is part of where I am headed.',
  summary:
    'The proposed invention is an AI-based pest detection and automated pesticide administration device for precision agriculture. It uses a camera module to capture insect images or crop-damage patterns, identifies pest species with machine learning, selects the appropriate treatment based on pest type and crop stage, and triggers precision spraying in controlled quantities.',
  points: [
    'Combines computer vision, machine learning, IoT hardware, and automated actuation.',
    'Targets high-accuracy pest identification from insects and leaf-bite damage patterns.',
    'Determines pesticide or herbicide treatment based on pest type and crop growth stage.',
    'Improves pest management efficiency while reducing chemical overuse and environmental impact.',
  ],
}

const experience = [
  {
    role: 'Founder | The Viral Vibe',
    period: 'July 2024 - Present',
    detail:
      'Built a personal branding and LinkedIn growth initiative for founders by combining positioning, storytelling systems, and disciplined content operations.',
    wins: [
      'Helped 30+ founders and professionals sharpen their online authority.',
      'Designed workflows that generated 10M+ impressions across profiles.',
      'Owned strategy from ideation to narrative structure and optimization.',
    ],
  },
  {
    role: 'Backend Developer Intern | Mind Bridge Developers',
    period: 'May 2025 - November 2025',
    detail:
      'Worked on ERP backend systems for 1,000+ users with a focus on performance, correctness under concurrent access, and reliable API behavior.',
    wins: [
      'Reduced high-volume API latency from 2-3 seconds to under 800ms.',
      'Eliminated duplicate payments by improving transactional integrity.',
      'Fixed N+1 query bottlenecks and cut report latency by ~60%.',
    ],
  },
  {
    role: 'Content Strategist | The Growth Square',
    period: 'February 2023 - May 2024',
    detail:
      'Built founder-facing content systems that improved visibility, reach, and inbound opportunities through stronger positioning and sharper story architecture.',
    wins: [
      'Worked with 10+ founders on strategic content direction.',
      'Managed workflows from ideation to publishing and feedback loops.',
      'Used audience behavior to improve themes, cadence, and format.',
    ],
  },
]

const skillGroups = [
  {
    title: 'Backend',
    items: ['Java', 'Spring Boot', 'FastAPI', 'Dropwizard', 'REST APIs'],
  },
  {
    title: 'Data and Caching',
    items: ['MySQL', 'SQL', 'Redis', 'Spring Data JPA', 'Database Indexing'],
  },
  {
    title: 'Infrastructure and Tools',
    items: ['Docker', 'Git', 'GitHub', 'Postman', 'IntelliJ IDEA', 'VS Code'],
  },
  {
    title: 'Core Engineering',
    items: [
      'Distributed Systems',
      'Rate Limiting',
      'Query Optimization',
      'Transaction Management',
      'Data Structures and Algorithms',
      'Java Concurrency',
    ],
  },
  {
    title: 'Growth and Strategy',
    items: [
      'Personal Branding',
      'Positioning',
      'Storytelling',
      'Content Systems',
      'Audience Growth Strategy',
      'LinkedIn Distribution',
    ],
  },
  {
    title: 'Languages',
    items: ['English', 'Hindi', 'French'],
  },
]

const projects = [
  {
    name: 'Collab Platform',
    stack: ['Spring Boot', 'WebSockets', 'Redis', 'Kafka', 'H2', 'HTML/CSS/JS'],
    summary:
      'A real-time collaborative workspace with live multi-user editing, version-aware operations, Redis-backed state caching, Kafka event publishing, and separate persistence boundaries.',
    outcome: [
      'Structured around an API gateway plus persistence service to keep responsibilities clear.',
      'Supports live collaboration, recent document discovery, and document/code editing modes.',
      'Built to show distributed-systems thinking, not just frontend polish.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Prafful7601/collab-platform' },
      { label: 'Live App', href: 'https://collab-platform-three.vercel.app/' },
    ],
  },
  {
    name: 'Distributed Rate Limiter',
    stack: ['FastAPI', 'Redis', 'Lua', 'Docker', 'Render', 'Chart.js'],
    summary:
      'A distributed rate limiting system designed to protect backend services using Redis-backed algorithms, atomic Lua execution, and a monitoring dashboard for traffic visibility.',
    outcome: [
      'Implements token bucket, sliding window, and fixed window strategies.',
      'Uses Redis state sharing so rate limits remain consistent across instances.',
      'Adds a deployment-ready dashboard for blocked requests, traffic, and active clients.',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Prafful7601/distributed-rate-limiter',
      },
      {
        label: 'Live App',
        href: 'https://distributed-rate-limiter-a7yr.onrender.com/',
      },
    ],
  },
]

const certifications = [
  'Skyscanner Software Engineering Job Simulation',
  'Wells Fargo Software Engineering Job Simulation',
  'Sales Certified - Software as a Service Solutions',
]

const education = [
  'Master of Computer Applications, KIET Deemed to be University (2025 - 2027) | CGPA 8.20',
  'Bachelor of Science in Life Sciences, CCS University Meerut (2021 - 2024) | CGPA 7.04',
]

const marquee = [
  'Backend Systems',
  'Distributed Architecture',
  'Performance Tuning',
  'Transaction Integrity',
  'Query Optimization',
  'AI x IoT Systems',
  'Patent in Progress',
  'Founder Positioning',
  'Personal Branding',
  'Rate Limiting',
]

function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const Component = motion[as]

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}

function App() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progressScale = useSpring(scrollYProgress, { stiffness: 140, damping: 24 })
  const heroOrbY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -220])
  const heroCopyY = useTransform(scrollYProgress, [0, 0.28], [0, prefersReducedMotion ? 0 : -80])
  const heroPanelY = useTransform(scrollYProgress, [0, 0.28], [0, prefersReducedMotion ? 0 : 95])
  const heroPanelRotate = useTransform(
    scrollYProgress,
    [0, 0.28],
    [0, prefersReducedMotion ? 0 : -6],
  )
  const bgYSlow = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -120])
  const bgYMedium = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 180])
  const bgYFast = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 280])
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 18])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, prefersReducedMotion ? 1 : 1.14])
  const ghostX = useTransform(scrollYProgress, [0, 1], ['-4%', prefersReducedMotion ? '-4%' : '8%'])
  const ghostXReverse = useTransform(
    scrollYProgress,
    [0, 1],
    ['6%', prefersReducedMotion ? '6%' : '-6%'],
  )
  const gridOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.22, 0.34, 0.16])

  return (
    <div className="page-shell">
      <motion.div className="progress-bar" style={{ scaleX: progressScale }} />
      <div className="parallax-stage" aria-hidden="true">
        <motion.div className="parallax-grid" style={{ y: bgYSlow, opacity: gridOpacity }} />
        <motion.div className="parallax-rings" style={{ y: bgYMedium, rotate: bgRotate, scale: bgScale }} />
        <motion.div className="parallax-beam parallax-beam-a" style={{ y: bgYFast }} />
        <motion.div className="parallax-beam parallax-beam-b" style={{ y: bgYMedium }} />
        <motion.div className="parallax-ghost parallax-ghost-a" style={{ y: bgYMedium, x: ghostX }}>
          SYSTEMS
        </motion.div>
        <motion.div
          className="parallax-ghost parallax-ghost-b"
          style={{ y: bgYFast, x: ghostXReverse }}
        >
          SCALE
        </motion.div>
      </div>
      <motion.div className="ambient-orb ambient-orb-a" style={{ y: heroOrbY }} />
      <motion.div className="ambient-orb ambient-orb-b" style={{ y: heroOrbY }} />
      <motion.div className="ambient-orb ambient-orb-c" style={{ y: heroOrbY }} />

      <header className="topbar">
        <a className="brand" href="#hero" aria-label="Prafful Gupta home">
          <span className="brand-mark">PG</span>
          <span className="brand-copy">
            <strong>Prafful Gupta</strong>
            <span>Backend Engineer</span>
          </span>
        </a>

        <nav className="topnav" aria-label="Primary">
          <a href="#story">Story</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a
            className="nav-cta"
            href="/Prafful_Gupta_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="hero">
          <motion.div className="hero-copy" style={{ y: heroCopyY }}>
            <Reveal as="p" className="eyebrow">
              Backend engineering with product signal
            </Reveal>
            <Reveal as="h1" delay={0.08}>
              I build backend systems that feel fast, sharp, and impossible to ignore.
            </Reveal>
            <Reveal as="p" className="hero-text" delay={0.16}>
              I am a Delhi-based backend-focused software engineer pursuing an MCA and
              building toward distributed systems, scalable APIs, and engineering roles
              with real ownership. My edge is unusual but useful: I understand both the
              machine and the market.
            </Reveal>

            <Reveal className="hero-actions" delay={0.24}>
              <a className="button button-primary" href="mailto:praffulunabated@gmail.com">
                Hire me for backend roles
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/Prafful7601"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
              <a
                className="button button-secondary"
                href="/Prafful_Gupta_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Open resume
              </a>
            </Reveal>

            <Reveal as="ul" className="signal-strip" delay={0.32}>
              <li>Java + Spring Boot</li>
              <li>Distributed systems</li>
              <li>Concurrency + transactions</li>
              <li>SQL tuning + indexing</li>
              <li>Founder growth strategy</li>
            </Reveal>
          </motion.div>

          <motion.div
            className="hero-panel"
            style={{ y: heroPanelY, rotate: heroPanelRotate }}
            whileHover={prefersReducedMotion ? {} : { rotate: -2, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 160, damping: 18 }}
          >
            <div className="panel-grid"></div>
            <div className="panel-scan"></div>
            <motion.div
              className="terminal-card"
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      y: [0, -8, 0],
                    }
              }
              transition={{ duration: 5.6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
            >
              <div className="terminal-head">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="terminal-body">
                <p>$ prafful.direction</p>
                <p>{'{'}</p>
                <p>&nbsp;&nbsp;coming_from: ['life-sciences', 'content-strategy'],</p>
                <p>&nbsp;&nbsp;now_building: ['apis', 'systems', 'distributed-backends'],</p>
                <p>&nbsp;&nbsp;going_to: 'ownership-heavy backend engineering',</p>
                <p>&nbsp;&nbsp;base: 'Delhi, India'</p>
                <p>{'}'}</p>
              </div>
            </motion.div>

            <motion.div
              className="floating-card floating-card-a"
              animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 4.6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
            >
              <strong>1,000+</strong>
              <span>ERP users supported</span>
            </motion.div>
            <motion.div
              className="floating-card floating-card-b"
              animate={prefersReducedMotion ? {} : { y: [0, 12, 0] }}
              transition={{ duration: 5.2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
            >
              <strong>10M+</strong>
              <span>impressions generated</span>
            </motion.div>
            <motion.div
              className="floating-card floating-card-c"
              animate={prefersReducedMotion ? {} : { y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
            >
              <strong>10k+</strong>
              <span>requests per minute handled in rate-limiting work</span>
            </motion.div>
          </motion.div>
        </section>

        <section className="marquee-shell" aria-label="Focus areas">
          <div className="marquee-track">
            {[...marquee, ...marquee].map((item, index) => (
              <span className="marquee-chip" key={`${item}-${index}`}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="metrics-section">
          {stats.map((stat, index) => (
            <Reveal as="article" className="metric-card" key={stat.label} delay={index * 0.05}>
              <p className="metric-value">{stat.value}</p>
              <p className="metric-label">{stat.label}</p>
            </Reveal>
          ))}
        </section>

        <Reveal className="positioning-band" delay={0.05}>
          <p>
            I know how to make systems work under pressure and how to make good work
            impossible to ignore.
          </p>
        </Reveal>

        <section className="content-section" id="story">
          <Reveal className="section-heading">
            <p className="section-tag">Story</p>
            <h2>Where I am coming from, and where I am going.</h2>
          </Reveal>

          <div className="trajectory-grid">
            {journey.map((item, index) => (
              <Reveal
                as="article"
                className="trajectory-card"
                key={item.label}
                delay={index * 0.08}
              >
                <p className="mini-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>

          <div className="focus-grid">
            {focusCards.map((card, index) => (
              <Reveal as="article" className="focus-card" key={card.title} delay={index * 0.08}>
                <span className="focus-tag">{card.tag}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal as="article" className="patent-card" delay={0.18}>
            <div className="patent-shell">
              <div className="patent-copy">
                <p className="section-tag">{upcomingPatent.tag}</p>
                <h3>{upcomingPatent.title}</h3>
                <p>{upcomingPatent.summary}</p>
              </div>

              <ul className="patent-points">
                {upcomingPatent.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        <section className="content-section" id="work" aria-labelledby="experience-title">
          <Reveal className="section-heading">
            <p className="section-tag">Experience</p>
            <h2 id="experience-title">Work that sharpened both technical depth and leverage.</h2>
          </Reveal>

          <div className="timeline">
            {experience.map((item, index) => (
              <Reveal as="article" className="timeline-item" key={item.role} delay={index * 0.07}>
                <div className="timeline-meta">
                  <p>{item.period}</p>
                </div>
                <div className="timeline-body">
                  <h3>{item.role}</h3>
                  <p>{item.detail}</p>
                  <ul>
                    {item.wins.map((win) => (
                      <li key={win}>{win}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="content-section" id="skills">
          <Reveal className="section-heading">
            <p className="section-tag">Skills</p>
            <h2>The full stack of what I bring to the table.</h2>
          </Reveal>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <Reveal as="article" className="skill-card" key={group.title} delay={index * 0.04}>
                <h3>{group.title}</h3>
                <ul className="skill-chip-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="content-section" id="projects">
          <Reveal className="section-heading">
            <p className="section-tag">Projects</p>
            <h2>Projects that make my backend instincts visible.</h2>
          </Reveal>

          <div className="project-grid">
            {projects.map((project, index) => (
              <Reveal as="article" className="project-card" key={project.name} delay={index * 0.08}>
                <div className="project-aura"></div>
                <div className="project-topline">
                  <h3>{project.name}</h3>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                <p className="project-summary">{project.summary}</p>

                <ul className="tag-list" aria-label={`${project.name} tech stack`}>
                  {project.stack.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <ul className="project-outcomes">
                  {project.outcome.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="content-section two-column-grid">
          <Reveal as="article" className="info-card">
            <p className="section-tag">Education</p>
            <h3>Formal foundation</h3>
            <ul>
              {education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="article" className="info-card" delay={0.08}>
            <p className="section-tag">Certifications</p>
            <h3>Applied learning</h3>
            <ul>
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </section>

        <Reveal className="contact-band" id="contact">
          <div>
            <p className="section-tag">Contact</p>
            <h2>Open to backend roles, serious projects, and ambitious teams.</h2>
            <p>
              If you need someone who can think in APIs, transactions, performance,
              and product positioning at the same time, let&apos;s talk.
            </p>
          </div>

          <div className="contact-actions">
            <a className="button button-primary" href="mailto:praffulunabated@gmail.com">
              praffulunabated@gmail.com
            </a>
            <a
              className="button button-secondary"
              href="https://www.linkedin.com/in/prafful-gupta-67a3b0203/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="button button-secondary"
              href="/Prafful_Gupta_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download resume
            </a>
          </div>
        </Reveal>
      </main>
    </div>
  )
}

export default App
