import React from 'react'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getMealById} from '../api';
import Recipe from '../Components/Recipe/Recipe'

function Meal() {
	const {id} = useParams();
	const [meal, setMeal] = useState([]);
	
	useEffect(() => {
		getMealById(id).then((data) => setMeal(data.meals[0]))
	}, [id])
	console.log(meal, id)

	return (
		<>
			<Recipe item={meal}/>
		</>
	)
}

export default Meal
