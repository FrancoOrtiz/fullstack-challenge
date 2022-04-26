import { Register } from "components/Register";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { authContext } from "context/authContext";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";

describe("Tests on Register.js", () => {
  let wrapper;
  const mockSignup = jest.fn();

  test("should be render", () => {
    wrapper = renderer
      .create(
        <authContext.Provider value={{}}>
          <BrowserRouter>
            <Register />
          </BrowserRouter>
        </authContext.Provider>
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  test("should be call signup function", async () => {
    wrapper = render(
      <authContext.Provider value={{ signup: mockSignup }}>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </authContext.Provider>
    );
    const btn = wrapper.getByText("Register");
    expect(btn).toBeDefined();

    waitFor(() => fireEvent.click(btn));
    expect(mockSignup).toBeCalledTimes(1);
  });

  test("should be called with the arguments email and password", () => {
    wrapper = render(
      <authContext.Provider value={{ signup: mockSignup }}>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </authContext.Provider>
    );

    const email = wrapper.getByPlaceholderText("youremail@company.ltd");
    fireEvent.change(email, { target: { value: "tests@email.com" } });
    const password = wrapper.getByPlaceholderText("******");
    fireEvent.change(password, { target: { value: "123456" } });

    const btn = wrapper.getByText("Register");
    expect(btn).toBeDefined();

    waitFor(() => fireEvent.click(btn));
    expect(mockSignup).toHaveBeenCalledWith("tests@email.com", "123456");
  });
});
