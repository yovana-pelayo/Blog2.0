
import './Header.css'


function Header () {

    return (

        <div className='header'>
            <h1>BLOGS</h1>
            <div className='buttons'>
            <button className='sign-in' >
                Sign In
            </button> 
            <button className='sign-up'>
                Sign Up
            </button>
            </div>
        </div>
    )
}
export default Header;