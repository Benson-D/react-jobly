import JobCard from "./JobCard";

/** Renders a list of job cards
 *
 * prop: jobs
 * state: N/A
 *
 * JobList -> JobCardList -> JobCard
 */

function JobCardList({ jobs }) {

  
  console.log("JobCardList", { jobs });
  return (
    <div>
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
        />
      ))}
    </div>
  );
}

export default JobCardList;
