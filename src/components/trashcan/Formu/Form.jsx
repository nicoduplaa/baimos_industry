import { addDoc, collection, getFirestore } from 'firebase/firestore';
import './Formu.css'
import { useContext, useState } from 'react';
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';

const Form = ({formData, handleChange, errors, validateForm, cartList, total}) => {
    const {eraseCart} = useContext(CartContext)

    const [orderPlaced, setOrderPlaced] = useState(false)
    const [orderId , setOrderId] = useState('')

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        if (validateForm()) {
            console.log('enviando', formData)
            const order = {}
            order.buyer = formData
            order.items = cartList.map(({name, id, price, cantidad}) => ({id, name, price, cantidad}))
            order.total = total()
        
            const dbFirestore = getFirestore()
            const ordersCollection = collection(dbFirestore, 'orders')


            const docRef = await addDoc(ordersCollection, order)
            
            setOrderId(docRef.id)

            addDoc(ordersCollection, order)
              .then(resp => console.log(resp))

              setOrderPlaced(true)
        }
        
      
    }


    const handleReset = () => {
        setOrderPlaced(false);
        eraseCart();
    }



  return (
        <section>
            {
                orderPlaced ? 

                <div className='exitoCont'>
                    <h2 className='exito'>PURCHASED!</h2>

                    <h3 className='orderId'>The Order was saved as ID: {orderId}</h3>
                    <Link to={'/'}>
                        <button className='buy btn btn-danger' onClick={handleReset}>GO BACK!</button>
                    </Link>
                </div>

            :
            <>
                <form className='formu' onSubmit={handleSubmit}>
                    
                    <input 
                        type="text" 
                        name='name' 
                        placeholder='Enter your name'
                        onChange={handleChange}
                        value={formData.name}
                    /> 
                        <p className='errorText'>
                            {errors && errors.name && <span>{errors.name}</span>}

                        </p>
                    


                    <input 
                        type="text" 
                        name='tel' 
                        placeholder='Enter your phone'
                        onChange={handleChange}
                        value={formData.tel}
                    />
                        <p className='errorText'>
                            {errors && errors.tel && <span>{errors.tel}</span>}
                        
                        </p>
                    
                    

                    <input 
                        type="text" 
                        name='email' 
                        placeholder='Enter your email'
                        onChange={handleChange}
                        value={formData.email}
                    /> 
                        <p className='errorText'>
                            {errors && errors.email && <span>{errors.email}</span>}
                        
                        </p>

                    
                    <input 
                        type="text" 
                        name='repeatEmail' 
                        placeholder='Repeat your email'
                        onChange={handleChange}
                        value={formData.repeatEmail}
                    /> 
                        <p className='errorText'>
                            {errors && errors.repeatEmail && <span>{errors.repeatEmail}</span>}
                        
                        </p>
                    


                    <button type='submit' className='buy btn btn-danger'>BUY</button>
                </form>
            </>

            }


        </section>
  )
}

export default Form