import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Redux/slice/CardSlice'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Cart = () => {
  const product = useSelector((state) => state.card)
  const dispatch = useDispatch()

  const heandleRemove = (itemId) => {
    dispatch(remove(itemId))
    toast.warning("Delete Product successfully!");

  }
  return (
    <>
      <div className="container">
        
        <div className="row">

          {
            product.length === 0 ?
              <center> <h1 className='mt-5 text-warning'> PLease Choose Products </h1> </center>
              :
              product.map((item) => (

                <div className="col-lg-3 col-md-4 col-sm-6 mt-5 " key={item.id} >
                  <div className="card" style={{ height: '300px', overflow: "hidden", padding: '15px' }}>
                    <img src={item.image} className="card-img-top" style={{ height: '200px' }} />
                    <div className="card-body">
                      <h5 className="card-title">{item.category}</h5>
                      <p className="card-text">
                        {item.title}
                      </p>
                    </div>
                  </div>
                  <center>
                    <a href="#" className="btn btn-primary mt-2" onClick={() => heandleRemove(item.id)}>Remove</a>
                  </center>
                </div>
              ))
          }


        </div>
      </div>
    </>
  )
}

export default Cart