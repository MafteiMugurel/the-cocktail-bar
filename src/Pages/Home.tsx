import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import Cocktail from "./Cocktail";
import { cocktailsMock } from "../mock";

interface Cocktail {
  id: string;
  title: string;
  difficulty: string;
  image: string;
}

function Home() {
  const [cocktailsData, setCocktailsData] = useState<Cocktail[]>(cocktailsMock);

  useEffect(() => {
    const url = "https://the-cocktail-db3.p.rapidapi.com/";
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
      .then((cocktails) => {
        if (cocktails.length > 0) {
          setCocktailsData(cocktails);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      {cocktailsData.length > 0 &&
        cocktailsData.map((cocktail: Cocktail) => {
          return (
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="450" image={cocktail.image} />
              <CardContent>{cocktail.title}</CardContent>
              <Link to={"/cocktail/" + cocktail.id}>See recipe</Link>
            </Card>
          );
        })}
    </div>
  );
}

export default Home;
