import { useState } from 'react'
import './Formu.css'
import Form from './Form'
import { formWithValidation } from './formWithValidation'



const FormWithValidation = formWithValidation(Form)

const Formu = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '    '
    })


    const handleChange = (evt) => {
  
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

  return <FormWithValidation formData={formData} handleChange={handleChange} />
}

export default Formu