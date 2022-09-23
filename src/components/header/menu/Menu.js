import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { routes } from '../../pages/Routes'

const Menu = () => {
	
	return (
		<div>
			<ul className='flex m-8 gap-32'>
				{
					routes.map(({path, name}) => {
						return <li key={path}>
							<Link
								to={path}
								exact='true'
								className='text-xl text-yellow-500'
							>
								{name}
							</Link>
						</li>
					})
				}	
			</ul>
		</div>
	)
}

export default Menu