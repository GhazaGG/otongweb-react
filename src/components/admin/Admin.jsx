import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../UserContext'
import { useNavigate, useParams } from 'react-router-dom'
import "./admin.css"
import axios from 'axios'

// tutorial after acount page

const Admin = () => {
    const[redirect,setRedirect] = useState(null)
    const {ready,user,setUser} = useContext(UserContext)
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true);
    const [activeView, setActiveView] = useState('member')

    async function logout(){
        await axios.post('/logout')
        setRedirect('/')
    }

    useEffect(() => {
        if (ready) {
            setIsLoading(false);
            if (!user) {
                console.log("Redirecting to login...");
                navigate("/login");
            }
        }
    }, [ready, user, navigate]);

    useEffect(() => {
        if (redirect) {
            navigate("/");
            setRedirect(null)
        }
    }, [redirect, navigate]);

    if (isLoading) {
        return <div>Loading...</div>;
    }


    
    
    return (
        <div className='admin-container'>
            <nav className='admin-nav'>
                <h1 className='user'>Hi {user.username}!</h1>
                    <div className="navlink">
                        <a className={`home ${activeView === 'member' ? 'active' : ''}`} onClick={() => setActiveView('member')}>.12Px Member</a>
                        <a className={`home ${activeView === 'artwork' ? 'active' : ''}`} onClick={() => setActiveView('artwork')}>.12Px Artwork</a>
                    </div>
                <button onClick={logout} className='logout'>Logout</button>
            </nav>

            <div className="admin-content">
                    {activeView === 'member' &&(
                        <div className="admin-member-container">
                            member
                        </div>
                    )}

                    {activeView === 'artwork'&&(
                        <div className="artwork-container">
                            artwork
                        </div>
                    )}
            </div>

        </div>
    )
}

export default Admin