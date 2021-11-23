import React from 'react'
import {Link} from 'react-router-dom'
import './CategoryItem.css'


function CategoryItem({item}) {
	
	return (
		<div className="cart" key={item.idCategory}>
			<div className="cart-image">
				<img src={item.strCategoryThumb} />
			</div>
			<div className="cart-content">
				<span className="cart-title">{item.strCategory}</span>
				<p >{item.strCategoryDescription.slice(0, 60)}...</p>
			</div>
			<div className="card-action">
				<Link 
					className="btn"
					to={'/category/'+ item.strCategory+'/'}
				>Watch category</Link>
			</div>
		</div>
	)
}

export default CategoryItem
