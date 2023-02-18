import axios from "axios";

const Signout = () => {

    axios.get("http://localhost:5000/signout")
    return (
        <div>
            <h1>Signed out</h1>
        </div>
    )
}

export default Signout