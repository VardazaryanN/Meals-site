import React from 'react'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getFilteredCategory} from '../api';
import MealsList from '../Components/MealsList/MealsList';
import Preloader from '../Components/Preloader/Preloader'


function Category() {
	const {name} = useParams();
	const [meals, setMeals] = useState([]);

	
	useEffect(() => {
		getFilteredCategory(name).then((data) => setMeals(data.meals))
	}, [name])
	
	
	return (
		<>
			<h2 className="meals-list-title" >Meals:</h2>
			
			<div>
				{
					!meals.length ? <Preloader /> :
					<MealsList meals={meals}/>
				}
			</div>
		</>
	)
}

export default Category
