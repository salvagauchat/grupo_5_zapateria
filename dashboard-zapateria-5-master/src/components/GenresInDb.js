import React, { useState, useEffect } from 'react';

function GenresInDb() {

  const [totalBrands, setTotalBrands] = useState({})

  const [totalProducts, setTotalProducts] = useState({})

  useEffect(() => {
     fetch('http://localhost:3001/api/products')
      .then(response => response.json())
      .then((data) => {
        //console.log(data);
        let total = data.countByBrand
        setTotalBrands(total)
      })

      .catch(error => (error))

   fetch('http://localhost:3001/api/brand')
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        let total = data.brand
        setTotalProducts(total)
      })

      .catch(error => (error))
  }, [])


  return (
    <div className="col-lg-6 mb-4 ">
      <div className="card shadow mb-4 ">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Productos por marca
          </h5>


        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4 d-flex p-2">
              <div className="card bg-dark text-white shadow">
                {totalProducts.length > 0 && totalProducts.map((brand) => {
                  return (
                    <div className="card-body"> {brand.name}</div>
                  )
                })}
              </div>

             
              <div className="card bg-dark text-white shadow">
    
                    <div className="card-body"> {totalBrands.Nike}</div>
                    <div className="card-body"> {totalBrands.Adidas}</div>
                    <div className="card-body"> {totalBrands.Topper}</div>
                    <div className="card-body"> {totalBrands.Puma}</div>
                    <div className="card-body"> {totalBrands.Asics}</div>
                    <div className="card-body"> {totalBrands.Reebok}</div>
              </div>
            
              
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
