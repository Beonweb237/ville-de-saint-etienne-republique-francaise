const stats = [
  { value: '174 000', label: 'Habitants' },
  { value: '79,97', label: 'km² de superficie' },
  { value: '55', label: 'Elus municipaux' },
  { value: '3 200', label: 'Agents municipaux' },
]

const elus = [
  { name: 'Marie Dubosc', role: 'Maire' },
  { name: 'Antoine Leforestier', role: '1er Adjoint - Finances' },
  { name: 'Claire Beaumont', role: 'Adjointe - Education' },
  { name: 'Karim Belhadj', role: 'Adjoint - Urbanisme' },
]

export default function About() {
  return (
    <div className="pt-20 min-h-[100dvh] bg-white">
      <section className="bg-bleu-marianne py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading mb-4">
            A propos de la ville
          </h1>
          <p className="text-white/80 max-w-[640px]">
            Republique Francaise — Ville de Saint-Etienne, prefecture de la Loire, au coeur
            de la region Auvergne-Rhone-Alpes.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          {/* Mot du maire */}
          <div className="max-w-[720px] mb-16">
            <h2 className="text-2xl font-bold text-gris-fonce font-heading mb-4">Le mot du maire</h2>
            <p className="text-gris-moyen leading-relaxed mb-4">
              "Saint-Etienne est une ville de reinvention permanente. De son passe industriel a
              son statut de capitale du design, notre ville n'a jamais cesse de se transformer
              pour offrir a ses habitants un cadre de vie toujours plus agreable, solidaire et
              durable."
            </p>
            <p className="text-gris-fonce font-semibold">Marie Dubosc, Maire de Saint-Etienne</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 py-10 border-y border-gray-200">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-bleu-marianne font-heading mb-1">{stat.value}</p>
                <p className="text-sm text-gris-moyen">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Histoire */}
          <div className="max-w-[720px] mb-16">
            <h2 className="text-2xl font-bold text-gris-fonce font-heading mb-4">Notre histoire</h2>
            <p className="text-gris-moyen leading-relaxed">
              Fondee autour de son industrie miniere et manufacturiere, Saint-Etienne s'est
              imposee au fil des siecles comme un centre economique majeur de la region. Aujourd'hui
              reconnue UNESCO Ville de Design, elle poursuit sa transformation en misant sur
              l'innovation, la culture et la qualite de vie de ses habitants.
            </p>
          </div>

          {/* Elus */}
          <div>
            <h2 className="text-2xl font-bold text-gris-fonce font-heading mb-8">L'equipe municipale</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {elus.map((elu) => (
                <div key={elu.name} className="p-6 border border-gray-200 rounded-xl text-center">
                  <div className="w-16 h-16 rounded-full bg-bleu-marianne/10 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-bleu-marianne font-bold text-lg">
                      {elu.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <p className="font-semibold text-gris-fonce">{elu.name}</p>
                  <p className="text-sm text-gris-moyen">{elu.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
