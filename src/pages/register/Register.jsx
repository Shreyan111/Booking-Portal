import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterAuthContext } from "../../context/RegisterAuthContext";
import "./register.css";

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
        email: undefined,
        country: undefined,
        city: undefined,
        phone: undefined
    });

    const { loading, error, dispatch } = useContext(RegisterAuthContext);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "REGISTER_START" });
        try {
            const res = await axios.post("/auth/register", credentials);
            dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
            navigate("/login");
        } catch (err) {
            dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
        }
    };

    return (
        <div className="login">
            <div className="lContainer">
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="email"
                    placeholder="email"
                    id="email"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="text"
                    placeholder="country"
                    id="country"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="text"
                    placeholder="city"
                    id="city"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="phone"
                    placeholder="phone"
                    id="phone"
                    onChange={handleChange}
                    className="lInput"
                />
                <button disabled={loading} onClick={handleClick} className="lButton">
                    Register
                </button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    );
};

export default Register;