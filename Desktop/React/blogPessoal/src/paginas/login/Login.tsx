import { Link } from "react-router-dom"

function Login() {
    return (
        <>
            <Link to="/home" className='link'>
                <h1>Home</h1>
            </Link>
            <h1>Login</h1>
        </>
    )
}

export default Login
