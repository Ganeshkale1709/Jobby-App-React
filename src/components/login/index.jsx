import { useState } from 'react';
// import Jobs from '../jobs';
import './index.css';

const Login = () => {

    const [allValues , setValues] = useState({
        username : "",
        password : "",
        showErrorMsg:false,
        errorMsg:""
    });

    const onSubmitUserDetails = async(event) =>{
        event.preventDefault();
        // console.log(allValues.username);
        // console.log(allValues.password);
        // alert("hiii");   

        let api = "https://apis.ccbp.in/login";

        let userDetails = {
            username: allValues.username,
            password: allValues.password
        }
        
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails)
          }

        let  response = await fetch(api , options);
            //  console.log(response);
        let data = await response.json();
        if(response.ok === true){
            setValues({...allValues,showErrorMsg:false , errorMsg:""});
            console.log(data.jwt_token);

        }else{
            setValues({...allValues,showErrorMsg:true , errorMsg:data.error_msg});
        }

    }

    const onchangeUsername = (e) =>{
        console.log({...allValues , username : e.target.value});
    }

    const onchangePassword = (e) =>{
        console.log({...allValues , password: e.target.value});

    }


    return (
        <div className='login-container'>
            <form className='form-container' onSubmit={onSubmitUserDetails}> 
                {/* <img src="https://plus.unsplash.com/premium_photo-1669075651606-4e05fb681ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8am9iJTIwcG9ydGFsJTIwbG9naW4lMjBwYWdlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D" alt="" /> */}
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">UserName</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onchangeUsername} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={onchangePassword} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <br />
                <br />
                {
                    allValues.showErrorMsg ? (<p className='text-danger'> {allValues.errorMsg} </p>) : null
                }
            </form>
        </div>
    )
}

export default Login;