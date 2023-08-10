import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../UserContext'
import { useNavigate, useParams } from 'react-router-dom'
import "./admin.css"

const Admin = () => {
    const {ready,user} = useContext(UserContext)
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true);
    const [activeView, setActiveView] = useState('member')

    useEffect(() => {
        if (ready) {
            setIsLoading(false);
            if (!user) {
                console.log("Redirecting to login...");
                navigate("/login");
            }
        }
    }, [ready, user, navigate]);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className='admin-container'>
            <nav className='admin-nav'>
                <a className={`home ${activeView === 'member' ? 'active' : ''}`} onClick={() => setActiveView('member')}>.12Px Member</a>
                <a className={`home ${activeView === 'artwork' ? 'active' : ''}`} onClick={() => setActiveView('artwork')}>.12Px Artwork</a>
                <button className='logout'>Logout</button>
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