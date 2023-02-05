import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { enumUtil } from '../utilities/Enum'
import FormValidator from '../utilities/FormValidator'
import NotificationHandler from '../utilities/Notification'
import { ServerRequestPublic } from '../utilities/ServerRequest'
const Login = () => {
    let navigate = useNavigate()
    const API_URL = process.env.REACT_APP_URL

    let model = { email: "", hash_password: "" };
    let valModal = {}
    const [loginModel, setLoginModel] = useState(model)
    const [validationModel, setValidationModel] = useState({ emailVal: "", passwordVal: "" })

    const handleChange = (e) => {
        let { name, value } = e.target;
        let modal = { ...loginModel };
        modal[name] = value
        setLoginModel(modal)
    }
    // validate Modal 
    const Validation = async () => {
        let ValidationModal = {
            emailVal: FormValidator(loginModel.email, enumUtil.enumValidationType.Required, 'Enter email'),
            passwordVal: FormValidator(loginModel.hash_password, enumUtil.enumValidationType.Required, 'Enter password'),
        }
        await setValidationModel(ValidationModal)
        valModal = ValidationModal
    }
    const handleLogin = async (e) => {
        await Validation()
        let validation = FormValidator([valModal], enumUtil.enumValidationType.NullCheck)
        if (validation) {
            NotificationHandler('Fill Required Fields', enumUtil.enumtoaster.error)
            return
        } else {
            ServerRequestPublic(API_URL + "/user/login", 'post', loginModel)
                .then((response) => {
                    navigate("/")

                }).catch((error) => {
                    console.log('error', error);
                    NotificationHandler(error.message, enumUtil.enumtoaster.error)
                })
        }
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        name='email'
                        value={loginModel.email}
                        onChange={handleChange}
                    />
                    {validationModel.emailVal}
                </div>
                <div className="mb-3">
                    <label htmlFor="hash_password" className="form-label">Password</label>
                    <input type="password"
                        className="form-control"
                        id="hash_password"
                        name='hash_password'
                        value={loginModel.hash_password}
                        onChange={handleChange}
                    />
                    {validationModel.passwordVal}
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button>
            </div>
        </div >
    )
}
export default Login