import './Auth.css'


function Auth () {

return (
<form >
    <label >
        Email
        <input type='text' name='email' />
    </label>
    <label >
Password       
     <input type='text' name='password' />
    </label>
    <input type='submit' value='submit'/>

</form>
)
}
export default Auth;