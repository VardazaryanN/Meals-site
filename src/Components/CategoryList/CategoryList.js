import React from 'react'
import CategoryItem from '../CategoriItem/CategoryItem'
import "./CategoryList.css"


function CategoryList({catalog = [] }) {
	return (
		<div className="categories-list">
			<h1 className='categories-title'>All categories</h1>
			
			<div className="items-container">
		{
				catalog.map((el) => {
					return <CategoryItem 
								key={el.idCategory}
								item={el}
							/>
				})
			}
			</div>
			
		</div>
	)
}

export default CategoryList
