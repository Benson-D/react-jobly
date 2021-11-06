import { useContext } from "react";
import "./Homepage.css";
import UserContext from "../auth/UserContext";

/** Renders Homepage
 *
 * Props: none,
 * State: none
 *
 * Routes -> Homepage
 */

function Homepage() {
  const { currUser } = useContext(UserContext);

  return (
    <main className="Homepage">
      <div className="container text-center">
        <h1 className="mb-4 fw-bold">Jobly</h1>
        <p>A convenient but helpful way to jump start your career</p>
        {currUser && (
          <p className="Homepage-welcome lead">Welcome Back, {currUser.firstName}!</p>
        )}
      </div>
    </main>
  );
}

export default Homepage;
