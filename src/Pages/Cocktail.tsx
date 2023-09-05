import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { cocktailMock } from "../mock";

export interface CocktailDetails {
  id: string;
  difficulty: string;
  description: string;
  ingredients: string[];
  method: any[];
  image: string;
  title: string;
}

function Cocktail() {
  let { id } = useParams();

  const [cocktailData, setCocktailData] =
    useState<CocktailDetails>(cocktailMock);

  useEffect(() => {
    const url = "https://the-cocktail-db3.p.rapidapi.com/" + id;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "03e028b7bfmsh704c9ef3008b970p19c6d6jsn57a83c6e543d",
        "X-RapidAPI-Host": "the-cocktail-db3.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((cocktail) => {
        if (cocktail.id) {
          setCocktailData(cocktail);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {id}
      <Link to="/">Back to Cocktails</Link>
    </div>
  );
}

export default Cocktail;
