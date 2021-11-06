import React from "react";
import "./JobCard.css";

/** Renders job cards
 *
 * props: title, company, salary, equity
 * state: N/A
 *
 * JobCardList -> JobCard
 */

function JobCard({ title, company, salary, equity }) {
  // console.log("JobCard", { title, company, salary, equity });
  return (
    <div className="JobCard card">
      <div className="card-body">
        <h2 className="card-title">
          <b>{title}</b>
        </h2>
        <h3>{company}</h3>
        {salary && <div> salary: ${salary.toLocaleString()} </div>}
        {equity && <div> equity: {equity * 100} </div>}
        <button className="btn btn-danger fw-bold text-uppercase float-end">Apply</button>
      </div>
      
    </div>
  );
}

export default JobCard;
