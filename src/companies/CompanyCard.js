import { Link } from "react-router-dom";
import "./CompanyCard.css";

/** Renders CompanyCard
 *
 * Props: handle, name, description, logoUrl
 *
 * State: none
 *
 * CompanyList -> CompanyCard
 */

function CompanyCard({ handle, name, description, logoUrl }) {
  return (
    <div className="CompanyCard card">
      <Link to={`companies/${handle}`}>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          {logoUrl && (
            <img src={logoUrl} className="float-end mb-1" alt="logo" />
          )}
        </div>
      </Link>
    </div>
  );
}

export default CompanyCard;
