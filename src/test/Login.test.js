const { Login } = require("components/Login");
const { authContext } = require("context/authContext");
const { BrowserRouter } = require("react-router-dom");
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Error } from "components/Error";
import renderer from "react-test-renderer";

describe("Tests on Login.js", () => {
  let wrapper;
  const mockLogin = jest.fn();
  const mockLoginGoogle = jest.fn();
  const mockReset = jest.fn();

  test("should be render", () => {
    wrapper = renderer
      .create(
        <authContext.Provider value={{}}>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </authContext.Provider>
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  test("should be call login function", () => {
    wrapper = render(
      <authContext.Provider value={{ login: mockLogin }}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </authContext.Provider>
    );
    const btn = wrapper.getByText("Login");
    expect(btn).toBeDefined();

    waitFor(() => fireEvent.click(btn));
    expect(mockLogin).toBeCalledTimes(1);
  });

  test("should be call login with the arguments email and password", () => {
    wrapper = render(
      <authContext.Provider value={{ login: mockLogin }}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </authContext.Provider>
    );

    const email = wrapper.getByPlaceholderText("youremail@company.ltd");
    fireEvent.change(email, { target: { value: "tests@email.com" } });
    const password = wrapper.getByPlaceholderText("******");
    fireEvent.change(password, { target: { value: "123456" } });

    const btn = wrapper.getByText("Login");
    expect(btn).toBeDefined();

    waitFor(() => fireEvent.click(btn));
    expect(mockLogin).toHaveBeenCalledWith("tests@email.com", "123456");
  });

  test("should show Error Component if password is wrong", () => {
    wrapper = render(
      <authContext.Provider value={{ login: mockLogin }}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </authContext.Provider>
    );

    const email = wrapper.getByPlaceholderText("youremail@company.ltd");
    fireEvent.change(email, { target: { value: "tests@email.com" } });
    const password = wrapper.getByPlaceholderText("******");
    fireEvent.change(password, { target: { value: "1234567" } });

    const btn = wrapper.getByText("Login");
    expect(btn).toBeDefined();

    waitFor(() => fireEvent.click(btn));
    expect(<Error />).toBeDefined();
  });

  test("should show Error Component if the user is not found", () => {
    wrapper = render(
      <authContext.Provider value={{ login: mockLogin }}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </authContext.Provider>
    );

    const email = wrapper.getByPlaceholderText("youremail@company.ltd");
    fireEvent.change(email, { target: { value: "imNotRegister@email.com" } });
    const password = wrapper.getByPlaceholderText("******");
    fireEvent.change(password, { target: { value: "1234567" } });

    const btn = wrapper.getByText("Login");
    expect(btn).toBeDefined();

    waitFor(() => fireEvent.click(btn));
    expect(<Error />).toBeDefined();
  });

  test("should be call loginWithGoogle function", () => {
    wrapper = render(
      <authContext.Provider value={{ loginWithGoogle: mockLoginGoogle }}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </authContext.Provider>
    );

    const btn = wrapper.getByText("Login with Google");
    expect(btn).toBeDefined();

    waitFor(() => fireEvent.click(btn));
    expect(mockLoginGoogle).toBeCalledTimes(1);
  });

  test("should be call resetPassword function", () => {
    wrapper = render(
      <authContext.Provider value={{ resetPassword: mockReset }}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </authContext.Provider>
    );

    const btn = wrapper.getByText("Olvidaste tu contraseña?");
    expect(btn).toBeDefined();

    const email = wrapper.getByPlaceholderText("youremail@company.ltd");
    fireEvent.change(email, { target: { value: "tests@email.com" } });

    waitFor(() => fireEvent.click(btn));
    expect(mockReset).toBeCalledTimes(1);
    expect(
      "Te hemos enviado un correo para que recuperes tu contraseña"
    ).toBeDefined();
  });

  test("should ask the email", () => {
    wrapper = render(
      <authContext.Provider value={{ resetPassword: mockReset }}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </authContext.Provider>
    );

    const btn = wrapper.getByText("Olvidaste tu contraseña?");
    expect(btn).toBeDefined();

    const email = wrapper.getByPlaceholderText("youremail@company.ltd");
    fireEvent.change(email, { target: { value: "" } });

    waitFor(() => fireEvent.click(btn));
    expect("Ingrese su correo").toBeDefined();
  });
});
