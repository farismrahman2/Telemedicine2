import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from 'framer-motion';
import "react-datepicker/dist/react-datepicker.css";




import "./signup.css"

const Signup = ({ showModal, setShowModal }) => {

    const [FirstName, setFirst] = useState('');
    const [LastName, setLast] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [passwordCF, setpasscf] = useState(false);

  
  const defaultValues = { useState: new Array(FirstName,LastName,email,password,passwordCF) }

  
 function postLogin (){};
  var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    postLogin(JSON.stringify(data))
  };
  return (
    <AnimatePresence exitBeforeEnter>
    {showModal && (
        <motion.div className="shadow"
            initial={{ x: '-99vw' }}
            animate={{ x: '0' }}
            transition={{ delay: 0, }}
        >

            <motion.div className="modal_"
                initial={{ y: '-99vw' }}
                animate={{ y: '0' }}
                transition={{ delay: 0.5, type: 'spring', }}

            >
              
                <form onSubmit={handleSubmit(onSubmit)}>
                <h1 class='user__title'> Welcome, Sign up Here </h1>
                    <label>First Name</label>
                    <input
                    placeholder="Enter First name"
                        {...register("FirstName", {
                            required: true,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i
                        })}
                    />
                    {errors?.FirstName?.type === "required" && <p>This field is required</p>}
                    {errors?.FirstName?.type === "maxLength" && (
                        <p>First name cannot exceed 20 characters</p>
                    )}
                    {errors?.FirstName?.type === "pattern" && (
                        <p>Alphabetical characters only</p>
                    )}

                    <label>Last Name</label>
                    <input
                    placeholder="Enter Last name"
                        {...register("LastName", {
                            required: true,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i
                        })}
                    />
                    {errors?.LastName?.type === "required" && <p>This field is required</p>}
                    {errors?.LastName?.type === "maxLength" && (
                        <p>Last name cannot exceed 20 characters</p>
                    )}
                    {errors?.LastName?.type === "pattern" && (
                        <p>Numericals and other characters prohibited</p>
                    )}

                  <label>Email</label>
                  <input 
                  class = "email"
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                  {errors?.email?.type === "required" && <p>This field is required</p>}
                  {errors?.email?.type === "pattern" && (
                        <p>Invaild email</p>
                    )}
          
              <label>Password </label>
              <input
              class="password"
              type="password"
              placeholder = "Enter password"
              {...register("password",
              {   required: true,
                  pattern: regularExpression
           })}/>
           {errors?.password?.type === "required" && <p>This field is required</p>}
                  {errors?.password?.type === "pattern" && (
                        <p>password should contain atleast one number and one special characterl</p>
                    )}
           

              <label>Confirm Password </label>
              <input
                class ="passwordCF"
                type="password"
                placeholder = "Confirm password"
              {...register("passwordCF",
              {   required: true   
                })}/>
                {errors?.passwordCF?.type === "required" }
                  {errors?.passwordCF?.type === "passwordCF" && (
                        <p>Passwords do not match, try again</p>
                    )}
                
              <input className="btn" type="submit" value="Sign up"  />
              <button  onClick={() => setShowModal(false)}>Cancel</button>
              

            <br />
          
          </form>
          </motion.div>

</motion.div>
)}
   </AnimatePresence>

  );
              }

export default Signup;