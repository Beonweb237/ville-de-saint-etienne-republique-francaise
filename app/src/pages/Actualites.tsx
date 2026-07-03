import { useState } from 'react'
import { Calendar } from 'lucide-react'

const news = [
  { image: '/actualite-1.jpg', date: '15 juin 2025', category: 'Consultation', title: 'Conseil municipal : participez a la consultation sur le futur PLU', excerpt: 'La municipalite lance une consultation publique sur le Plan Local d\'Urbanisme, ouverte jusqu\'a fin juillet.' },
  { image: '/actualite-2.jpg', date: '12 juin 2025', category: 'Travaux', title: 'Lancement des travaux de renovation du centre aquatique', excerpt: 'Le centre aquatique municipal fermera ses portes pour une renovation complete de 6 mois.' },
  { image: '/actualite-3.jpg', date: '08 juin 2025', category: 'Culture', title: 'Fete de la musique : programme complet des animations', excerpt: 'Concerts, animations de rue et scenes ouvertes dans toute la ville pour la Fete de la musique.' },
  { image: '/actualite-4.jpg', date: '05 juin 2025', category: 'Institution', title: 'Nouvelle equipe municipale : decouvrez les delegations', excerpt: 'Presentation des nouveaux adjoints et de leurs delegations respectives.' },
  { image: '/actualite-1.jpg', date: '28 mai 2025', category: 'Travaux', title: 'Renovation de la place de l\'Hotel de Ville', excerpt: 'Debut des travaux d\'embellissement de la place centrale, livraison prevue au printemps 2026.' },
  { image: '/actualite-2.jpg', date: '20 mai 2025', category: 'Culture', title: 'Nouvelle saison au theatre municipal', excerpt: 'Decouvrez la programmation 2025-2026 du theatre municipal.' },
]

const categories = ['Toutes', 'Consultation', 'Travaux', 'Culture', 'Institution']

export default function Actualites() {
  const [activeCategory, setActiveCategory] = useState('Toutes')
  const [visibleCount, setVisibleCount] = useState(6)

  const filtered = news.filter((n) => activeCategory === 'Toutes' || n.category === activeCategory)

  return (
    <div className="pt-20 min-h-[100dvh] bg-white">
      <section className="mx-auto max-w-[1280px] px-6 lg:px-12 py-section-mobile lg:py-section">
        <h1 className="text-4xl sm:text-5xl font-bold text-gris-fonce font-heading mb-4">
          Actualites municipales
        </h1>
        <p className="text-gris-moyen max-w-[560px] mb-10">
          Suivez l'actualite de la ville : travaux, culture, consultations citoyennes et vie institutionnelle.
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === cat
                  ? 'bg-bleu-marianne text-white'
                  : 'bg-gray-100 text-gris-fonce hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.slice(0, visibleCount).map((item, i) => (
            <div key={`${item.title}-${i}`} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wide text-bleu-marianne mb-2">
                {item.category}
              </span>
              <h3 className="font-heading font-semibold text-gris-fonce mb-2 group-hover:text-bleu-marianne transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-sm text-gris-moyen mb-3 line-clamp-2">{item.excerpt}</p>
              <div className="flex items-center gap-1.5 text-xs text-gris-moyen">
                <Calendar size={12} />
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < filtered.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((c) => c + 6)}
              className="px-6 py-3 border border-bleu-marianne text-bleu-marianne font-medium rounded-lg hover:bg-bleu-marianne hover:text-white transition-colors duration-200"
            >
              Voir plus d'actualites
            </button>
          </div>
        )}
      </section>
    </div>
  )
}
