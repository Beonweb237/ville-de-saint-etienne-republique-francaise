import { useState } from 'react'
import { Link } from 'react-router'
import { Search, Users, Briefcase, Heart, BookOpen, Home as HomeIcon, Leaf, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'Famille & Citoyennete',
    description: 'Carte d\'identite, passeport, etat civil, recensement, elections...',
    color: '#1E7FC3',
    items: ['Demande de carte d\'identite', 'Passeport', 'Acte de naissance / mariage / deces', 'Recensement citoyen', 'Inscription sur les listes electorales'],
  },
  {
    icon: Briefcase,
    title: 'Emploi & Formation',
    description: 'Offres d\'emploi, formation professionnelle, accompagnement...',
    color: '#1E3A5F',
    items: ['Offres d\'emploi municipales', 'Formation professionnelle', 'Accompagnement vers l\'emploi', 'Insertion des jeunes', 'Aide a la creation d\'entreprise'],
  },
  {
    icon: Heart,
    title: 'Sante & Solidarite',
    description: 'Aides sociales, CCAS, handicap, personnes agees...',
    color: '#D16B0A',
    items: ['Centre Communal d\'Action Sociale', 'Aides financieres d\'urgence', 'Accompagnement handicap', 'Services aux personnes agees', 'Acces aux soins'],
  },
  {
    icon: BookOpen,
    title: 'Education & Jeunesse',
    description: 'Ecoles, colleges, lycees, cantines, transports scolaires...',
    color: '#7B3FA0',
    items: ['Inscription scolaire', 'Cantines et restauration', 'Transports scolaires', 'Activites periscolaires', 'Aides aux devoirs'],
  },
  {
    icon: HomeIcon,
    title: 'Logement & Urbanisme',
    description: 'Permis de construire, PLU, logement social, habitat...',
    color: '#D16B0A',
    items: ['Permis de construire', 'Plan Local d\'Urbanisme (PLU)', 'Demande de logement social', 'Aide a la renovation', 'Certificat d\'urbanisme'],
  },
  {
    icon: Leaf,
    title: 'Environnement & Proprete',
    description: 'Dechets, espaces verts, energie, assainissement...',
    color: '#27A658',
    items: ['Collecte des dechets', 'Encombrants', 'Espaces verts', 'Assainissement', 'Aides a la renovation energetique'],
  },
]

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredServices = services.filter((s) =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.items.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="pt-20 min-h-[100dvh] bg-white">
      {/* Header */}
      <section className="bg-bleu-marianne py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading mb-4">
            Tous nos services
          </h1>
          <p className="text-white/80 max-w-[560px] mb-8">
            Retrouvez l'ensemble des services municipaux classes par categorie.
          </p>
          <div className="max-w-[520px]">
            <div className="flex items-center bg-white rounded-lg overflow-hidden">
              <Search size={20} className="text-gray-400 ml-4 shrink-0" />
              <input
                type="text"
                placeholder="Rechercher un service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 h-12 px-3 text-sm outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service categories */}
      <section className="py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 space-y-10">
          {filteredServices.map((service) => (
            <div key={service.title} className="border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${service.color}1A` }}
                >
                  <service.icon size={26} style={{ color: service.color }} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gris-fonce font-heading">{service.title}</h2>
                  <p className="text-gris-moyen">{service.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.items.map((item) => (
                  <Link
                    key={item}
                    to="/demarches"
                    className="flex items-center justify-between gap-2 px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 text-sm text-gris-fonce"
                  >
                    <span>{item}</span>
                    <ArrowRight size={16} className="text-gray-400 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
