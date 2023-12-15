import {useNavigate} from 'react-router-dom';
import './Header.css'

function SignInButton() {
    const navigate = useNavigate();
    navigate('/auth')

return (
    
    <div className='header'>
            <h1>BLOGS</h1>
            <div className='buttons'>
            <button className='sign-in' onClick={SignInButton} >
                Sign In
            </button> 
            <button className='sign-up' >
                Sign Up
            </button>
            </div>
        </div>
    )
}
export default SignInButton;
