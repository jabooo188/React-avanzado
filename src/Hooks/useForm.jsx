// 1. Custom hook es una funcion que utiliza otros hooks de React
// 2. el nombre de la funcion debe iniciar con la palabra use
// 3. Siempre debe ser una funcion
// 4. Debe ser reutilizable, sin casos especificos
// 5. Debe retornar algo un valor, funcion, array
import { useState } from 'react'

function useForm (callback, defaults) {
  // Estado unico para guardar datos de un formulario
  const [input, setInput] = useState(defaults)
  const handleSubmit = (event) => {
    event.preventDefault()
    callback(input)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    console.log(name, value)
    setInput({ ...input, [name]: value })
  }
  return {
    input,
    handleChange,
    handleSubmit
  }
}

export default useForm
