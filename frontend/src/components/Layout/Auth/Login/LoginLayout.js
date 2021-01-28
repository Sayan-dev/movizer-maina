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
import { Formik, useFormik } from 'formik'

const useStyle = makeStyles((theme) => ({

    signUp: {
        ...theme.typography.body2,
        margin:theme.spacing(2)

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
function LoginLayout({
    setSignUp=()=>{},
    setLoginModal,
    ...props
}) {

    const classes = useStyle()
    const [signInCheck,setSignInCheck]=useState(false)



    let { isLoading, error, sendRequest, clearError,setIsLoading }=useHttpClient()


    const [fbError,setfbError]=useState(false);


    const userAuth=useContext(AuthContext)


    const initialValues={
        email:"",
        password:""
    }



    const submitForm =async (e) => {

        let response,token
        try{
            setIsLoading(true)
            response=await auth.signInWithEmailAndPassword(e.email,e.password)

            token=await response.user.getIdToken()

            const resp=await sendRequest("users/login","post",{
                authType:'email',
                
            },
            {
                'Authorization': 'Bearer ' + token
            }
            )
            
            setLoginModal(false)

  

            userAuth.login(resp.user.userName,resp.user.email,"",token,null)



        }
        catch(err){
            console.log(err)
            setIsLoading(false)
            setfbError(err.message)
        }
    }



    return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object().shape({
          email:Yup.string().email().required("Required"),
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
                    value={values.email} id="email" aria-describedby="helper-text-email" />
                    {errors.email &&<FormHelperText error={true} id="helper-text-email">{errors.email}</FormHelperText>}


                </FormControl>
                
                <Text className={classes.formLabel}>Password</Text>
                <FormControl className={classes.formInput}>

                    {/* <InputLabel required={true} htmlFor="password">Password</InputLabel> */}
                    <Input 
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    value={values.password} 
                    type="password" 
                    id="password" 
                    aria-describedby="helper-text-password" />
                    {errors.password &&<FormHelperText error={errors.password}
                        id="helper-text-password">{errors.password}</FormHelperText>}

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
                <Button isLoading={isLoading} type="submit" color="primary">Login</Button>
            </FormGroup>
            {(fbError||error) &&<FormHelperText error={true} id="helper-text">{fbError || error }</FormHelperText>}
            <Text className={classes.signUp}>Don't have an account? <span style={{fontWeight:"bold",cursor:"pointer"}}  onClick={()=>setSignUp(true)}>SignUp</span></Text>

        </form>
      }}
      </Formik>

    )
}



export default LoginLayout

