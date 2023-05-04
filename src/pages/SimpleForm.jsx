import React from 'react'
import logo from '../assets/react.svg'

const SimpleForm = () => {
  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        <form>
          {/* Paso 3: Guardo cada cambio del input en su estado */}
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='email'
            onChange={() => {}}
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='******'
            id='password'
            onChange={() => {}}
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
