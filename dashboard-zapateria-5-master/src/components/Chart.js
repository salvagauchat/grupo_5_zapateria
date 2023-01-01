import React, { useEffect, useState } from 'react';



function Chart() {

    const [totalProducts, setTotalProducts] = useState({})

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
            .then(response => response.json())
            .then((data) => {
                //console.log(data);
                let total = data.products
                setTotalProducts(total)
            })

            .catch(error => (error))
    }, [])
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <h4>Listado de productos</h4>
                            <tr>
                                <th>Producto</th>
                                <th>Genero</th>
                                <th>Marca</th>
                                <th>Precio</th>
                                <th>Detalle</th>

                            </tr>
                        </thead>

                        {totalProducts.length > 0 && totalProducts.map((product) => {
                            return (
                                <>

                                    <tr>
                                        <th>{product.name}</th>
                                        <th>{product.gender.name}</th>
                                        <th>{product.brands.name}</th>
                                        <th>{product.price}</th>
                                        <th><button class="btn btn-secundary">
                                            <a href={product.idDetalle}><span class="button_top"> Detalle
                                            </span></a>
                                        </button>
                                        </th>
                                    </tr>
                                </>
                            )
                        })}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Chart;