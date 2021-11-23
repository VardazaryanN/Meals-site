import React from "react";
import "./Recipe.css";

import Preloader from "../Preloader/Preloader";
function Recipe({ item }) {
  return (
    <>
      {!item.idMeal ? (
        <Preloader />
      ) : (
        <div className='container'>
          <h1 className="recipe-title">{item.strMeal}</h1>
          <div>
            <div className="recipe-image">
              <img src={item.strMealThumb} />
            </div>
            <div className="recipe-details">
              <h6>Category: {item.strCategory};</h6>
			  {item.strArea ? <h6>Country: {item.strArea}</h6> : null}
              
            </div>
          </div>
          <div className="instructions">
            <p>{item.strInstructions}</p>
          </div>
		<div className="flexible">
			<table className="centered">
				<thead>
				   <tr>
						<th>Ingredient <span> Measure</span></th>
          			</tr>
				</thead>	
				<tbody>
					<tr>
						{
							Object.keys(item).map((key) =>{
								if(key.includes('Ingredient') && item[key]){
									return(
										 <tr key={key}>
											<td>{item[key]}</td>
											<td>{
												item[`strMeasure${key.slice(13)}`]
											}</td>
										</tr>
									)
								}
								return null;
							})
						}
						
					</tr>
				</tbody>
			</table>

		  {item.strYoutube ? 
          <div className="row">
			  <h5>Video recipe</h5>
			  <iframe title={item.idMeal} src={`https://www.youtube.com/embed/${item.strYoutube.slice(-11)}`} />
		  </div> : null
		  }
        </div>

		</div>
			
      )}
    </>
  );
}

export default Recipe;
