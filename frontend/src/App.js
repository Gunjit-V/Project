import "./App.css";
import axios from "axios";

function App() {
  const handleClick = (event) => {
    const roomNumber = event.target.innerText;
    axios.post("http://localhost:5000/user", {
      roomNumber: roomNumber,
      rollNumber: 196126
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.error(err)
      })
  };

  const arr = Array.from({ length: 100 }, (_, index) => index + 1 + 1000);

  const listItems = arr.map((number) => (
    <button onClick={handleClick}>{number}</button>
  ));

  return (
    <div className="App">
      <h1 className="header"> ROOMS </h1>
      {listItems}
    </div>
  );
}

export default App;
