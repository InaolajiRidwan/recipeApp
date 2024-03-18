import React from "react";
import { useState } from "react";

const RecipeNav = (props) => {
  // const searchMe = (event) => {
  //   props.setSearch(event.target.value);
  // };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand bg-warning w-20 fs-6 rounded" href="#">
          ShopEat
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-end  n">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    onClick={() => props.setCategorical("Beef")}
                    className="dropdown-item"
                    href="#"
                  >
                    Beef
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      props.setCategorical("Chicken");
                    }}
                    className="dropdown-item"
                    href="#"
                  >
                    Chicken
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      props.setCategorical("Lamb");
                    }}
                    className="dropdown-item"
                    href="#"
                  >
                    Lamb
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      props.setCategorical("Dessert");
                    }}
                    className="dropdown-item"
                    href="#"
                  >
                    Dessert
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      props.setCategorical("Miscellaneous");
                    }}
                    className="dropdown-item"
                    href="#"
                  >
                    Miscellaneous
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      props.setCategorical("Pasta");
                    }}
                    className="dropdown-item"
                    href="#"
                  >
                    Pasta
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      props.setCategorical("Pork");
                    }}
                    className="dropdown-item"
                    href="#"
                  >
                    Pork
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      props.setCategorical("Seafood");
                    }}
                    className="dropdown-item"
                    href="#"
                  >
                    Seafood
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      props.setCategorical("side");
                    }}
                    className="dropdown-item"
                    href="#"
                  >
                    side
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      props.setCategorical("starter");
                    }}
                    className="dropdown-item"
                    href="#"
                  >
                    Starter
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      props.setCategorical("Vegan");
                    }}
                    className="dropdown-item"
                    href="#"
                  >
                    Vegan
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      props.setCategorical("Vegetarian");
                    }}
                    className="dropdown-item"
                    href="#"
                  >
                    Vegetarian
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      props.setCategorical("Breakfast");
                    }}
                    className="dropdown-item"
                    href="#"
                  >
                    Breakfast
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      props.setCategorical("Goat");
                    }}
                    className="dropdown-item"
                    href="#"
                  >
                    Goat
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default RecipeNav;
