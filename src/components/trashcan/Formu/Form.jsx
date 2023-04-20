

const Form = ({formData, handleChange, errors, validateForm}) => {

    const handleSubmit = (evt) => {
        evt.preventDefault()
        if (validateForm()) {
            console.log('enviando', formData)
        }

      
    }



  return (
    <section>
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            name='name' 
            placeholder='Ingrese el Nombre'
            onChange={handleChange}
            value={formData.name}
        /> <br />
        {errors && errors.name && <span>{errors.name}</span>}
        <br />
        

        <input 
            type="text" 
            name='email' 
            placeholder='Ingrese el E-mail'
            onChange={handleChange}
            value={formData.email}
        /> <br />
        {errors && errors.email && <span>{errors.email}</span>}
        <br />


        <button>Enviar</button>
    </form>
</section>
  )
}

export default Form