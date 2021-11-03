import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CompanyDetail from "../CompanyDetail";
import CompanyList from "../CompanyList";
import Homepage from "../homepage/Homepage";
import JobList from "../JobList";
import SignUpForm from "../SignUpForm";
import LoginForm from "../LoginForm";
import ProfileForm from "../ProfileForm";

/** Routes
 *
 * props: signUpUser fn, loginUser fn, currUser
 * state: none
 *
 * App -> Routes ->{Homepage, CompanyList, CompanyDetail, SignUpForm, LoginForm, ProfileForm}
 */

function Routes({ signUpUser, loginUser, currUser, editUser }) {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/signup">
        <SignUpForm signUpUser={signUpUser} />
      </Route>
      <Route exact path="/login">
        <LoginForm loginUser={loginUser} />
      </Route>
      {currUser && (
        <>
          <Route exact path="/companies">
            <CompanyList />
          </Route>
          <Route exact path="/companies/:handle">
            <CompanyDetail />
          </Route>
          <Route exact path="/jobs">
            <JobList />
          </Route>
          <Route exact path="/profile">
            <ProfileForm editUser={editUser} />
          </Route>
        </>
      )}

      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
