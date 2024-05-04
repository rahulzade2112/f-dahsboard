import React from 'react'
import signupbg from "../../assets/signup-img.jpg"
import './signup.css'
const Signup = () => {
  return (
    <div>
        
            <div className="signup-content">
                <div style={{position:"relative"}} className="signup-img">
                    <img className='reg-bg 'src={signupbg} alt="signback"/>
                </div>
                <div className="signup-form">
                    <form className="register-form" id="register-form">
                        <h2 className='reg-header'>  Register for Admin</h2>
                        <div className="form-row">
                            <div className="form-group">
                                <label id='label' for="name">Full Name :</label>
                                <input className='input-filed fullname' type="text" name="name" id="name" required/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label id='label' for="address">Address :</label>
                            <input className='input-filed' type="text" name="address" id="address" required/>
                        </div>
                        <div className="form-radio">
                            <label id='label' for="gender" className="radio-label">Gender:</label>
                            <div className="form-radio-item">
                                <input className='input-filed' type="radio" name="gender" id="male" checked/>
                                <label id='label' for="male">Male</label>
                                <span className="check"></span>
                            </div>
                            <div className="form-radio-item">
                                <input className='input-filed' type="radio" name="gender" id="female"/>
                                <label id='label' for="female">Female</label>
                                <span className="check"></span>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label id='label' for="state">State :</label>
                                <input className='input-filed' />

                            </div>
                            <div className="form-group">
                                <label id='label' for="city">City :</label>
                                <input className='input-filed' />

                            </div>
                        </div>
                        <div className="form-group">
                            <label id='label' for="birth_date">DOB :</label>
                            <input className='input-filed' type="text" name="birth_date" id="birth_date"/>
                        </div>
                        <div className="form-group">
                            <label id='label' for="pincode">Pincode :</label>
                            <input className='input-filed' type="text" name="pincode" id="pincode"/>
                        </div>
                        
                        <div className="form-group">
                            <label id='label' for="email">Email ID :</label>
                            <input className='input-filed' type="email" name="email" id="email" />
                        </div>
                        <div className="form-submit">
                            <input className='input-filed submit-btn' type="submit" value="Reset All"  name="reset" id="reset" />
                            <input className='input-filed submit-btn' type="submit" value="Submit Form"  name="submit" id="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Signup
