import { Button ,Card,CardContent,CardMedia,Container,TextField} from '@mui/material'
import {  Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup' ;
const Contactus = () => {
    const formSubmit=(formdata)=>{
        console.log(formdata);
    }
    const myValidation =Yup.object().shape({
        email:Yup.string().email('invalid Email'),
        fullname:Yup.string().required('full name required').min(3,'too small')
    })
  return (
    <div><Container>
        <Card><CardMedia height="300" component="img" image="https://wallpaperaccess.com/full/8264290.jpg"/>
        <CardContent>
            <h2 className='text-center'>contact us</h2>
            <hr />
            <Formik initialValues={{fullname:'',email:'',phone:''}}
            onSubmit={formSubmit}
            validationSchema={myValidation}
            >
                {({values,handleSubmit,handleChange,errors})=>(
                    <form onSubmit={handleSubmit}>
                        <TextField  error={Boolean(errors.fullname)} helperText={errors.fullname} sx={{mt:5}} label="Fullname" variant= "outlined" value={values.fullname} id="fullname" onChange= {handleChange} fullWidth/>
                        <TextField error={Boolean(errors.email)} helperText={errors.email} sx={{mt:5}} label=" email Address" variant= "outlined" value={values.email} id="email" onChange= {handleChange} fullWidth/>
                        <TextField error={Boolean(errors.phone)}helperText={errors.phone} sx={{mt:5}} label="number" variant= "outlined" value={values.phone} id="phone" onChange= {handleChange} fullWidth/>
                        <Button variant ="contained" type="submit"><i class="fas fa-phone"></i> call me</Button>
                    </form>
                )}
            </Formik>
        </CardContent>
    </Card>
    </Container>
        <Button variant ="contained"><i class="fas fa-phone    "></i> call me</Button>
        <Button variant ="outlined"><i class="fas fa-phone    "></i> call me</Button>
    </div>
  )
}

export default Contactus