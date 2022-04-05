import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from 'framer-motion';
import "react-datepicker/dist/react-datepicker.css";




import "./signup.css"

const Signin = ({ showModal, setShowModal }) => {
  
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
  const defaultValues = { useState: new Array[email, password] }

  
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
                <h1 class='user__title'> Welcome back </h1>
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
                
              <input className="btn" type="submit" value="Sign in"  />
              <button  onClick={() => setShowModal(false)}>Cancel</button>

            <br />
          
          </form>
          </motion.div>

</motion.div>
)}
   </AnimatePresence>

  );
              }

export default Signin;