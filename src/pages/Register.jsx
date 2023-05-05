import React from 'react'
import { useForm } from 'react-hook-form'
import useAuthentication from '../hooks/useAuthentication'
import defaultRegisterValues from '../utils/defaultRegisterValues'

const Register = () => {

    const { register, handleSubmit,} = useForm()

    const { createNewUser} = useAuthentication()
    const sumit = data => {
        createNewUser(data)
        reset(defaultRegisterValues)
    }
  return (
    <form onSubmit={handleSubmit(sumit)}>
        <h1>Create a new User</h1>
        <div>
            <label htmlFor="firstName">First Name</label>
            <input {...register("firstName")} type="text" id='firsName' />
        </div>

        <div>
            <label htmlFor="lastName">Last Name</label>
            <input {...register("lastName")} type="text" id='lastName' />
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <input {...register("email")} type="email" id='email' />
        </div>

        <div>
            <label htmlFor="password">Passoword</label>
            <input {...register("password")} type="password" id='password' />
        </div>

        <div>
            <label htmlFor="phone">Phone</label>
            <input {...register("phone")} type="number" id='phone' />
        </div>
        <button>Register</button>
    </form>
  )
}

export default Register