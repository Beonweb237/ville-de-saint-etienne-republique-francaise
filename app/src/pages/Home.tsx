import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { motion, useInView } from 'framer-motion'
import { useInView as useIntersectionObserver } from 'react-intersection-observer'
import gsap from 'gsap'
import {
  Search,
  ArrowRight,
  Star,
  Users,
  Briefcase,
  Heart,
  BookOpen,
  Home as HomeIcon,
  Leaf,
  CheckCircle,
} from 'lucide-react'

/* ──────────────────────── Animation variants ──────────────────────── */

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.0, 0, 0.2, 1] as [number, number, number, number] },
  }),
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.0, 0, 0.2, 1] as [number, number, number, number] },
  },
}

/* ──────────────────────── Service cards data ──────────────────────── */

const services = [
  {
    icon: Users,
    title: 'Famille & Citoyennete',
    description: 'Carte d\'identite, passeport, etat civil, recensement, elections...',
    color: '#1E7FC3',
    link: '/services',
  },
  {
    icon: Briefcase,
    title: 'Emploi & Formation',
    description: 'Offres d\'emploi, formation professionnelle, accompagnement...',
    color: '#1E3A5F',
    link: '/services',
  },
  {
    icon: Heart,
    title: 'Sante & Solidarite',
    description: 'Aides sociales, CCM, handicaps, personnes agees...',
    color: '#D16B0A',
    link: '/services',
  },
  {
    icon: BookOpen,
    title: 'Education & Jeunesse',
    description: 'Ecoles, colleges, lycees, cantines, transports scolaires...',
    color: '#7B3FA0',
    link: '/services',
  },
  {
    icon: HomeIcon,
    title: 'Logement & Urbanisme',
    description: 'Permis de construire, PLU, logement social, habitat...',
    color: '#D16B0A',
    link: '/services',
  },
  {
    icon: Leaf,
    title: 'Environnement & Proprete',
    description: 'Dechets, espaces verts, energie, assainissement...',
    color: '#27A658',
    link: '/services',
  },
]

/* ──────────────────────── News cards data ──────────────────────── */

const news = [
  {
    image: '/actualite-1.jpg',
    date: '15 juin 2025',
    category: 'Consultation',
    title: 'Conseil municipal : participez a la consultation sur le futur PLU',
  },
  {
    image: '/actualite-2.jpg',
    date: '12 juin 2025',
    category: 'Travaux',
    title: 'Lancement des travaux de renovation du centre aquatique',
  },
  {
    image: '/actualite-3.jpg',
    date: '08 juin 2025',
    category: 'Culture',
    title: 'Fete de la musique : programme complet des animations',
  },
  {
    image: '/actualite-4.jpg',
    date: '05 juin 2025',
    category: 'Institution',
    title: 'Nouvelle equipe municipale : decouvrez les delegations',
  },
]

/* ──────────────────────── Counter component ──────────────────────── */

function AnimatedCounter({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useIntersectionObserver({ triggerOnce: true, threshold: 0.5 })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true
      const startTime = performance.now()
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        // easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(eased * target))
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(target)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [inView, target, duration])

  const formatted = count.toLocaleString('fr-FR')

  return (
    <span ref={ref} className="font-heading text-4xl lg:text-5xl font-bold text-white tabular-nums">
      {formatted}{suffix}
    </span>
  )
}

/* ──────────────────────── Hero Section ──────────────────────── */

