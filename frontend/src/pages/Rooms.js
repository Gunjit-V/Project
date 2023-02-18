import { useNavigate } from "react-router-dom";
import axios from "axios"

const Rooms = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        const roomNumber = event.target.innerText;
        axios
            .post("http://localhost:5000/api/book", {
                roomNumber: roomNumber,
                rollNumber: 196126,
            })
            .then((response) => {
                navigate('/signout')
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const arr = Array.from({ length: 100 }, (_, index) => index + 1 + 1000);

    const listItems = arr.map((number) => (
        <button key={number.toString()} onClick={handleSubmit}>{number}</button>
    ));

    return (
        <div>
            <h1 className="header"> ROOMS </h1>
            {listItems}
        </div>
    );
};

export default Rooms
