import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function HomePage({companies}) {
  console.log(companies)
  return (
    <div>
      <Navbar />
      <div style={{ display: 'grid', gridTemplateColumns: "500px 500px" }}>
        {companies.map((company) => (
          <li key={company.id} style={{ listStyle: "none", borderRadius: "10px", border: "1px solid black", margin: "20px 50px" }}>
            <Link to={`/company/${company.slug}`}>
              <h4>{company.name}</h4>
              <img src={company.logo} style={{ height: "100px", marginBottom: "30px" }} alt="" />
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}

export default HomePage;