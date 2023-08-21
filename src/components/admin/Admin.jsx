import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../UserContext'
import MemberList from '../artist/MemberList'
import { useNavigate, useParams } from 'react-router-dom'
import Artwork from './Artwork'
import "./admin.css"
import axios from 'axios'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBrush, BiLogOut} from 'react-icons/bi'


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
            <section>
                <div className='admin-container'>
                    <aside className='admin-nav'>
                        <h1 className='user'>Hi {user.username}!</h1>
                        <div className="sidebar">
                            <a className={`home ${activeView === 'member' ? 'active' : ''}`} onClick={() => setActiveView('member')}>
                                <AiOutlineUser />
                                Member
                            </a>
                            <a className={`home ${activeView === 'artwork' ? 'active' : ''}`} onClick={() => setActiveView('artwork')}>
                                <BiBrush />
                                Artwork
                            </a>
                            <a onClick={logout} className='logout'>
                                <BiLogOut />
                                Logout
                            </a>
                        </div>
                    </aside>

                    <div className="admin-content">
                            {activeView === 'member' &&(
                                <div className="admin-member-container">
                                    <MemberList />
                                </div>
                            )}

                            {activeView === 'artwork'&&(
                                <Artwork />
                            )}
                    </div>

                </div>
            </section>

    )
}

export default Admin