function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)
  const quickLinksRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

      tl.fromTo(badgeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0)
        .fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.15)
        .fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.3)
        .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.45)
        .fromTo(searchRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.6)
        .fromTo(quickLinksRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.75)
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] overflow-hidden"
      aria-label="Accueil"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-institution.jpg"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(30,58,95,0.95) 0%, rgba(30,58,95,0.7) 50%, rgba(30,58,95,0.4) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[100dvh] flex-col justify-center px-6 lg:px-12 pt-20">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="max-w-[720px]">
            {/* Bloc-marque */}
            <div className="mb-6">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
                Republique Francaise
              </p>
              <p className="text-xs text-white/50 mt-0.5">
                Liberte, Egalite, Fraternite
              </p>
            </div>

            {/* Badge */}
            <div ref={badgeRef} className="mb-6 inline-flex items-center gap-2 rounded bg-white/20 px-4 py-2 opacity-0">
              <Star className="h-4 w-4 text-white" fill="white" />
              <span className="text-sm font-medium text-white">
                Votre institution au service de tous
              </span>
            </div>

            {/* Title */}
            <h1
              ref={titleRef}
              className="font-heading text-[36px] font-extrabold leading-[0.95] tracking-tight text-white md:text-[56px] lg:text-[72px] opacity-0"
              style={{ letterSpacing: '-0.03em' }}
            >
              Simplifier vos demarches, amplifier votre quotidien
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="mt-6 max-w-[560px] text-lg text-white/80 leading-relaxed opacity-0"
            >
              De la carte d'identite aux aides au logement, accedez simplement a l'ensemble des services publics de votre territoire. Nous sommes a vos cotes pour chaque etape.
            </p>

            {/* CTA Group */}
            <div ref={ctaRef} className="mt-8 flex flex-wrap gap-4 opacity-0">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-bleu-marianne transition-all duration-200 hover:bg-white/90 hover:-translate-y-0.5"
              >
                Consulter les services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/demarches"
                className="inline-flex items-center gap-2 rounded-lg border border-white/50 px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
              >
                Faire une demarche en ligne
              </Link>
            </div>

            {/* Search bar */}
            <div ref={searchRef} className="mt-10 opacity-0">
              <div className="flex w-full max-w-[480px] overflow-hidden rounded bg-white shadow-lg">
                <div className="flex flex-1 items-center px-4">
                  <Search className="h-5 w-5 text-gris-moyen shrink-0" />
                  <input
                    type="search"
                    placeholder="Rechercher un service, une demarche, un document..."
                    className="h-12 w-full bg-transparent px-3 text-sm text-gris-fonce placeholder:text-gris-moyen focus:outline-none"
                    aria-label="Rechercher un service"
                  />
                </div>
                <button className="bg-bleu-marianne px-5 text-sm font-medium text-white transition-colors hover:bg-bleu-marianne-clair">
                  Rechercher
                </button>
              </div>
            </div>

            {/* Quick links */}
            <div ref={quickLinksRef} className="mt-6 opacity-0">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/70">
                {['Carte d\'identite', 'Passeport', 'Permis de construire', 'Aides au logement', 'Inscription scolaire'].map((link, i) => (
                  <span key={link} className="flex items-center">
                    {i > 0 && <span className="mx-2 text-white/40">&middot;</span>}
                    <Link
                      to="/demarches"
                      className="underline underline-offset-2 transition-colors hover:text-white"
                    >
                      {link}
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────── Services Section ──────────────────────── */

function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-white py-section-mobile lg:py-section" aria-labelledby="services-title">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <motion.div
          ref={ref}
          className="mb-12"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <h2 id="services-title" className="font-heading text-[32px] font-bold text-gris-fonce md:text-[40px] lg:text-[48px]" style={{ letterSpacing: '-0.02em' }}>
            Nos services a votre disposition
          </h2>
          <p className="mt-4 max-w-[640px] text-base text-gris-moyen">
            Trouvez rapidement le service dont vous avez besoin, classe par thematique pour vous faciliter la navigation.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={staggerItem}>
              <Link
                to={service.link}
                className="group block rounded border border-gris-clair bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover h-full"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon className="h-6 w-6" style={{ color: service.color }} />
                </div>
                <h3 className="mt-4 font-heading text-xl font-medium text-gris-fonce">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gris-moyen leading-relaxed">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-bleu-marianne transition-all group-hover:gap-2.5">
                  En savoir plus
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ──────────────────────── News Section ──────────────────────── */

function NewsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-gris-tres-clair py-section-mobile lg:py-[80px]" aria-labelledby="news-title">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <motion.div
          ref={ref}
          className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <h2 id="news-title" className="font-heading text-[28px] font-medium text-gris-fonce md:text-[36px]">
            Dernieres actualites
          </h2>
          <Link
            to="/actualites"
            className="inline-flex items-center gap-2 self-start rounded-lg border border-bleu-marianne px-5 py-2.5 text-sm font-medium text-bleu-marianne transition-all hover:bg-bleu-marianne hover:text-white"
          >
            Toutes les actualites
          </Link>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {news.map((item) => (
            <motion.article
              key={item.title}
              variants={staggerItem}
              className="group overflow-hidden rounded border border-gris-clair bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <Link to="/actualites" className="block">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <time className="text-xs text-gris-moyen">{item.date}</time>
                    <span className="rounded bg-bleu-marianne/10 px-2.5 py-0.5 text-xs font-medium text-bleu-marianne">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="mt-3 font-heading text-base font-medium text-gris-fonce line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ──────────────────────── Stats Section ──────────────────────── */

const stats = [
  { value: 24500, label: 'Habitants', suffix: '' },
  { value: 142, label: 'Services en ligne', suffix: '' },
  { value: 12800, label: 'Demarches traitees/an', suffix: '' },
  { value: 98, label: 'Taux de satisfaction', suffix: '%' },
]

function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-bleu-marianne py-section-mobile lg:py-[100px]" aria-labelledby="stats-title">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <motion.h2
          id="stats-title"
          ref={ref}
          className="mb-16 text-center font-heading text-[28px] font-medium text-white md:text-[36px]"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          L'action publique en chiffres
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-base text-white/70">{stat.label}</p>
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-white/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────── Online Procedures Section ──────────────────────── */

const advantages = [
  'Disponible 24h/24, 7j/7',
  'Suivi en temps reel de vos demandes',
  'Delais de traitement reduits',
  'Securise et conforme au RGPD',
]

function ProceduresSection() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const leftInView = useInView(leftRef, { once: true, margin: '-100px' })
  const rightInView = useInView(rightRef, { once: true, margin: '-100px' })

  return (
    <section className="bg-white py-section-mobile lg:py-section" aria-labelledby="procedures-title">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[55%_45%] lg:gap-12 items-center">
          {/* Left content */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -30 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.0, 0, 0.2, 1] as [number, number, number, number] }}
          >
            <h2 id="procedures-title" className="font-heading text-[32px] font-bold text-gris-fonce md:text-[40px] lg:text-[48px]" style={{ letterSpacing: '-0.02em' }}>
              Vos demarches en quelques clics
            </h2>
            <p className="mt-4 text-base text-gris-moyen leading-relaxed">
              Gagnez du temps en effectuant vos demarches administratives en ligne, 24h/24 et 7j/7. Suivez l'avancement de vos demandes et recevez vos documents par voie electronique.
            </p>
            <ul className="mt-8 space-y-4">
              {advantages.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-vert-succes" />
                  <span className="text-base text-gris-fonce">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/demarches"
                className="inline-flex items-center gap-2 rounded-lg bg-bleu-marianne px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-bleu-marianne-clair hover:-translate-y-0.5"
              >
                Faire une demarche en ligne
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/demarches"
                className="inline-flex items-center gap-2 rounded-lg border border-bleu-marianne px-6 py-3.5 text-sm font-medium text-bleu-marianne transition-all hover:bg-bleu-marianne hover:text-white"
              >
                Voir les demarches les plus frequentes
              </Link>
            </div>
          </motion.div>

          {/* Right illustration */}
          <motion.div
            ref={rightRef}
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.0, 0, 0.2, 1] as [number, number, number, number] }}
          >
            <div className="relative w-full max-w-[480px] aspect-square rounded-lg bg-gris-tres-clair flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-bleu-marianne/5 to-bleu-marianne-clair/10" />
              <div className="relative z-10 text-center p-8">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-bleu-marianne/10">
                  <svg className="h-10 w-10 text-bleu-marianne" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                    <path d="m9 9 3 3 3-3" />
                    <circle cx="15" cy="15" r="1" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-medium text-gris-fonce">
                  Espace Demarches
                </h3>
                <p className="mt-2 text-sm text-gris-moyen">
                  Vos formulaires, attestations et suivis en un seul endroit
                </p>
                <div className="mt-6 flex flex-col gap-2">
                  <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
                    <CheckCircle className="h-4 w-4 text-vert-succes shrink-0" />
                    <span className="text-sm text-gris-fonce">Formulaire soumis</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
                    <div className="h-4 w-4 rounded-full border-2 border-bleu-marianne border-t-transparent animate-spin shrink-0" />
                    <span className="text-sm text-gris-fonce">En cours de traitement</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────── Consultations Section ──────────────────────── */

function ConsultationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-gris-tres-clair py-section-mobile lg:py-[100px]" aria-labelledby="consultations-title">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div
          ref={ref}
          className="grid gap-8 lg:grid-cols-2"
        >
          {/* Consultation card */}
          <motion.div
            className="rounded bg-white p-8 lg:p-12 border border-gris-clair"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded bg-vert-succes/20 px-3 py-1 text-xs font-medium text-vert-succes mb-4">
              En cours
            </span>
            <h3 id="consultations-title" className="font-heading text-xl lg:text-2xl font-medium text-gris-fonce leading-snug">
              Consultation publique : Plan Local d'Urbanisme 2025-2030
            </h3>
            <p className="mt-4 text-base text-gris-moyen leading-relaxed">
              Participez a l'elaboration du nouveau PLU de notre territoire. Donnez votre avis sur les orientations d'amenagement jusqu'au 30 juin.
            </p>
            <Link
              to="/politiques-publiques"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-bleu-marianne px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-bleu-marianne-clair hover:-translate-y-0.5"
            >
              Participer a la consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-4 text-sm text-gris-moyen">
              Cloture le 30 juin 2025 &mdash; 1 240 participants
            </p>
          </motion.div>

          {/* Council meeting card */}
          <motion.div
            className="rounded bg-bleu-marianne p-8 lg:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading text-xl lg:text-2xl font-medium text-white leading-snug">
              Prochain Conseil Municipal
            </h3>
            <div className="mt-6 space-y-3">
              <p className="text-base text-white/80">
                <span className="font-medium text-white">Jeudi 26 juin 2025 &mdash; 19h00</span>
              </p>
              <p className="text-base text-white/70">
                Salle du Conseil, Hotel de Ville
              </p>
            </div>
            <p className="mt-4 text-base text-white/70 leading-relaxed">
              Le conseil municipal se reunit en seance publique. L'ordre du jour est disponible 48h avant la seance.
            </p>
            <Link
              to="/actualites"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/50 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
            >
              Consulter l'ordre du jour
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────── Final CTA Section ──────────────────────── */

function FinalCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-bleu-marianne py-section-mobile lg:py-[80px]" aria-labelledby="cta-title">
      <div className="mx-auto max-w-[720px] px-6 lg:px-12 text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <h2 id="cta-title" className="font-heading text-[28px] font-medium text-white md:text-[36px]">
            Une question ? Besoin d'aide ?
          </h2>
          <p className="mt-4 text-base text-white/80 leading-relaxed">
            Nos equipes sont a votre disposition pour vous accompagner dans vos demarches. Contactez-nous par telephone, email ou en vous rendant dans nos bureaux.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-sm font-semibold text-bleu-marianne transition-all hover:bg-white/90 hover:-translate-y-0.5"
          >
            Nous contacter
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-sm text-white/50">
            Ou appelez-nous au{' '}
            <a href="tel:0123456789" className="underline hover:text-white transition-colors">
              01 23 45 67 89
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ──────────────────────── Home Page ──────────────────────── */

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <NewsSection />
      <StatsSection />
      <ProceduresSection />
      <ConsultationsSection />
      <FinalCTASection />
    </>
  )
}
