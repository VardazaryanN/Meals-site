import {API_URL} from "./config"

//all categories
const getAllCategories = async()=> {
	const response = await fetch(API_URL + 'categories.php');
	return response.json();
}

//one category
const getFilteredCategory = async(catName)=>{
	const response = await fetch(API_URL + 'filter.php?c='+ catName);
	return response.json();
}

//one meal from filtered category
const getMealById = async (id)=>{
	const response = await fetch(API_URL + 'lookup.php?i=' + id);
	return response.json();
}

export {getAllCategories, getFilteredCategory, getMealById};