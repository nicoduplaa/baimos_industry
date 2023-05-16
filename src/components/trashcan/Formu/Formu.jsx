import { useContext, useState } from 'react'
import './Formu.css'
import Form from './Form'
import { formWithValidation } from './formWithValidation'
import { CartContext } from '../../../context/CartContext'



const FormWithValidation = formWithValidation(Form)

const Formu = () => {

    const {cartList, total} = useContext(CartContext)

    const [formData, setFormData] = useState({
        name: '',
        tel:'',
        email: '',
        repeatEmail: ''
    })


    const handleChange = (evt) => {
  
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

  return <FormWithValidation formData={formData} handleChange={handleChange} total={total} cartList={cartList} />
}

export default Formu