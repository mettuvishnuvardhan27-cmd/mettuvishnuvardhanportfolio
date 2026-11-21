import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Asterisk, Dribbble, Instagram, Linkedin, Menu, X, Sparkles, Award, BriefcaseBusiness, Mail } from 'lucide-react'
import { ReactLenis } from 'lenis/react'
import Scene from './components/Scene.jsx'
import Reveal from './components/Reveal.jsx'

const projects = [
  { n: '01', title: 'CareerIQ', type: 'Product / UI design', year: '2026', tag: 'AI · SAAS PRODUCT', cls: 'career', desc: 'An AI-powered career guidance and resume analysis platform.' },
  { n: '02', title: 'JA Cloud Kitchen', type: 'Web design / Development', year: '2026', tag: 'FOOD · DIGITAL EXPERIENCE', cls: 'ja', desc: 'A digital experience for a cloud kitchen and meal subscription service.' },
]
const services = [ ['01', 'Digital experiences', 'Websites, landing pages, responsive interfaces and thoughtful interactions.'], ['02', 'Visual identity', 'Brand systems, art direction, social creatives and design language.'], ['03', 'Content & motion', 'Short-form video, edits and visual stories made to hold attention.'] ]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const close = () => setMenuOpen(false)
  return <ReactLenis root options={{ lerp: 0.085, smoothWheel: true }}>
    <div className="site-shell">
      <header className={`nav ${scrolled ? 'nav-solid' : ''}`}>
        <a className="wordmark" href="#top" onClick={close}>V<span>.</span>V</a>
        <nav className="desktop-nav"><a href="#about">About</a><a href="#work">Projects</a><a href="#certifications">Certifications</a><a href="#clients">Clients</a><a href="#contact">Contact</a></nav>
        <a className="nav-availability" href="mailto:hello@mettuvishnuvardhan.dev"><i /> Available for projects <ArrowUpRight size={14}/></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
      </header>
      {menuOpen && <div className="mobile-menu"><a href="#about" onClick={close}>About</a><a href="#work" onClick={close}>Projects</a><a href="#certifications" onClick={close}>Certifications</a><a href="#clients" onClick={close}>Clients</a><a href="#contact" onClick={close}>Contact</a></div>}

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-topline mono"><span>INDEPENDENT CREATIVE / HYDERABAD, IN</span><span>SCROLL TO EXPLORE <ArrowDownRight size={13}/></span></div>
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={13}/> INDEPENDENT CREATIVE · DESIGNER · DEVELOPER</p>
            <h1>Designing<br/><span className="outline-word">digital</span><br/><span className="italic-word">experiences.</span></h1>
            <div className="hero-bottomline"><p>I'm Vishnu Vardhan — a multidisciplinary<br/>creative building thoughtful digital work.</p><a className="round-link" href="#work" aria-label="Explore work"><ArrowDownRight/></a></div>
          </div>
          <div className="hero-art"><div className="art-grid"/><div className="scene-wrap"><Scene/></div><div className="orbit-label mono">CREATIVE TECHNOLOGY <Asterisk size={12}/> 2026</div><div className="hero-index mono">01 / 04</div></div>
          <div className="hero-footer mono"><span>STRATEGY — DESIGN — DEVELOPMENT — CONTENT</span><span>SCROLL DOWN ↓</span></div>
        </section>

        <section className="intro section-wrap" id="about">
          <Reveal><p className="section-kicker mono">[ A LITTLE INTRODUCTION ]</p><div className="intro-grid"><h2>Curiosity led me<br/>here. <span>Creation</span><br/>keeps me going.</h2><div className="intro-text"><p>I'm a multidisciplinary creative who works across web development, visual design and video editing. I enjoy turning rough ideas into polished digital experiences — from a brand's online presence to the details that make a product feel alive.</p><p>I'm currently pursuing a B.Tech in Computer Science (AI & ML), while building real-world projects, collaborating with brands and learning by doing.</p><p>I'm also a <strong>Co-Founder at Pixel Chai</strong>, where I work with a team on digital, creative and content projects.</p><a className="text-link" href="mailto:hello@mettuvishnuvardhan.dev">LET'S MAKE SOMETHING <ArrowUpRight size={15}/></a></div></div></Reveal>
        </section>

        <section className="work-section section-wrap" id="work">
          <Reveal><div className="section-heading"><div><p className="section-kicker mono">[ SELECTED PROJECTS ]</p><h2>Things I've<br/><span>put into motion.</span></h2></div><p className="heading-note">A selection of digital experiences,<br/>ideas and collaborations.</p></div></Reveal>
          <div className="project-list">{projects.map((p) => <Reveal key={p.n}><a className={`project-card ${p.cls}`} href="#contact"><div className="project-visual"><div className="visual-grain"/><div className="project-visual-inner"><span className="project-tag mono">{p.tag}</span><div className="project-art-title">{p.cls === 'career' ? <><span>career</span><b>IQ.</b></> : <><span>JA</span><b>CLOUD KITCHEN</b></>}</div><span className="visual-corner mono">{p.n} / 04</span></div><div className="project-open"><ArrowUpRight/></div></div><div className="project-meta"><div><span className="mono project-number">({p.n})</span><h3>{p.title}</h3><p>{p.desc}</p></div><div className="project-type"><span>{p.type}</span><span className="mono">{p.year}</span></div></div></a></Reveal>)}</div>
        </section>

        <section className="statement"><div className="statement-inner"><p className="mono">MY CREATIVE PRINCIPLE</p><h2>Less, but<br/><em>with intention.</em></h2><Asterisk className="statement-star"/></div></section>

        <section className="credentials-section section-wrap" id="certifications">
          <Reveal><div className="section-heading"><div><p className="section-kicker mono">[ LEARNING & MILESTONES ]</p><h2>Always in<br/><span>progress.</span></h2></div><p className="heading-note">Courses, certifications and skills<br/>I'm building along the way.</p></div></Reveal>
          <div className="cert-grid">
            <Reveal><article className="cert-card"><div className="cert-icon"><Award/></div><span className="mono">CERTIFICATION 01</span><h3>Certification title</h3><p>Add the exact course or certification name, issuing platform and year.</p><small>ISSUER · YEAR</small></article></Reveal>
            <Reveal><article className="cert-card"><div className="cert-icon"><Award/></div><span className="mono">CERTIFICATION 02</span><h3>Certification title</h3><p>Add another verified certification here when ready.</p><small>ISSUER · YEAR</small></article></Reveal>
            <Reveal><article className="cert-card cert-note"><div className="cert-icon"><Asterisk/></div><span className="mono">CURRENT FOCUS</span><h3>Learning by building.</h3><p>Frontend development, UI/UX, creative technology and AI-powered products.</p><small>CONTINUOUS LEARNING</small></article></Reveal>
          </div>
        </section>

        <section className="clients-section section-wrap" id="clients">
          <Reveal><div className="section-heading"><div><p className="section-kicker mono">[ COLLABORATIONS ]</p><h2>Good work<br/><span>with good people.</span></h2></div><p className="heading-note">Brands I work with and have worked with.</p></div></Reveal>
          <div className="client-grid">
            <Reveal><div className="client-item"><span className="mono">01 / WEB + DIGITAL</span><h3>ORBIX <i>ELEVATORS</i></h3><p>Website and digital content</p></div></Reveal>
            <Reveal><div className="client-item"><span className="mono">02 / WEB + CONTENT</span><h3>VINCIT <i>FITNESS</i></h3><p>Website and content</p></div></Reveal>
          </div>
          <p className="clients-footnote mono">WORKING WITH BRANDS · MORE TO COME</p>
        </section>

        <section className="contact-section section-wrap" id="contact"><Reveal><p className="section-kicker mono">[ HAVE A GOOD ONE IN MIND? ]</p><h2>Let's make<br/><span>it happen.</span></h2><div className="contact-bottom"><a className="contact-email" href="mailto:hello@mettuvishnuvardhan.dev">hello@mettuvishnuvardhan.dev <ArrowUpRight/></a><p>For collaborations, projects or a thoughtful conversation.<br/>I'd be glad to hear what you're working on.</p></div></Reveal></section>
      </main>
      <footer className="footer section-wrap"><a className="wordmark" href="#top">V<span>.</span>V</a><span className="mono">© 2026 VISHNU VARDHAN · CO-FOUNDER, PIXEL CHAI</span><div className="socials"><a href="https://www.instagram.com/" aria-label="Instagram"><Instagram/></a><a href="https://www.linkedin.com/" aria-label="LinkedIn"><Linkedin/></a><a href="https://dribbble.com/" aria-label="Dribbble"><Dribbble/></a></div><a className="back-top mono" href="#top">BACK TO TOP ↑</a></footer>
    </div>
  </ReactLenis>
}
