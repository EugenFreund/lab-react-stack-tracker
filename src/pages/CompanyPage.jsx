import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();

  const [company] = companies.filter((company) => company.slug === companySlug)

  console.log(companies);
  return (
    <div>
      <Navbar />
      <div style={{display:"flex", alignItems:"center"}}>
        <div style={{width:"400px"}}>
          <img src={company.logo} style={{ height: "150px", marginRight:"150px", border:"1px solid black",padding:"50px", borderRadius:"20px" }} alt="" />
        </div>
        <div style={{width:"400px"}}>
          <h1>{company.name}</h1>
          <h3>About</h3>
          <p>{company.description}</p>
        </div>
      </div>
      <ul style={{listStyleType:"none", margin:"0", padding:"0"}}>
          {company.techStack.map(tech => (
            <li style={{float:"left"}} key={tech.name}>
              <img src={tech.image} style={{height:"50px"}} alt="" />
              <h3>{tech.name}</h3></li>
          ))}
        </ul>
    </div>
  );
}

export default CompanyPage;
