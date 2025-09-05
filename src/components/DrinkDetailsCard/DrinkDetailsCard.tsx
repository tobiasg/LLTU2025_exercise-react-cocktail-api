import type { ReactElement } from "react";
import type { Drink } from "../../types/drink";

interface DrinkDetailsCardProps {
  drink: Drink;
}

export const DrinkDetailsCard = ({ drink }: DrinkDetailsCardProps): ReactElement => {
  return (
    <>
      <section className="drink-details-card">
        <div className="drink-header">
          <img src={drink.thumbnail} alt={drink.name} className="drink-image" />
          <div className="drink-title-overlay">
            <h1>{drink.name}</h1>
            <p className="glass">{drink.glass}</p>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="badges">
            <span className="badge badge-alcoholic">
              {drink.alcoholic ? "Alcoholic" : "Non-alcoholic"}
            </span>
            <span className="badge badge-category">{drink.category}</span>
            {drink.tags.map((tag, index) => (
              <span className="badge badge-tag" key={index}>
                {tag}
              </span>
            ))}
          </div>
          <div className="grid-wrapper">
            <article className="ingredients">
              <h3>Ingredients</h3>
              <ul>
                {drink.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <span className="ingredient-measure">{ingredient.measure} </span>
                    {ingredient.ingredient}
                  </li>
                ))}
              </ul>
            </article>
            <article className="instructions">
              <h3>Instructions</h3>
              {drink.instructions}
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
