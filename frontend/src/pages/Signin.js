import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
    const [rollNumber, setRollNumber] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:5000/api/signin", {
                rollNumber: rollNumber,
                password: password,
            })
            .then(function (response) {
                navigate("/rooms")
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div>
            <h1>Signin</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Roll Number"
                    type="number"
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                />
                <br />
                <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
};

export default Signin
