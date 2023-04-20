import { useState } from "react"


export const formWithValidation = (WrappedComponent) => {

    

    const FormWithValidation = (props) =>{
        const [errors, setErrors] = useState({})
        const validateForm = () => {
            let newErrors = {}

            let isValid = true
    
            if (!props.formData.name) {
                newErrors.name = 'El Campo Name es Obligatorio'
                isValid = false
            }
    
            if (!props.formData.email) {
                newErrors.email = 'El Campo E-mail es Obligatorio'
                isValid = false
            }
    
            setErrors(newErrors)
            return isValid
        }

  

        

        return <WrappedComponent 
            {...props}
            errors = {errors}
            validateForm = {validateForm}
        />
    }
    return FormWithValidation
}

