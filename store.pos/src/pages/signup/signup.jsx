
import { useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import './signup.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// import {LoginPage} from './login';


const SignupPage = () => {

    const navigate = useNavigate();
    const usernameInputRef = useRef(null); // Create a ref for the username input
    const passwordInputRef = useRef(null); // Create a ref for the username input
    const [active, setActive] = useState(false);
    const [activePopup, setActivePopup] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const handleBtnPopupClick = () => {
        setActivePopup(true);
    };

    const handleCloseIconClick = () => {
        setActivePopup(false);
        setShowSignup(false);
    };

    const handleLoginLinkClick = () => {
        setActive(false);
        // navigate('/login');
    };

    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Authentication logic here...
        const toastId = toast.loading('Logging in...');

        const username = usernameInputRef.current.value;
        const password = passwordInputRef.current.value;
        axios.get(`/staff/login`, {
            params: {
                username: username,
                password: password
            }
        }).then((response) => {
            if (response.data) {
                localStorage.setItem('token', response.data.token)
                axios.defaults.headers['Authorization'] = `Bearer ${response.data.token}`
                toast.success('Login successful!', { id: toastId })
                const role = response.data.is_admin ? 'admin' : 'cashier';
                navigate(`/${role}`)
            }
            else
                toast.error('An error occurred', { id: toastId })
        }).catch((error) => {
            if (error?.response?.data?.error?.length > 0) {
                toast.error(error.response.data.error, { id: toastId })
            } else
                toast.error('An error occurred', { id: toastId })
        })
    };

    return (<>
        <header>
            <div className="logo">
                <img src="store.pos\src\images\Screenshot 2024-06-25 222043.png" alt="Logo" />
            </div>
            <nav className="nav-bar">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Service</a>
                <a href="#">Contact</a>
                <button className="btnlogin" onClick={handleBtnPopupClick}>Login</button>
            </nav>
        </header>
        {showSignup && (
            <>
                <div className={`container  ${showSignup ? 'active-popup' : ''}`}>
                    <Icon icon="close" className="close-icon" onClick={handleCloseIconClick} />
                    <div className="form-box register">
                        <h3 style={{ textAlign: 'center', fontSize: '2em', color: 'black' }}>Sign-Up</h3>
                        <form action="#" onSubmit={handleSubmit}>
                            <div className="input-box box1">
                                <span className="icon"><Icon icon="call" /></span>
                                <input type="tel" minlength="10" maxlength="10" required onChange={(e) => setMobileNumber(e.target.value)} />
                                <label>Mobile number</label>
                            </div>
                            <div className="input-box box1">
                                <span className="icon"><Icon icon="mail" /></span>
                                <input type="email" required onChange={(e) => setEmail(e.target.value)} />
                                <label>Email</label>
                            </div>
                            <div className="input-box box1">
                                <span className="icon"><Icon icon="lock-closed" /></span>
                                <input type="password" required onChange={(e) => setPassword(e.target.value)} />
                                <label>Password</label>
                            </div>
                            <div className="checklist input-box">
                                <select name="user_type" style={{ width: '100%' }}>
                                    <option value="user">user</option>
                                    <option value="admin">admin</option>
                                </select>
                            </div>
                            <div className="rem-forgot">
                                <label style={{ width: '100%' }}><input type="checkbox" id="mycheck" />Agree to the terms & conditions</label>
                            </div>
                            <div>
                                <button type="submit" className="btn">Sign-Up</button>
                            </div>
                            <div className="login-reg">
                                <p>Already have an account? <a href='#' onClick={handleLoginLinkClick}>Login</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
        }
    </>
    )
}

export default SignupPage