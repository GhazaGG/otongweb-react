import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const[username,setUsername] = useState('');
    const[division, setDivision] = useState()
    const[password,setPassword]= useState('');
    const navigate = useNavigate();

    async function registerUser(ev){
        ev.preventDefault()
        try {
            await axios.post('/register',{
                division,
                username,
                password
            });
            alert("Daftar berhasil coy, sekarang login. 😅😅😅👆")
        } catch (e) {
            alert('Percobaan pendaftaran gagal, silahkan coba lagi nanti')
        }
    }

    return (
        <section>
            <div className="login-container">
                <h1>Register</h1>
                <form action="" onSubmit={registerUser}>
                    <input type="text" placeholder='Division' 
                    value={division} 
                    onChange={ev => setDivision(ev.target.value)} />
                    <input type="text" placeholder='username' 
                    value={username} 
                    onChange={ev => setUsername(ev.target.value)} />
                    <input type="password" placeholder='password' 
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}/>
                    <button>Register</button>
                </form>
                <h3>Sudah daftar? silahkan <a onClick={()=> navigate("/login")}>Login</a></h3>
            </div>
        </section>
    )
}

export default Register