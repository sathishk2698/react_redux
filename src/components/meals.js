import React, { useState, useCallback, useMemo } from "react";
import { withRouter } from "react-router-dom";

//redux imports
import { connect } from "react-redux";
import { searchMealAction } from "../redux/actions/mealsAction/meals";
import { mapStateToProps } from "../redux/reducers";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Meals = (props) => {
  const options = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const [searchMealByLetter, setSearchMealByLetter] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(props.meals.mealsReducer.result);

  const mealsData = JSON.parse(sessionStorage.getItem("mealsData"));

  const selectMealFun = (e) => {
    setSearchMealByLetter(e.value);
    setData([]);
    setInputValue("");
    props.searchMealAction(e.value);
  };

  const mealOnChangeHandler = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const searchHandler = () => {
    let res = mealsData.filter((res) => res.strMeal === inputValue);
    setData(res);
  };

  const viewFullDetailHandler = (id) => {
    props.history.push(`/detail-view/${id}`);
  };

  return (
      props.meals.mealsReducer.loading ? <p>LOADING.....</p> : <div>
      <div>
        <h1 className="mels-header mt-3"> MEALS APP </h1>
        <br />
        <div className="meals-inputs-container">
          <Dropdown
            options={options}
            value={searchMealByLetter}
            onChange={selectMealFun}
            placeholder="Select an option"
            style={{width: "200px"}}
          />
          <div>
            <input value={inputValue} onChange={mealOnChangeHandler} />
            <button onClick={searchHandler}> SEARCH MEAL</button>
          </div>
        </div>
      </div>
      <br />
      <div className="meals-card-container">
        {props &&
          props.meals &&
          props.meals.mealsReducer &&
          props.meals.mealsReducer.result.length > 0 &&
          data.length === 0 &&
          props.meals.mealsReducer.result.map((item, index) => {
            return (
              <div key={index} className="card-container">
                <div className="card">
                  <div class="card-body">
                    <img
                      src={item.strMealThumb}
                      className="card-img-top"
                      alt={item.strCategory}
                    />
                    <h5 className="card-title my-3">{item.strMeal}</h5>
                    <button
                      className="btn btn-primary"
                      onClick={() => viewFullDetailHandler(item.idMeal)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <div key={index} className="card-container">
                <div className="card">
                  <div class="card-body">
                    <img
                      src={item.strMealThumb}
                      className="card-img-top"
                      alt={item.strCategory}
                    />
                    <h5 class="card-title">{item.strMeal}</h5>
                    <button
                      className="btn btn-primary"
                      onClick={() => viewFullDetailHandler(item.idMeal)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  searchMealAction: (id) => {
    dispatch(searchMealAction(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Meals));
