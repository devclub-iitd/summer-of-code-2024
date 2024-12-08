// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLoginModal}) => {
    return (
        <nav style={{
            backgroundColor: '#333',
            color: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            position: 'fixed',
            width: '100%',
            zIndex: '100',
            height: '30px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/logo.ico" alt="Logo" style={{ height: '25px', marginRight: '10px' }} />
                <span>Grocery POS</span>
            </div>
            <div style={{
                display:'flex',
                alignItems:'center',
                justifyContent: 'space-around',
            }}>
                <Link to="/about" style={{ textDecoration: 'none', color: 'inherit', marginRight: '10px' }}>About</Link>
                <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact               </Link>
                <Link to="/login" >
                    <button onClick={()=>setShowLoginModal(true)} style={{
                        backgroundColor: ' rgba(235, 188, 188, 0.9)',
                        color: '#000',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '5px 10px',
                        marginTop: '5px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        marginLeft:'10px',
                        marginRight:'20px',
                    }}>Login</button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;