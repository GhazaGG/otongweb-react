import React, { useContext, useState,useEffect } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../UserContext';

const Login = () => {
    const[username,setUsername] = useState('');
    const[password,setPassword]= useState('');
    const navigate = useNavigate()
    const[redirect, setRedirect] = useState(false)
    const {setUser} = useContext(UserContext)
    async function handleLoginSubmit(ev){
        ev.preventDefault()
        try {
            const {data} = await axios.post('/login', {username, password})
            setUser(data)
            alert('Login berhasil')
            setRedirect(true)
        } catch (e) {
            alert('Login gagal')
        }
    }

    useEffect(() => {
        if (redirect) {
            navigate("/admin");
        }
    }, [redirect, navigate]);
    

    return (
        <section>
            <div className="login-container">
                <h1>LOGIN</h1>
                <form action="" onSubmit={handleLoginSubmit}>
                    <input type="text" placeholder='username' 
                    value={username} 
                    onChange={ev => setUsername(ev.target.value)} />
                    <input type="password" placeholder='password' 
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}/>
                    <button>LOGIN</button>
                </form>
                <h3>Silahkan Daftar terlebih dahulu <a onClick={()=> navigate("/register")}>Daftar</a></h3>
            </div>
        </section>
    )
}

export default Login