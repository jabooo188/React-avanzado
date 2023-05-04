import logo from '../assets/react.svg'
import { useState } from 'react'

const SimpleForm = () => {
  // crear estados para el formulario
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    const sudmittedData = JSON.stringify({
      email,
      password
    })
    console.log(sudmittedData)
  }

  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        <form onSubmit={handleSubmit}>
          {/* Paso 3: Guardo cada cambio del input en su estado */}
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='email'
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='******'
            id='password'
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type='submit'>
            Iniciar Sesión
          </button>

        </form>

      </div>
    </div>
  )
}

export default SimpleForm
