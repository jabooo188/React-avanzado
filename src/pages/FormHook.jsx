import React from 'react'
import logo from '../assets/react.svg'

const FormHook = () => {
  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' className='logo' width='200px' height='200px' />
        <form>
          <label htmlFor='nombre'>Nombre</label>
          <input
            type='text'
            name='nombre'
            placeholder='Tu nombre'
            id='nombre'
          />

          <label htmlFor='apellido'>Apellido</label>
          <input
            type='text'
            name='apellido'
            placeholder='Tu apellido'
            id='apellido'
          />

          <label htmlFor='edad'>Edad</label>
          <input
            type='number'
            name='edad'
            placeholder='Tu edad'
            id='edad'
          />

          <label htmlFor='genero'>Genero</label>
          <select
            name='genero'
            id='genero'
          >
            <option value=''>Elige un genero</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otro</option>
          </select>

          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='email'
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='******'
            id='password'
          />

          <button type='submit'>Iniciar Sesión</button>

        </form>

      </div>
    </div>
  )
}

export default FormHook
