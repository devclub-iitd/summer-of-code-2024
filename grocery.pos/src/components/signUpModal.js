// src/components/SignupModal.js
import React, { useState } from 'react';
import styles from './signUpModal.module.css'; // Ensure you have corresponding CSS module

const SignupModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        mobileNumber: '',
        email: '',
        password: '',
        userType: 'cashier', // Default selection
        agreeTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Basic validation
        if (!formData.mobileNumber || !formData.email || !formData.password || !formData.agreeTerms) {
            alert('Please fill all fields and agree to terms.');
            return;
        }
        console.log(formData);
        // Optionally reset form data after submission
        setFormData({
            mobileNumber: '',
            email: '',
            password: '',
            userType: 'cashier',
            agreeTerms: false,
        });

        try {
            const response = await fetch('/api/register', { // Adjust URL to your backend endpoint
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (result.success) {
                alert('Signup successful!');
                onClose(); // Close modal on success
            } else {
                alert(result.message); // Display error message from backend
            }
        } catch (error) {
            console.error('Error during signup:', error);
            alert('Failed to sign up. Please try again later.');
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit} className={styles.formContainer}>
                    <label>
                        Mobile Number:
                        <input
                            type="tel"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            required
                            minLength="10"
                            maxLength="10"
                            pattern="\d{10}"
                            title="Please enter exactly 10 digits"
                            placeholder="Mobile Number"
                            className={styles.inputField}
                        />
                    </label>
                    <label>
                        Email:        
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Email"
                            className={styles.inputField}
                        />
                    </label>
                    <label>
                        Password:          
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="Password"
                            className={styles.inputField}
                        />
                    </label>
                    <div>
                        User Type:
                        <label>
                            <input
                                type="radio"
                                value="cashier"
                                checked={formData.userType === 'cashier'}
                                onChange={handleChange}
                                name="userType"
                            /> Cashier
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="admin"
                                onChange={handleChange}
                                name="userType"
                            /> Admin
                        </label>
                    </div>
                    <div className={styles.checklist}>
                        <label>
                            <input
                                type="checkbox"
                                name="agreeTerms"
                                checked={formData.agreeTerms}
                                onChange={handleChange}
                                required
                            /> Agree to Terms & Conditions
                        </label>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignupModal;