import React, { useContext, useState } from "react";
import Errors from "./Errors";
import UserContext from "./UserContext";
import "./ProfileForm.css";

/** Renders edit profile form
 *
 * props: updateUser fn
 * state: formData, isSuccessful, errors
 *
 * Routes -> ProfileForm
 *
 */

function ProfileForm({ editUser }) {
  const { currUser } = useContext(UserContext);

  const initialState = { ...currUser, password: "" };

  const [formData, setFormData] = useState(initialState);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [errors, setErrors] = useState(null);

  console.log("ProfileForm", { formData });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((formData) => ({ ...formData, [name]: value.trim() }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      await editUser(formData);
      setIsSuccessful(true);
      setFormData({ ...formData, password: "" });
      setErrors(null);
    } catch (err) {
      console.log("error", { err });
      setErrors(err);
    }
  }

  return (
    <div className="ProfileForm col-md-6 col-lg-4 offset-md-3 offset-lg-4">
      <h3>Profile</h3>
      <div className="ProfileForm-card card">
        <div className="card-body">
          <form className="ProfileForm-Form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                name="username"
                className="form-control"
                value={formData.username}
                onChange={handleChange}
                disabled
              />
            </div>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                name="firstName"
                className="form-control"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                name="lastName"
                className="form-control"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                name="email"
                className="form-control"
                type="text"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                name="password"
                className="form-control"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {errors && <Errors errors={errors} />}
            {isSuccessful && <p className="text-center alert alert-success">Updated profile successfully!</p>}

            <button className="ProfileForm btn btn-primary"> Update! </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;
