import React, { useState } from 'react'
import { useAuthContext } from '../../ctx/authContext'

const Login = () => {
    const [data, setData] = useState({})
    const handleLogin = useAuthContext()

    const handleChange = (e) => {
        setData(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="h-[55vh] w-[20vw] rounded-xl bg-gradient-to-r from-[#e9e9e9a8] to-[#e0e0e093]">
                <h2 className="text-center mt-6 text-2xl text-[black]">Login</h2>
                <form className="flex flex-col gap-6 items-center my-10" onSubmit={(e) => handleLogin(e, data)}>
                    <input
                        onChange={handleChange}
                        className="pl-2 rounded-md placeholder:text-[15px]"
                        type="email"
                        name="email"
                        placeholder='Email...'
                    />
                    <input
                        onChange={handleChange}
                        className="pl-2 rounded-md placeholder:text-[15px]"
                        type="password"
                        name="password"
                        placeholder='Password...'
                    />
                    <button className="bg-white text-[black] hover:bg-[orange] px-6 py-2 rounded-xl mt-4">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login