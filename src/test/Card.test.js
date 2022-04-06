import React from "react";
import { Card } from "../components/Card.js";
import { render } from "@testing-library/react";

describe("", () => {
  test("should be display correctly", () => {
    const Info = {
      pokemonName: "pikachu",
      pokemonImg:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      pokemonNum: 35,
    };

    const { pokemonName, pokemonImg, pokemonNum } = Info;

    const wrapper = render(
      <Card
        pokemonName={pokemonName}
        pokemonImg={pokemonImg}
        pokemonNum={pokemonNum}
      />
    );

    wrapper.getByText("pikachu");
    const img = wrapper.container.querySelector("img").src;

    expect(img).toEqual(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    );
  });
});
