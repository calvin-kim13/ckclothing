import { message } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    await navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const hide = message.loading("Logging in...", 0);
      setTimeout(hide, 300);

      await signInAuthUserWithEmailAndPassword(email, password);

      await navigate("/");

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          message.error("Incorrect password");
          break;
        case "auth/user-not-found":
          message.error("No user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h1>Sign In</h1>
      <span>Sign in with your email or sign in with google!</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
      <div className="signup-redirect-container">
        <h4>
          Don't have an account? <Link to="/signup">Sign up here!</Link>
        </h4>
      </div>
    </div>
  );
};

export default SignIn;
