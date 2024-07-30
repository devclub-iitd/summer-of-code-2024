// src/components/LoginModal.js
import React from 'react';
import styles from './LoginModal.module.css'; // Import CSS module

const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
    if (!isOpen) return null;

    const socialMediaLogos = [
        { name: 'Google', logo: 'icons8-google-48.png', alt: 'Google' },
        { name: 'Facebook', logo: 'icons8-facebook-48.png', alt: 'Facebook' },
        { name: 'Twitter', logo: 'icons8-twitter-48.png', alt: 'Twitter' },
    ];

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <h2>Login</h2>
                <form onSubmit={e => e.preventDefault()} className={styles.formContainer}>
                    <label>
                        Username:
                        <input type="text" placeholder="Username" className={styles.inputField} />
                    </label>
                    <label>
                        Password:
                        <input type="password" placeholder="Password" className={styles.inputField} />
                    </label>
                    <div className={styles.linkRight}>
                        <a href="#" className={styles.link} onClick={e => e.preventDefault()}>Forgot Password?</a>
                    </div>
                    <button type="submit" className={styles.button}>Login</button>
                    <div className={styles.socialMediaButtons}>
                        {socialMediaLogos.map((logoInfo, index) => (
                            <img
                                key={index}
                                src={`/${logoInfo.logo}`}
                                alt={logoInfo.alt}
                                className={styles.logo}
                            />)
                        )}
                    </div>
                    <div>
                    Don't have an account? <span className={styles.link} onClick={() => { onClose(); onSwitchToSignup(); }}>Sign Up</span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;