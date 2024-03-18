import React, { useEffect } from "react";
import { useState } from "react";

export const Recipe = (props) => {
  const [recipeFetch, setRecipeFetch] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.categorical}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setRecipeFetch(data.meals);
      } catch (error) {
        console.error("no definition found", error);
      }
    };
    fetchData();
  }, [props.categorical]);

  //   const filteredRecipes = recipeFetch.filter((categorical) => {
  //     return  categorical.strMeal.toLowerCase().includes(props.search.toLowerCase());
  //   });

  return (
    <div>
      {recipeFetch.map((meal, index) => {
        return (
          <div
            key={index}
            className="card bg-warning bg-opacity: 1; text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
            style={{ maxWidth: "310px" }}
          >
            <img src={meal.strMealThumb} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text bg-dark rounded-5">
                {meal.strMeal
                  ? meal.strMeal.slice(0, 15) + "..."
                  : "text is loading"}
              </p>
              <h5 class="card-title mt-2 bg-dark rounded-3">
                {props.categorical}
              </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};
