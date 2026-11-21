import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const tween = gsap.fromTo(el, { y: 34, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.85, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true }
    })
    return () => { tween.scrollTrigger?.kill(); tween.kill() }
  }, [])
  return <div ref={ref} className={className}>{children}</div>
}
