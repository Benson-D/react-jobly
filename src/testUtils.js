import React from "react";
import UserContext from "./auth/UserContext";

const testUser = {
    username: "testuser",
    first_name: "testFirst",
    last_name: "testLast",
    email: "test@gmail.com",
}

const UserProvider =
    ({ children, currUser = testUser, handleAppliedtoJob = () => false }) => (
    <UserContext.Provider value={{ currUser, handleAppliedtoJob }}>
      {children}
    </UserContext.Provider>
);

export { UserProvider };
