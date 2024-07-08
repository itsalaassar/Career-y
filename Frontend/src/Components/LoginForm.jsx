import { useState } from "react";
import { httpPost } from "../axios/axiosUtils";
import Logo from "../../images/Logo4.png"
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await httpPost("Auth/SignIn", {
        Email: email,
        Password: password,
      });
      sessionStorage.setItem(
        "session",
        JSON.stringify({
          id: response.updatedUserNode._id,
          token: response.updatedUserNode.token,
        })
      );
      setEmail("");
      setPassword("");
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <div className="logo-container">
          <div className="logo">
            <img src={Logo} alt="Logo" className="logo-image" />
          </div>
          <p
            style={{
              color: "rgba(5, 122, 141, 1)",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            CAREER<span style={{ color: "rgba(241, 193, 17, 1)" }}>-</span>Y
          </p>
        </div>
        <input
          className="signin-input"
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
        <input
          className="signin-input"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
        <p>
          {"Forgot your password? "}
          <a
            href="/reset-password"
            style={{ color: "rgba(241, 193, 17, 1)", textDecoration: "none" }}
          >
            Reset Password
          </a>
        </p>
        <button type="submit">Sign In</button>
        <p>
          {"Don't have an account? "}
          <a
            href="/sign-up"
            style={{ color: "rgba(241, 193, 17, 1)", textDecoration: "none" }}
          >
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
