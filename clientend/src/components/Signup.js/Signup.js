import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { enumUtil } from '../utilities/Enum';
import FormValidator from '../utilities/FormValidator';
import NotificationHandler from '../utilities/Notification';
import { ServerRequestPublic } from '../utilities/ServerRequest';

const Signup = () => {
    const API_URL = process.env.REACT_APP_URL

    let modal = {
        firstName: "",
        lastName: "",
        username: "",
        location: "",
        email: "",
        hash_password: "",
        contactNumber: "",
        pofilePicture: ""
    }
    let valModal = {}
    let validationmodel = {
        firstNameVal: "",
        lastNameVal: "",
        usernameVal: "",
        locationVal: "",
        emailVal: "",
        hash_passwordVal: "",
        validation: false
    }
    const [signupModel, setSignupModel] = useState(modal);
    const [validationModel, setValidationModel] = useState(validationmodel)
    const handleChange = (e) => {
        let { name, value } = e.target;
        let modal = { ...signupModel };
        modal[name] = value
        setSignupModel(modal)
    }

    // validate Modal 
    const Validation = async () => {
        let ValidationModal = {
            firstNameVal: FormValidator(signupModel.firstName, enumUtil.enumValidationType.Required, 'Enter first name'),
            lastNameVal: FormValidator(signupModel.lastName, enumUtil.enumValidationType.Required, 'Enter last name'),
            usernameVal: FormValidator(signupModel.username, enumUtil.enumValidationType.Required, 'Enter user name'),
            emailVal: FormValidator(signupModel.email, enumUtil.enumValidationType.Required, 'Enter email'),
            hash_passwordVal: FormValidator(signupModel.hash_password, enumUtil.enumValidationType.Required, 'Enter password'),
            locationVal: FormValidator(signupModel.location, enumUtil.enumValidationType.Required, 'Enter location'),
        }
        await setValidationModel(ValidationModal)
        valModal = ValidationModal
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await Validation()
        let validation = FormValidator([valModal], enumUtil.enumValidationType.NullCheck)
        if (validation) {
            NotificationHandler('Fill Required Fields', enumUtil.enumtoaster.error)
            return
        } else {
            ServerRequestPublic(API_URL + "/user/addnew", 'post', signupModel)
                .then((response) => {
                    NotificationHandler('Record Saved Successfully!', enumUtil.enumtoaster.success)

                }).catch((error) => {
                    console.log('error', error);
                    NotificationHandler(error.message, enumUtil.enumtoaster.error)
                })
        }
    }
    return (
        <div className="container">
            <div className="row">
                <form className="row g-3 needs-validation">
                    <div className="col-md-4">
                        <label htmlFor="username" className="form-label">User Name</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                            <input
                                type="text"
                                className="form-control"
                                aria-describedby="inputGroupPrepend"
                                id="username"
                                name='username'
                                value={signupModel.username}
                                onChange={handleChange}
                            />
                            {validationModel.usernameVal}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name='firstName'
                            id="firstName"
                            value={signupModel.firstName}
                            onChange={handleChange}
                        />
                        {validationModel.firstNameVal}

                    </div>
                    <div className="col-md-4">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name='lastName'
                            value={signupModel.lastName}
                            onChange={handleChange}
                        />
                        {validationModel.lastNameVal}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input
                            type="text"
                            className="form-control"
                            id="location"
                            name="location"
                            value={signupModel.location}
                            onChange={handleChange}
                        />
                        {validationModel.locationVal}

                    </div>

                    <div className="col-md-4">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={signupModel.email}
                            onChange={handleChange}
                        />
                        {validationModel.emailVal}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="hash_password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="hash_password"
                            name="hash_password"
                            value={signupModel.hash_password}
                            onChange={handleChange}
                        />
                        {validationModel.hash_passwordVal}
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="contactNumber" className="form-label">Phone #</label>
                        <input
                            type="password"
                            className="form-control"
                            id="contactNumber"
                            name="contactNumber"
                            value={signupModel.contactNumber}
                            onChange={handleChange}
                        />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-success" type="submit" onClick={handleSubmit}>Submit form</button>
                        <Link to={"/login"} className="m-3 btn btn-danger">Already a user</Link>

                    </div>
                </form>
            </div>
        </div>
    )
}
export default Signup