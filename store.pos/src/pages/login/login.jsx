
import { useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import './login.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// import './signup'; // Adjust the path as necessary

const LoginPage = () => {

    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const [activePopup, setActivePopup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleBtnPopupClick = () => {
        setActivePopup(true);
    };

    const handleCloseIconClick = () => {
        setActivePopup(false);
        setShowLogin(false);
    };

    const handleRegistrationLinkClick = () => {
        setActive(true);
        // navigate('/signup');
        };

    const usernameInputRef = useRef(null); // Create a ref for the username input
    const passwordInputRef = useRef(null); // Create a ref for the username input

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
            else{
                toast.error('An error occurred', { id: toastId })}
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
        <div className={`container ${showLogin ? 'active-popup' : ''}`}>
                { activePopup && (
                <>
                    <Icon icon="close" className="close-icon" onClick={handleCloseIconClick} />
                    <div className="form-box login">
                        <h3 style={{ textAlign: 'center', fontSize: '2em', color: 'black' }}>Login</h3>
                        <form action="#" onSubmit={handleSubmit}>
                            <div className="input-box box1">
                                <span className="icon"><Icon icon="person" /></span>
                                <input type="text" id="username-log" required />
                                <label>Username</label>
                            </div>
                            <div className="input-box box1">
                                <span className="icon"><Icon icon="lock-closed" /></span>
                                <input type="password" id="password-log" required />
                                <label>Password</label>
                            </div>
                            <div className="rem-forgot">
                                <label><input type="checkbox" />Remember me</label>
                                <a href="#" >Forgot Password?</a>
                            </div>
                            <div>
                                <button type="submit" className="btn">Login</button>
                            </div>
                            <div>
                                <p style="text-align: center;font-size: 0.9rem;margin-top:10px">or continue with</p>
                            </div>
                            <div class="login-boxes">
                                <button type="submit" class="google">
                                    <img src="images\icons8-google-48.png" />
                                </button>
                                <button type="submit" class="facebook">
                                    <img src="images\icons8-facebook-48.png" />
                                </button>
                                <button type="submit" class="twitter">
                                    <img src="images\icons8-twitter-48.png" />
                                </button>
                            </div>
                            <div class="login-reg">
                                <p> Do not have an account? <a href='#' class="registration-link" onClick={handleRegistrationLinkClick}>Sign-up</a></p>
                            </div>
                        </form>
                    </div>
                </>
            )
        }
        </div >
    </>
    )
}

export default LoginPage