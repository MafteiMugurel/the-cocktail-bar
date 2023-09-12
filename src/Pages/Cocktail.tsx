import { useEffect, useState } from "react";
import "./Cocktail.css";
import { Link, useParams } from "react-router-dom";
import { cocktailMock } from "../mock";
import { Box, Card, CardContent, CardMedia } from "@mui/material";

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
    <div className="cocktail-box">
      <Link className="cocktail-link" to="/">
        Back to Cocktails
      </Link>
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          className="cocktail-image"
          component="img"
          image={cocktailMock.image}
        />
        <CardContent className="cocktail-title">
          {cocktailMock.title}
        </CardContent>
        <CardContent className="cocktail-description">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {cocktailMock.description}
        </CardContent>
        <CardContent>
          <ul>
            {cocktailMock.ingredients.map((ingredient: string) => {
              return <li>{ingredient}</li>;
            })}
          </ul>
        </CardContent>
        <CardContent>
          {cocktailMock.method.map((step: { [key: string]: string }) => {
            return (
              <div>
                <div className="cocktail-step">{Object.keys(step)[0]}</div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{step[Object.keys(step)[0]]}
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}

export default Cocktail;
