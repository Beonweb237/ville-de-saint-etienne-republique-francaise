import { Link } from 'react-router'
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react'

const servicesLinks = [
  { label: 'Famille & Citoyennete', path: '/services' },
  { label: 'Emploi & Formation', path: '/services' },
  { label: 'Sante & Solidarite', path: '/services' },
  { label: 'Education & Jeunesse', path: '/services' },
  { label: 'Logement & Urbanisme', path: '/services' },
  { label: 'Environnement', path: '/services' },
]

const usefulLinks = [
  { label: 'Accessibilite', path: '/a-propos' },
  { label: 'Mentions legales', path: '/a-propos' },
  { label: 'Donnees personnelles', path: '/a-propos' },
  { label: 'Plan du site', path: '/a-propos' },
  { label: 'Contacts', path: '/contact' },
]

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'X / Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-bleu-marianne text-white" role="contentinfo">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 pt-16 pb-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Institution info */}
          <div>
            <div className="mb-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-white/70">
                Republique Francaise
              </p>
              <p className="text-lg font-semibold mt-1">Ville de Saint-Etienne</p>
            </div>
            <address className="not-italic text-sm text-white/70 leading-relaxed">
              <p>Hotel de Ville</p>
              <p>1, place de l'Hotel de Ville</p>
              <p>42000 Saint-Etienne</p>
              <p className="mt-3">
                Tel :{' '}
                <a href="tel:0123456789" className="underline hover:text-white transition-colors">
                  01 23 45 67 89
                </a>
              </p>
              <p>
                Email :{' '}
                <a href="mailto:contact@ville-saintetienne.fr" className="underline hover:text-white transition-colors">
                  contact@ville-saintetienne.fr
                </a>
              </p>
            </address>
            <div className="mt-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded border border-white/30 px-3 py-1.5 text-xs font-medium text-white/80 hover:bg-white/10 transition-colors"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                Open Data
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Nos Services
            </h3>
            <ul className="space-y-2.5">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Useful links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Liens Utiles
            </h3>
            <ul className="space-y-2.5">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social media */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Suivez-nous
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/70 hover:bg-white/10 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-xs text-white/50">
                Horaires d'ouverture :
              </p>
              <p className="text-sm text-white/70 mt-1">
                Lundi - Vendredi : 8h30 - 17h00
              </p>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="my-8 h-px bg-white/20" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">
            &copy; 2025 &mdash; Republique Francaise. Tous droits reserves.
            {' '}&mdash; Con&ccedil;u par{' '}
            <a
              href="https://www.beonweb.cm/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              Beonweb
            </a>
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link to="/a-propos" className="text-xs text-white/50 hover:text-white transition-colors">
              Mentions legales
            </Link>
            <Link to="/a-propos" className="text-xs text-white/50 hover:text-white transition-colors">
              Donnees personnelles et cookies
            </Link>
            <span className="text-xs text-white/50">
              Accessibilite : partiellement conforme
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
