import React from 'react'
import signupbg from "../../assets/signup-img.jpg"
import './signup.css'
const Signup = () => {
  return (
    <div>
        
            <div className="signup-content">
                <div className="signup-img">
                    <img src={signupbg} alt="signback"/>
                </div>
                <div className="signup-form">
                    <form method="POST" className="register-form" id="register-form">
                        <h2>  Register for Admin</h2>
                        <div className="form-row">
                            <div className="form-group">
                                <label for="name">Full Name :</label>
                                <input  type="text" name="name" id="name" required/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="address">Address :</label>
                            <input type="text" name="address" id="address" required/>
                        </div>
                        <div className="form-radio">
                            <label for="gender" className="radio-label">Gender:</label>
                            <div className="form-radio-item">
                                <input type="radio" name="gender" id="male" checked/>
                                <label for="male">Male</label>
                                <span className="check"></span>
                            </div>
                            <div className="form-radio-item">
                                <input type="radio" name="gender" id="female"/>
                                <label for="female">Female</label>
                                <span className="check"></span>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label for="state">State :</label>
                                <input />

                            </div>
                            <div className="form-group">
                                <label for="city">City :</label>
                                <input />

                            </div>
                        </div>
                        <div className="form-group">
                            <label for="birth_date">DOB :</label>
                            <input type="text" name="birth_date" id="birth_date"/>
                        </div>
                        <div className="form-group">
                            <label for="pincode">Pincode :</label>
                            <input type="text" name="pincode" id="pincode"/>
                        </div>
                        
                        <div className="form-group">
                            <label for="email">Email ID :</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="form-submit">
                            <input type="submit" value="Reset All" className="submit" name="reset" id="reset" />
                            <input type="submit" value="Submit Form" className="submit" name="submit" id="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Signup
