import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Landing from './components/Landing'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Blog from './components/Blog'
import Press from './components/Press'
import ImpactReports from './components/ImpactReports'
import DonationSystem from './components/DonationSystem'
import DonateForm from './components/DonateForm'
import TransparencyBoard from './components/TransparencyBoard'

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Landing />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="services" element={<Services />} />
            <Route path="blog" element={<Blog />} />
            <Route path="press" element={<Press />} />
            <Route path="impact" element={<ImpactReports />} />
            <Route path="donation" element={<DonationSystem />} />
            <Route path="donate-now" element={<DonateForm />} />
            <Route path="transparency" element={<TransparencyBoard />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
