import './index.css';

const Login = () => {

    const onSubmitUserDetails = async(event) =>{
        event.preventDefault();
        // alert("hiii");   

        let api = "https://apis.ccbp.in/login";

        let userDetails = {
            username: "rahul",
            password: "rahul@2021"
        }
        
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails)
          }

        let  response = await fetch(api , options);
            //  console.log(response);
        let data = await response.json();
        console.log(data.jwt_token);
    }

    const onchangeUsername = (e) =>{
        console.log(e.target.value);
    }

    const onchangePassword = (e) =>{
        console.log(e.target.value);

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
            </form>
        </div>
    )
}

export default Login;