import { useState } from "react"


export const formWithValidation = (WrappedComponent) => {

    

    const FormWithValidation = (props) =>{
        const [errors, setErrors] = useState({})
        const validateForm = () => {
            let newErrors = {}

            let isValid = true
    
            if (!props.formData.name) {
                newErrors.name = 'The name field is required'
                isValid = false
            }

            if (!props.formData.tel) {
                newErrors.tel = 'The phone field is required'
                isValid = false
            }
    
            if (!props.formData.email) {
                newErrors.email = 'The email field is required'
                isValid = false
            }

            if (props.formData.email !== props.formData.repeatEmail) {
                newErrors.repeatEmail = 'The email fields does not match'
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

