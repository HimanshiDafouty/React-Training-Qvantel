import React, { useState } from 'react'

const FormHandling = () => {
    const[formData , setFormData] = useState({userName:"" , password : ""})
    const changeHandler=(e)=>{
        const{name , value}=e.target;
        setFormData({...formData ,[name]:value})

    }
    const submitHandler=(e)=>{
        e.preventDefault();
        alert(`userName:${formData.userName} and Password : ${formData.password}`)

    }
  return (
    <div>
        <h2>FormHandling</h2>
        <form onSubmit ={submitHandler}>
            <label>UserName: </label>
            <input type ="text" name = "userName" value = {formData.userName} onChange={changeHandler}/>
            <br />
            <label>Password : </label>
             <input type ="password" name = "password" value = {formData.password} onChange={changeHandler}/>
             <br/>

             <button type="submit">Submit</button>


        </form>

    </div>
  )
}

export default FormHandling