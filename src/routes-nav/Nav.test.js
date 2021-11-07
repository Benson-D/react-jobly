import React from "react";
import { render, screen  } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Nav from "./Nav";
import { UserProvider } from "../testUtils";

it("renders without crashing", function () {
    render(
        <MemoryRouter>
          <UserProvider>
            <Nav />
          </UserProvider>
        </MemoryRouter>,
    );
  });
  
it("matches snapshot", function () {
    const { asFragment } = render(
        <MemoryRouter>
          <UserProvider>
            <Nav />
          </UserProvider>
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
});

it("renders when logged in", function(){
    render(
        <MemoryRouter>
            <UserProvider>
                <Nav/>
            </UserProvider>
        </MemoryRouter>
    )

    expect(screen.getByText(/Companies/i)).toBeInTheDocument()
    expect(screen.getByText(/Jobs/i)).toBeInTheDocument()
    expect(screen.getByText(/Profile/i)).toBeInTheDocument()
})

it("renders when logged out", function(){
    render(
        <MemoryRouter>
            <UserProvider currUser={null}>
                <Nav/>
            </UserProvider>
        </MemoryRouter>
    )

    expect(screen.getByText(/Login/i)).toBeInTheDocument()
    expect(screen.getByText(/Signup/i)).toBeInTheDocument()
    expect(screen.queryByText("Jobs")).not.toBeInTheDocument()
    expect(screen.queryByText("Companies")).not.toBeInTheDocument()
})