import React from 'react';
import {Link} from 'react-router-dom'

import "./MealItem.css"


function MealItem({item}) {
	return (
		<div className="cart" key={item.idMeal}>
			 <div className="cart-image">
				<img src={item.strMealThumb} />
			</div>
			<div className="cart-content">
				<span className="cart-title">{item.strMeal}</span>
			</div>
			<div className="card-action">
				<Link 
					className="btn"
					to={'/meal/'+ item.idMeal+'/'}
				>Watch recipe</Link>
			</div> 
		</div>
	)
}

export default MealItem
