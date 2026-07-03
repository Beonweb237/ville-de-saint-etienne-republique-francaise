import { FileText, PieChart, Users, Download } from 'lucide-react'

const budgetItems = [
  { label: 'Education & Jeunesse', percent: 28, color: '#7B3FA0' },
  { label: 'Services Generaux', percent: 22, color: '#1E7FC3' },
  { label: 'Culture & Sport', percent: 18, color: '#D16B0A' },
  { label: 'Environnement', percent: 16, color: '#27A658' },
  { label: 'Social & Sante', percent: 16, color: '#1E3A5F' },
]

const documents = [
  { title: 'Budget primitif 2025', type: 'PDF - 3.2 Mo' },
  { title: 'Compte-rendu Conseil municipal - Juin 2025', type: 'PDF - 1.1 Mo' },
  { title: 'Marches publics en cours', type: 'PDF - 850 Ko' },
  { title: 'Rapport annuel 2024', type: 'PDF - 5.4 Mo' },
]

export default function Transparence() {
  return (
    <div className="pt-20 min-h-[100dvh] bg-white">
      <section className="bg-bleu-marianne py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading mb-4">
            Transparence & Open Data
          </h1>
          <p className="text-white/80 max-w-[560px]">
            Budget, marches publics et decisions municipales en toute transparence.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Budget */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <PieChart size={22} className="text-bleu-marianne" />
              <h2 className="text-2xl font-bold text-gris-fonce font-heading">Budget municipal 2025</h2>
            </div>
            <div className="space-y-4">
              {budgetItems.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gris-fonce font-medium">{item.label}</span>
                    <span className="text-gris-moyen">{item.percent}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${item.percent}%`, backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gris-moyen mt-6">Budget total : 142 M€ pour l'exercice 2025.</p>
          </div>

          {/* Organigramme */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Users size={22} className="text-bleu-marianne" />
              <h2 className="text-2xl font-bold text-gris-fonce font-heading">Organigramme des services</h2>
            </div>
            <div className="space-y-3">
              {['Cabinet du Maire', 'Direction Generale des Services', 'Ressources Humaines', 'Urbanisme & Amenagement', 'Affaires Sociales', 'Finances & Budget'].map((service) => (
                <div key={service} className="p-4 bg-gray-50 rounded-lg text-sm font-medium text-gris-fonce">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Documents */}
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="flex items-center gap-2 mb-6">
            <FileText size={22} className="text-bleu-marianne" />
            <h2 className="text-2xl font-bold text-gris-fonce font-heading">Documents publics</h2>
          </div>
          <div className="space-y-3">
            {documents.map((doc) => (
              <div
                key={doc.title}
                className="flex items-center justify-between gap-4 p-5 border border-gray-200 rounded-xl hover:border-bleu-marianne transition-colors duration-200"
              >
                <div>
                  <p className="font-semibold text-gris-fonce">{doc.title}</p>
                  <p className="text-sm text-gris-moyen">{doc.type}</p>
                </div>
                <button className="flex items-center gap-2 text-bleu-marianne font-medium text-sm shrink-0">
                  <Download size={16} />
                  Telecharger
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
