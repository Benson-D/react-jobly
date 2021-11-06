import { useState, useEffect } from "react";
import JoblyApi from "../JoblyApi";
import SearchForm from "../SearchForm";
import JobCardList from "./JobCardList";
import Loading from "../Loading";
import Errors from "../Errors";

/** Renders JobList
 *
 * State:
 *   jobs - []
 *   searchTerm - null
 *
 *
 * Props: none
 *
 * Routes -> JobList -> {SearchTerm, JobCardList, Errors}
 */

function JobList() {
  const [jobs, setJobs] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  console.log("JobCardList", { jobs, searchTerm });

  function handleSearch(searchTerm) {
    setSearchTerm(searchTerm);
  }

  useEffect(
    function getJobs() {
      async function fetchJobs() {
        try {
          const response = await JoblyApi.getJobs(searchTerm);
          setJobs(response);
        } catch (err) {
          return <Errors errors={err} />;
        }
      }
      fetchJobs();
    },
    [searchTerm]
  );

  if (!jobs) return <Loading />;

  return (
    <section>
      <SearchForm handleSearch={handleSearch} />
      {jobs.length === 0 && searchTerm ? (
        <p>Sorry, no matching jobs were found. 🥲 </p>
      ) : (
        <JobCardList jobs={jobs} />
      )}
    </section>
  );
}

export default JobList;
