/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { SearchBar } from "../components/SearchBar.js";
import renderer from "react-test-renderer";
import { DataContext } from "../context/DataContext.js";

describe("Tests on SearchBar.js", () => {
  let wrapper;

  const mockByName = jest.fn();

  test("should be render", () => {
    wrapper = renderer
      .create(
        <DataContext.Provider value={{ pokemonByName: mockByName }}>
          <SearchBar />
        </DataContext.Provider>
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  test("should be call pokemonByName function", () => {
    wrapper = render(
      <DataContext.Provider value={{ pokemonByName: mockByName }}>
        <SearchBar />
      </DataContext.Provider>
    );

    const btn = wrapper.getByText("Buscar");
    fireEvent.click(btn);

    expect(mockByName).toHaveBeenCalled();
  });

  test("should be called with the argument of input value", () => {
    wrapper = render(
      <DataContext.Provider value={{ pokemonByName: mockByName }}>
        <SearchBar></SearchBar>
      </DataContext.Provider>
    );

    const input = wrapper.getByPlaceholderText("Ingrese el nombre a buscar");
    fireEvent.change(input, { target: { value: "pikachu" } });

    const btn = wrapper.getByText("Buscar");
    fireEvent.click(btn);

    expect(mockByName).toHaveBeenCalledWith("pikachu");
  });
});
