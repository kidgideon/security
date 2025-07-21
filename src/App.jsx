import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import AdminCases from './admin/admin-cases'
import ManageCases from './admin/manageCases'
import Caseview from './pages/caseView'
import About  from './pages/about'
import Services from './pages/services'
import Contact from './pages/contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cases" element={<AdminCases />} />
        <Route path='/manage/cases/:caseId' element={<ManageCases/>}/>
         <Route path='/view/cases/:caseId' element={<Caseview/>}/>
            <Route path='/about' element={<About/>}/>
             <Route path='/services' element={<Services/>}/>
              <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App;

