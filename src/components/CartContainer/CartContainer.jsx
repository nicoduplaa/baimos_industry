import { useContext } from 'react';
import './CartContainer.css';
import { CartContext } from '../../context/CartContext';


import { Link } from 'react-router-dom';
import Formu from '../trashcan/Formu/Formu';

const CartContainer = () => {

  const {cartList, eraseCart, removeItem, total, menosCant, masCant} = useContext(CartContext)

  return (
    <div className="CartContainer">
      {

        cartList.length != 0 ?
        
          <div className='cartItemsCont'>
              { cartList.map(prod => (
              
                    <div key={prod.id} className='cartItems'>
                      <img src={prod.img} alt="" />
                      <p>{prod.name}</p>
                      <div className='cantiBoton'>
                        <button onClick={() => menosCant(prod.id)}>-</button>
                        <p>{prod.cantidad}</p>
                        <button onClick={() => masCant(prod.id)}>+</button>
                      </div>
                      <p>U$D {parseFloat(prod.price.replace('U$D','')) * prod.cantidad }</p>

                      <button onClick={() => {removeItem(prod.id)}} className='btn btn-danger'>X</button>

                    </div>
                 

              ))}


                <div className='botCont'>

                      <div className='totalCont'>
                        <h4 className='totalCompra'>TOTAL: U$D {total()}</h4>
                        <button onClick={eraseCart} className='clear btn btn-danger'>CLEAR</button>

                      </div>


                      <Formu />
                </div>


              </div>

              :
              <div className='vacioCont'>

                  <h1 className='vacioTittle'>EMPTY CART</h1>
                  <Link to = '/'>
                      <button className='vacioButt'>KEEP BUYING!</button>
                  </Link>
              </div>

      }
    </div>
  )
}

export default CartContainer