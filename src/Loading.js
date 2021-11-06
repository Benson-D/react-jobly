import { FaSpinner } from "react-icons/fa";
import "./Loading.css";
/** Renders loading page
 * 
 * prop:N/A
 * state: N/A
 * 
 * JobList, CompanyList, CompanyDetail --> Loading
 */

function Loading() {
  console.log("Loading page rendered");
  return (
    <div>
      <h1><FaSpinner className="spinner"/></h1>
    </div>
  );
}

export default Loading;