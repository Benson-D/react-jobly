import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Homepage from "./Homepage";
import { UserProvider } from "../testUtils";


it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <UserProvider>
          <Homepage />
        </UserProvider>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("renders the homepage", function () {
    render(
        <MemoryRouter>
            <UserProvider>
                <Homepage/>
            </UserProvider>
        </MemoryRouter>
    )

    expect(screen.getByText(/Welcome Back/i)).toBeInTheDocument()
})

it("renders the homepage when logged out", function () {
    render(
        <MemoryRouter>
            <UserProvider currUser={null}>
                <Homepage/>
            </UserProvider>
        </MemoryRouter>
    )

    expect(screen.queryByText("Welcome Back")).not.toBeInTheDocument()
})