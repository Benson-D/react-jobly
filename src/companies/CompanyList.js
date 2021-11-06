import { useState, useEffect } from "react";
import JoblyApi from "../JoblyApi";
import SearchForm from "../SearchForm";
import CompanyCard from "./CompanyCard";
import Loading from "../Loading";
import Errors from "../Errors";

/** Function renders List of companies
 *
 * State:
 *   searchTerm: {name: company}
 *   companies: [{company}, {company}, {company}]
 *
 * Props: None
 *
 * Routes -> CompanyList -> {SearchForm, CompanyCard}
 *
 */

function CompanyList() {
  const [companies, setCompanies] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  console.log("CompanyList", { companies });

  function handleSearch(searchTerm) {
    setSearchTerm(searchTerm);
  }

  useEffect(
    function getCompanies() {
      async function fetchCompanies() {
        try {
          const response = await JoblyApi.getCompanies(searchTerm);
          setCompanies(response);
        } catch (err) {
          console.log(err);
          return <Errors errors={err} />;
        }
      }
      fetchCompanies();
    },
    [searchTerm]
  );

  if (!companies) return <Loading />;

  return (
    <section className="CompanyList col-md-8 offset-md-2">
      <SearchForm handleSearch={handleSearch} />
      {companies.length === 0 && searchTerm ? (
        <p>Sorry, no matching companies were found. 🥲 </p>
      ) : (
        companies.map(({ handle, name, description, logoUrl }) => (
          <CompanyCard
            key={handle}
            handle={handle}
            name={name}
            description={description}
            logoUrl={logoUrl}
          />
        ))
      )}
    </section>
  );
}

export default CompanyList;
