import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Input, InputLabel, makeStyles, Typography } from '@material-ui/core'
import clsx from 'clsx'
import * as Yup from 'yup'
import Button from '../../../commons/Button/Button'
import Text from '../../../commons/Text'
import { auth } from '../../../../config/firebaseconfig'
import { AuthContext } from '../../../../context/auth-context'
import { useHttpClient } from '../../../../hooks/http-hook'
import { Formik } from 'formik'

const useStyle = makeStyles((theme) => ({

    signUp: {
        ...theme.typography.body2,
        marginLeft:theme.spacing(5),
        marginRight:theme.spacing(5),
        marginTop:theme.spacing(2)

    },
    form:{
        marginTop:theme.spacing(2),
        width:"100%",
        
    },
    formOuter:{

    },
    formLabel:{
        marginBottom:theme.spacing(-2)
    },
    formInput:{
        // marginLeft:none,
        // border:"1px solid red",
        marginBottom:theme.spacing(2)
    }
}))
function SignupLayout({
    changeAuth,
    setLoginModal,
    ...props
}) {

    const classes = useStyle()

    const [email,setEmail]=useState("")

    const [userName,setUserName]=useState("")

    const [password,setPassword]=useState("")

    const [signInCheck,setSignInCheck]=useState(false)

    const { isLoading, error, sendRequest, clearError,setIsLoading }=useHttpClient()


    const [fbError,setfbError]=useState("");

    const userAuth=useContext(AuthContext)

    const initialValues={
        email:"",
        userName:"",
        password:""
    }




    const submitForm = async(e) => {

        let response,token
        try{
            setIsLoading(true)
            response=await auth.createUserWithEmailAndPassword(e.email,e.password)
            token=await response.user.getIdToken()
            const resp=await sendRequest("users/signup","post",{
                authType:'email',
                email:e.email,
                userName:e.userName,
                password:e.password
            },
            {
                'Authorization': 'Bearer ' + token
            }
            )

            setLoginModal(false)
            userAuth.login(userName,email,"",token,null)
            
        }
        catch(err){
            // console.log(err)
            setIsLoading(false)
            setfbError(err.message)
        }
    }
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
            email:Yup.string().email().required("Required"),
            userName:Yup.string().required("Username is required"),
            password:Yup.string().required("Please provide a password").min(6,"Minimum password must be 6")
        })}
        onSubmit={submitForm}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
            isValid,
            dirty
          } = formik;
        return <form className={classes.formOuter} onSubmit={handleSubmit}>
            <FormGroup className={classes.form} onSubmit={handleSubmit}>
                <Text className={classes.formLabel}>Email</Text>
                <FormControl className={classes.formInput}>


                    {/* <InputLabel required={true} htmlFor="password">Email address</InputLabel> */}
                    <Input 
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    value={values.email}
                    type="email" 
                    id="email" aria-describedby="helper-text-email" />
                    {errors.email &&<FormHelperText error={true} id="helper-text-email">{errors.email}</FormHelperText>}


                </FormControl>

                <Text className={classes.formLabel}>User Name</Text>
                <FormControl className={classes.formInput}>

                    {/* <InputLabel required={true} htmlFor="password">Password</InputLabel> */}
                    <Input 
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                    value={values.userName} 
                    type="text" id="userName" 
                    aria-describedby="username" />
                    {errors.userName &&<FormHelperText error={true} id="username">{errors.userName}</FormHelperText>}


                </FormControl>
                
                <Text className={classes.formLabel}>Password</Text>
                <FormControl className={classes.formInput}>

                    {/* <InputLabel required={true} htmlFor="password">Password</InputLabel> */}
                    <Input 
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                    value={values.password} 
                    type="password" id="password" 
                    aria-describedby="helper-text-password" />
                    {errors.password &&<FormHelperText error={true} id="helper-text-password">{errors.password}</FormHelperText>}

                </FormControl>

                <FormControlLabel
                    // className={clsx(classes.)}
                    control={
                        <Checkbox
                            checked={signInCheck}
                            onChange={()=>setSignInCheck(!signInCheck)}
                            size="small"
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Keep me signed in"
                />
                <Button isLoading={isLoading} type="submit" color="primary">SignUp</Button>
                

            </FormGroup>
            {(fbError||error) &&<FormHelperText error={true} id="helper-text">{fbError||error}</FormHelperText>}
            <Text onClick={()=>changeAuth(false)} style={{fontWeight:"bold",cursor:"pointer"}} className={classes.signUp}>Go back to login page </Text>

        </form>
        }}
        </Formik>

    )
}

export default SignupLayout

