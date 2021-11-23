import React from 'react'
import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {getAllCategories} from '../api';
import CategoryList from '../Components/CategoryList/CategoryList'

function Home() {
	const [catalog, setCatalog] = useState([]);
	const {pathname, search} = useLocation()
	
	useEffect(() => {
		getAllCategories().then((data) =>{
			setCatalog(data.categories);
		})
	}, [])
	
	return (
		<>
			
			<CategoryList catalog={catalog} />
		</>
	)
}

export default Home
