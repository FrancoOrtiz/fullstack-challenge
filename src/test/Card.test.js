/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { Card } from "../components/Card.js";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

describe("Tests on Card.js", () => {
  let wrapper;

  const Info = {
    pokemonName: "pikachu",
    pokemonImg:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    pokemonNum: 35,
  };

  const { pokemonName, pokemonImg, pokemonNum } = Info;

  test("should be render", () => {
    wrapper = renderer
      .create(
        <Card
          pokemonName={pokemonName}
          pokemonImg={pokemonImg}
          pokemonNum={pokemonNum}
        />
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  test("should be display correctly", () => {
    wrapper = render(
      <Card
        pokemonName={pokemonName}
        pokemonImg={pokemonImg}
        pokemonNum={pokemonNum}
      />
    );

    wrapper.getByText("pikachu");
    wrapper.getByText(35);

    const img = wrapper.getByRole("img").src;

    expect(img).toEqual(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    );
  });
});
