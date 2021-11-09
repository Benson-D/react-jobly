import { useState, useEffect } from "react";
import Routes from "./routes-nav/Routes";
import Nav from "./routes-nav/Nav";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./auth/UserContext";
import JoblyApi from "./JoblyApi";
import jwt from "jsonwebtoken";
import Loading from "./Loading";

/** Renders jobly app
 *
 * prop: none
 * state: currUser, token, isLoading
 *
 * Index -> App -> {Routes, Nav}
 */

function App() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [appliedJob, setAppliedJob] = useState(new Set());
  const [isLoading, setIsLoading] = useState(false);

  console.log("App", { currUser, token });

  useEffect(
    function getCurrUser() {
      async function fetchCurrUser() {
        if (token) {
          JoblyApi.token = token;
          const { username } = jwt.decode(token);
          console.log(username, "This is current username");
          const user = await JoblyApi.getUser(username);
          console.log({ user }, "User info from fetchCurrUser");
          setCurrUser(user);
          
        }
        setIsLoading(true);
      }

      setIsLoading(false);
      fetchCurrUser();
    },
    [token]
  );

  async function signUpUser(formData) {
    const token = await JoblyApi.signUp(formData);
    console.log("token from signUpUser has passed", { token });
    localStorage.setItem("token", token);
    setToken(token);
  }

  async function loginUser(formData) {
    const token = await JoblyApi.login(formData);
    console.log("token from loginUser has passed", { token });
    localStorage.setItem("token", token);
    setToken(token);
  }

  async function editUser(formData) {
    console.log("edit user ran", { formData });
    const { username, password, firstName, lastName, email } = formData;

    let token = await JoblyApi.login({ username, password });
    if (token) {
      const user = await JoblyApi.editUser({
        username,
        password,
        firstName,
        lastName,
        email,
      });
      setCurrUser(user);
    }
  }

  async function handleAppliedtoJob(id){
    if (appliedJob.has(id)) return; 
    setAppliedJob(appliedJob.add(id))
    console.log(appliedJob, "From app for job applying");
  }

  function logOut() {
    console.log("The logout was clicked");
    setCurrUser(null);
    setToken(null);
    setAppliedJob(new Set());
    localStorage.removeItem("token");
  }

  if (!isLoading) return <Loading/>;

  return (
      <div className="App">
        <BrowserRouter>
          <UserContext.Provider value={{ currUser, handleAppliedtoJob }}>
            <Nav logOut={logOut} />
            <Routes
              signUpUser={signUpUser}
              loginUser={loginUser}
              currUser={currUser}
              editUser={editUser}
            />
          </UserContext.Provider>
        </BrowserRouter>
      </div>
    )
}

export default App;
