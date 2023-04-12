import React, { useState } from 'react'
import Link from 'next/link'
import { useAuthContext } from '../../ctx/authContext'

const Register = () => {
    const [data, setData] = useState({})
    const {handleRegister} = useAuthContext()

    const handleChange = (e) => {
        setData(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <div className="h-[60vh] w-[20vw] rounded-xl bg-gradient-to-r from-[#e9e9e9a8] to-[#e0e0e093]">
                <h2 className="text-center mt-6 text-2xl text-[black]" > Register</h2>
                <form onSubmit={(e) => handleRegister(e, data)} className="flex flex-col gap-6 items-center my-10">
                    <input
                        className="pl-2 rounded-md placeholder:text-[15px] "
                        onChange={handleChange}
                        type="text"
                        name="username"
                        placeholder='Username'
                    />
                    <input
                        className="pl-2 rounded-md placeholder:text-[15px] "
                        onChange={handleChange}
                        type="email"
                        name="email"
                        placeholder='Email'
                    />
                    <input
                        className="pl-2 rounded-md placeholder:text-[15px] "
                        onChange={handleChange}
                        type="password"
                        name="password"
                        placeholder='Password'
                    />
                    <button className="bg-white text-[black] hover:bg-[orange] px-6 py-2 rounded-xl mt-4">Register</button>

                    <Link href='/login'>
                        <li className="bg-white text-[black] hover:bg-[orange] px-6 py-2 rounded-xl">
                            Login
                        </li>
                    </Link>

                </form>
            </div>
        </div>
    )
}

export default Register