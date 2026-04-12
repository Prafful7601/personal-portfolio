import './App.css'

const stats = [
  { value: '10M+', label: 'LinkedIn impressions generated across founder profiles' },
  { value: '30+', label: 'founders and professionals helped with positioning' },
  { value: '1,000+', label: 'ERP users supported through backend systems' },
  { value: '10k+', label: 'requests per minute handled in rate limiting work' },
  { value: '<800ms', label: 'API latency after query optimization and refactors' },
]

const journey = [
  {
    label: 'Where I am coming from',
    title: 'From life sciences and content strategy into serious backend engineering.',
    text:
      'My path was not a straight computer science lane. I started in life sciences, then spent time learning how founders grow authority, communicate clearly, and create leverage through narrative. That gave me an unusual edge: I do not just think about systems, I think about outcomes.',
    points: [
      'Bachelor of Science background that trained disciplined analysis.',
      'Hands-on work in founder branding, storytelling, and distribution.',
      'Built taste for clarity, positioning, and product-facing execution.',
    ],
  },
  {
    label: 'Where I am going',
    title: 'Toward backend roles where I can own scale, reliability, and system design.',
    text:
      'I am now compounding hard in backend engineering through my MCA, production-flavored projects, and performance-driven work. The direction is clear: distributed systems, backend architecture, API reliability, and the kind of engineering ownership that matters as products grow.',
    points: [
      'Going deeper into distributed systems and concurrency-heavy backend design.',
      'Targeting roles with real ownership over APIs, caching, transactions, and infra decisions.',
      'Building toward becoming the engineer trusted with critical backend surfaces.',
    ],
  },
]

const experience = [
  {
    role: 'Founder | The Viral Vibe',
    period: 'July 2024 - Present',
    detail:
      'Built a personal branding and LinkedIn growth initiative for founders by combining positioning, storytelling systems, and disciplined content operations.',
    wins: [
      'Helped 30+ founders and professionals sharpen their online authority.',
      'Designed workflows that generated 10M+ impressions across profiles.',
      'Owned strategy end to end: ideation, narrative structure, publishing, and optimization.',
    ],
  },
  {
    role: 'Backend Developer Intern | Mind Bridge Developers',
    period: 'May 2025 - November 2025',
    detail:
      'Worked on ERP backend systems for 1,000+ users with a focus on performance, correctness under concurrent access, and reliable API behavior.',
    wins: [
      'Reduced high-volume API response time from 2-3 seconds to under 800ms.',
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
      'Managed workflows from ideation to publishing and performance feedback.',
      'Used audience behavior to improve themes, cadence, and content formats.',
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
    stack: [
      'Spring Boot',
      'WebSockets',
      'Redis',
      'Kafka',
      'H2',
      'HTML/CSS/JS',
    ],
    summary:
      'A real-time collaborative workspace built beyond a toy demo, with multi-user editing, version-aware operations, Redis-backed state caching, Kafka event publishing, and separate persistence boundaries.',
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

function App() {
  return (
    <div className="page-shell">
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
          <div className="hero-copy">
            <p className="eyebrow">From life sciences to low-latency backend systems</p>
            <h1>I build backend systems that perform and profiles that get remembered.</h1>
            <p className="hero-text">
              I am a Delhi-based backend-focused software engineer pursuing an MCA and
              building toward distributed systems, scalable APIs, and engineering roles
              with real ownership. My edge is unusual but useful: I understand both the
              machine and the market.
            </p>

            <div className="hero-actions">
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
            </div>

            <ul className="signal-strip" aria-label="Highlights">
              <li>Java + Spring Boot</li>
              <li>Distributed systems</li>
              <li>Concurrency + transactions</li>
              <li>SQL tuning + indexing</li>
              <li>Founder growth strategy</li>
            </ul>
          </div>

          <div className="hero-panel" aria-hidden="true">
            <div className="panel-grid"></div>
            <div className="terminal-card">
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
            </div>

            <div className="floating-card floating-card-a">
              <strong>1,000+</strong>
              <span>ERP users supported</span>
            </div>
            <div className="floating-card floating-card-b">
              <strong>10M+</strong>
              <span>impressions generated</span>
            </div>
            <div className="floating-card floating-card-c">
              <strong>10k+</strong>
              <span>requests per minute handled in rate-limiting work</span>
            </div>
          </div>
        </section>

        <section className="metrics-section">
          {stats.map((stat) => (
            <article className="metric-card" key={stat.label}>
              <p className="metric-value">{stat.value}</p>
              <p className="metric-label">{stat.label}</p>
            </article>
          ))}
        </section>

        <section className="positioning-band">
          <p>
            I know how to make systems work under pressure and how to make good work
            impossible to ignore.
          </p>
        </section>

        <section className="content-section" id="story">
          <div className="section-heading">
            <p className="section-tag">Story</p>
            <h2>Where I am coming from, and where I am going.</h2>
          </div>

          <div className="trajectory-grid">
            {journey.map((item) => (
              <article className="trajectory-card" key={item.label}>
                <p className="mini-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="work" aria-labelledby="experience-title">
          <div className="section-heading">
            <p className="section-tag">Experience</p>
            <h2 id="experience-title">Work that sharpened both technical depth and leverage.</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.role}>
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
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="skills">
          <div className="section-heading">
            <p className="section-tag">Skills</p>
            <h2>The full stack of what I bring to the table.</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="skill-chip-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="projects">
          <div className="section-heading">
            <p className="section-tag">Projects</p>
            <h2>Projects that make my backend instincts visible.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
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
              </article>
            ))}
          </div>
        </section>

        <section className="content-section two-column-grid">
          <article className="info-card">
            <p className="section-tag">Education</p>
            <h3>Formal foundation</h3>
            <ul>
              {education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="info-card">
            <p className="section-tag">Certifications</p>
            <h3>Applied learning</h3>
            <ul>
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="contact-band" id="contact">
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
        </section>
      </main>
    </div>
  )
}

export default App
