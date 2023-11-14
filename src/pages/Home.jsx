import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../Redux/slice/CardSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {

  const [product, setProduct] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetch('https://fakestoreapi.com/products');
      const response = await data.json();
      setProduct(response)
    }
    getProduct();
  }, [])

  const heandleAdd= (item) => {
    dispatch(add(item))
    toast.success("Add product successfully...");

  }

  return (
    <>
      <div className="container">
        <div className="row">

          {
            product.length > 0 &&
            product.map((item)=>(
              
              <div className="col-lg-3 col-md-4 col-sm-6 mt-5 " key={item.id} >
              <div className="card" style={{height : '300px', overflow : "hidden", padding : '15px'}}>
                <img src={item.image}  className="card-img-top" style={{height : '200px'}}/>
                <div className="card-body">
                  <h5 className="card-title">{item.category}</h5>
                  <p className="card-text">
                    {item.title}
                  </p>
                </div>
              </div>
              <center>

                  <a href="#" className="btn btn-primary mt-2" onClick={()=> heandleAdd(item)}>Add to card</a>
              </center>
            </div>
            ))
          }
         

        </div>
      </div>
    </>
  )
}

export default Home