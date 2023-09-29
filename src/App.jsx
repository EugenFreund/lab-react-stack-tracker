import { useState } from "react";
import "./App.css";
import companiesJSON from './companies.json';
import technologiesJSON from './technologies.json';
import  Navbar  from './components/Navbar';
import  HomePage  from './pages/HomePage';
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";


function App() {
  const [companies, setCompanies] = useState(companiesJSON);
  const [technologies, setTechnologies] = useState(technologiesJSON);

  <Route path="/example"  component={HomePage} />

  // console.log(companies)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage companies={companies}/>} />
        <Route path='/company/:companySlug' element={<CompanyPage companies={companies} />} />
        <Route path='/tech/:slug' element={<TechnologyPage />} />

        <Route path='*' element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
