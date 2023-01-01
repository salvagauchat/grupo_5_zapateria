import React, { useEffect, useState } from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowMovies from './ContentRowMovies';
import Chart from './Chart';







function ContentRowTop() {

	const [totalProducts, setTotalProducts] = useState({})

	const [allUsers, setAllUsers] = useState({})


	

	useEffect(() => {
		
		fetch('http://localhost:3001/api/products')
			.then(response => response.json())
			.then((data) => {
				
                let total = data.products
                setTotalProducts(total)
            })
            
			.catch(error => (error))
		fetch('http://localhost:3001/api/users')
			.then(response => response.json())
			.then((data) => {
				let user = data.users
				setAllUsers(user)
			})

			.catch(error => (error))
	}, [])

	return (
		<React.Fragment>
			{/*<!-- Content Row Top -->*/}
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">FiveGroup</h1>
				</div>

				{/*<!-- Content Row Movies-->*/}
				<ContentRowMovies products = {totalProducts} users={allUsers} />
				<ContentRowCenter />
				<Chart />

			</div>
			{/*<!--End Content Row Top-->*/}

		</React.Fragment>
	)

}
export default ContentRowTop;