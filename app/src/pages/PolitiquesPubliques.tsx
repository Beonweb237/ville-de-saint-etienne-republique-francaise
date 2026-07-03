import { Bike, Leaf, Palette, TrendingUp } from 'lucide-react'

const axes = [
  {
    icon: Bike,
    title: 'Mobilite Durable',
    color: '#1E7FC3',
    description: 'Developpement des pistes cyclables, extension du reseau de transports en commun, zones a faibles emissions.',
    stats: [{ label: 'km de pistes cyclables', value: '85' }, { label: 'stations velos en libre-service', value: '40' }],
  },
  {
    icon: Leaf,
    title: 'Transition Ecologique',
    color: '#27A658',
    description: 'Renovation energetique des batiments publics, vegetalisation urbaine, gestion durable des dechets.',
    stats: [{ label: 'batiments renoves', value: '32' }, { label: 'arbres plantes depuis 2023', value: '2 400' }],
  },
  {
    icon: Palette,
    title: 'Culture & Patrimoine',
    color: '#7B3FA0',
    description: 'Soutien aux associations culturelles, renovation du patrimoine historique, programmation evenementielle.',
    stats: [{ label: 'evenements culturels par an', value: '120' }, { label: 'associations soutenues', value: '65' }],
  },
  {
    icon: TrendingUp,
    title: 'Developpement Economique',
    color: '#D16B0A',
    description: 'Soutien aux commerces de proximite, attractivite territoriale, accompagnement des entrepreneurs locaux.',
    stats: [{ label: 'entreprises accompagnees', value: '210' }, { label: 'emplois crees en 2024', value: '540' }],
  },
]

export default function PolitiquesPubliques() {
  return (
    <div className="pt-20 min-h-[100dvh] bg-white">
      <section className="bg-bleu-marianne py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading mb-4">
            Nos politiques publiques
          </h1>
          <p className="text-white/80 max-w-[560px]">
            Les grands axes d'action de la municipalite pour transformer durablement notre ville.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {axes.map((axe) => (
            <div key={axe.title} className="border border-gray-200 rounded-2xl p-8">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${axe.color}1A` }}
              >
                <axe.icon size={26} style={{ color: axe.color }} />
              </div>
              <h2 className="text-2xl font-bold text-gris-fonce font-heading mb-3">{axe.title}</h2>
              <p className="text-gris-moyen mb-6">{axe.description}</p>
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                {axe.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold font-heading" style={{ color: axe.color }}>{stat.value}</p>
                    <p className="text-xs text-gris-moyen">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
