import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Demarches from './pages/Demarches'
import Actualites from './pages/Actualites'
import PolitiquesPubliques from './pages/PolitiquesPubliques'
import Transparence from './pages/Transparence'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/demarches" element={<Demarches />} />
        <Route path="/actualites" element={<Actualites />} />
        <Route path="/politiques-publiques" element={<PolitiquesPubliques />} />
        <Route path="/transparence" element={<Transparence />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}
