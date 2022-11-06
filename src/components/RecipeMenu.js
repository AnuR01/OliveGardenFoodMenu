import React from "react";
const RecipeMenu = ({ recipe }) => {
    const {
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe;
    
    return (
        <div className="menu">
            <img
                src={strMealThumb}
                alt={strMeal}
                className="menu-image"
            />
            <div className="menu-body">
                <span className="category">{strCategory}</span>
                <h3>{strMeal}</h3>
            </div>
        </div>
    )
};
export default RecipeMenu;