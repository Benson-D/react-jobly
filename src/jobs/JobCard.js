import  { useState, useContext } from "react";
import "./JobCard.css";
import UserContext from "../auth/UserContext";

/** Renders job cards
 *
 * props: job an object { id, title, company, salary, equity }
 * state: hasApplied - boolean
 *
 * JobCardList -> JobCard
 */

function JobCard({ job }) {
  const { id, title, company, salary, equity } = job; 

  const [hasApplied, setHasApplied] = useState(false);
  const {handleAppliedtoJob} = useContext(UserContext)

  function handleApplication(){
    handleAppliedtoJob(id)
    setHasApplied(true);
    
  }

  const applied = hasApplied ? "Applied" : "Apply";

  return (
    <div className="JobCard card">
      <div className="card-body">
        <h2 className="card-title">
          <b>{title}</b>
        </h2>
        <h3>{company}</h3>
        {salary && <div> salary: ${salary.toLocaleString()} </div>}
        {equity && <div> equity: {equity * 100} </div>}
        <button onClick={handleApplication} className="btn btn-danger fw-bold text-uppercase float-end" disabled={hasApplied}>{applied}</button>
      </div>
      
    </div>
  );
}

export default JobCard;
