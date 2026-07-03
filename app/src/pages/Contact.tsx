import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const services = [
  { name: 'Standard general', phone: '01 23 45 67 89' },
  { name: 'Etat civil', phone: '01 23 45 67 90' },
  { name: 'Urbanisme', phone: '01 23 45 67 91' },
  { name: 'CCAS - Action sociale', phone: '01 23 45 67 92' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="pt-20 min-h-[100dvh] bg-white">
      <section className="bg-bleu-marianne py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading mb-4">
            Contactez-nous
          </h1>
          <p className="text-white/80 max-w-[560px]">
            Une question, une demarche ? Notre equipe est a votre disposition.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gris-fonce font-heading mb-6">Formulaire de contact</h2>
            {sent ? (
              <div className="p-6 bg-green-50 text-green-700 rounded-xl">
                Votre message a bien ete envoye. Nous vous repondrons dans les meilleurs delais.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nom complet"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="h-12 px-4 border border-gray-300 rounded-lg outline-none focus:border-bleu-marianne"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="h-12 px-4 border border-gray-300 rounded-lg outline-none focus:border-bleu-marianne"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Objet"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:border-bleu-marianne"
                />
                <textarea
                  placeholder="Votre message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full p-4 border border-gray-300 rounded-lg outline-none focus:border-bleu-marianne resize-none"
                />
                <button
                  type="submit"
                  className="h-12 px-8 bg-bleu-marianne text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200"
                >
                  Envoyer le message
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="flex items-start gap-3 mb-4">
                <MapPin size={20} className="text-bleu-marianne mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-gris-fonce">Hotel de Ville</p>
                  <p className="text-sm text-gris-moyen">Place de l'Hotel de Ville, 42000 Saint-Etienne</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <Clock size={20} className="text-bleu-marianne mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-gris-fonce">Horaires</p>
                  <p className="text-sm text-gris-moyen">Lun-Ven : 8h30 - 17h30</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-bleu-marianne mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-gris-fonce">Email</p>
                  <p className="text-sm text-gris-moyen">contact@saint-etienne.fr</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gris-fonce mb-3 flex items-center gap-2">
                <Phone size={18} className="text-bleu-marianne" />
                Annuaire des services
              </h3>
              <div className="space-y-2">
                {services.map((service) => (
                  <div key={service.name} className="flex justify-between text-sm p-3 bg-gray-50 rounded-lg">
                    <span className="text-gris-fonce">{service.name}</span>
                    <span className="text-gris-moyen">{service.phone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
