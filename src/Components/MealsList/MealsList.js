import React from 'react'
import MealItem from '../MealItem/MealItem'
import "./MealsList.css";



function MealsList({meals}) {
	
	return (
		<div className="meals-list">
			<div className="items-container">
			{
				meals.map((meal) => {
					return	<MealItem key={meal.idMeal} 
							  item={meal}
					/>
				})
			}
			</div>
			
		</div>
	)
}

export default MealsList
