import { ImSpinner2} from "react-icons/im";
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
      <h1><ImSpinner2 className="spinner"/></h1>
    </div>
  );
}

export default Loading;