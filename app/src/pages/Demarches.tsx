import { useState } from 'react'
import { Search, FileText, Monitor, Building2 } from 'lucide-react'

const demarches = [
  { title: 'Demande de carte d\'identite', theme: 'Etat civil', online: true },
  { title: 'Demande de passeport', theme: 'Etat civil', online: true },
  { title: 'Acte de naissance', theme: 'Etat civil', online: true },
  { title: 'Acte de mariage', theme: 'Etat civil', online: true },
  { title: 'Declaration de deces', theme: 'Etat civil', online: false },
  { title: 'Recensement citoyen (16 ans)', theme: 'Citoyennete', online: true },
  { title: 'Inscription sur les listes electorales', theme: 'Citoyennete', online: true },
  { title: 'Permis de construire', theme: 'Urbanisme', online: false },
  { title: 'Certificat d\'urbanisme', theme: 'Urbanisme', online: true },
  { title: 'Declaration prealable de travaux', theme: 'Urbanisme', online: false },
  { title: 'Inscription scolaire', theme: 'Education', online: true },
  { title: 'Demande de logement social', theme: 'Logement', online: true },
  { title: 'Carte grise / immatriculation', theme: 'Transport', online: true },
  { title: 'Demande d\'aide sociale (CCAS)', theme: 'Social', online: false },
]

const themes = ['Tous', 'Etat civil', 'Citoyennete', 'Urbanisme', 'Education', 'Logement', 'Transport', 'Social']

export default function Demarches() {
  const [activeTheme, setActiveTheme] = useState('Tous')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = demarches.filter((d) => {
    const matchesTheme = activeTheme === 'Tous' || d.theme === activeTheme
    const matchesSearch = d.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTheme && matchesSearch
  })

  return (
    <div className="pt-20 min-h-[100dvh] bg-white">
      {/* Header */}
      <section className="bg-bleu-marianne py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading mb-4">
            Demarches administratives
          </h1>
          <p className="text-white/80 max-w-[560px] mb-8">
            Recherchez une demarche parmi celles proposees par la mairie.
          </p>
          <div className="max-w-[520px]">
            <div className="flex items-center bg-white rounded-lg overflow-hidden">
              <Search size={20} className="text-gray-400 ml-4 shrink-0" />
              <input
                type="text"
                placeholder="Rechercher une demarche..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 h-12 px-3 text-sm outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Themes + list */}
      <section className="py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="flex flex-wrap gap-3 mb-10">
            {themes.map((theme) => (
              <button
                key={theme}
                onClick={() => setActiveTheme(theme)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeTheme === theme
                    ? 'bg-bleu-marianne text-white'
                    : 'bg-gray-100 text-gris-fonce hover:bg-gray-200'
                }`}
              >
                {theme}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filtered.map((demarche) => (
              <div
                key={demarche.title}
                className="flex items-center justify-between gap-4 p-5 border border-gray-200 rounded-xl hover:border-bleu-marianne transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <FileText size={20} className="text-bleu-marianne shrink-0" />
                  <div>
                    <p className="font-semibold text-gris-fonce">{demarche.title}</p>
                    <p className="text-sm text-gris-moyen">{demarche.theme}</p>
                  </div>
                </div>
                <span
                  className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full shrink-0 ${
                    demarche.online ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'
                  }`}
                >
                  {demarche.online ? <Monitor size={14} /> : <Building2 size={14} />}
                  {demarche.online ? 'En ligne' : 'En mairie'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
