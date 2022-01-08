import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

const MealsDetails = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const mealsData = JSON.parse(sessionStorage.getItem("mealsData"));
    let filteredData = mealsData.filter(
      (res) => res.idMeal === props.match.params.id
    );
    setData(filteredData);
  }, [props.match.params.id]);

  return (
    <div className="m-3">
      <button onClick={() => props.history.push("/")}>GO BACK</button>
      <div className="meal-detail-container p-3">
        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <div key={index}>
                <img
                  src={item.strMealThumb}
                  alt={item.strCategory}
                  className="meal-detail-img"
                />
                <br />
                <p>Category : {item.strCategory}</p>
                <p>Area : {item.strArea}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default withRouter(MealsDetails);
