import { useNavigate } from "react-router-dom"


const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="Home">
            <h1>
                Home Page
            </h1>
            <br></br>
            <button onClick={() => { navigate('/signin') }}> Sign in</button >
            <br />
            <button onClick={() => navigate('/signup')}> Sign up</button>

        </div >
    )
}

export default Home