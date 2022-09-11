import { Formik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';

const UpdateUser = ({ userFormData, getDataFromBackend, setShowForm }) => {
  
    const userSubmit = async (formdata) => {
        console.log(formdata);
        // 1. Url
        // 2. Request Method
        // 3. Data
        // 4. Data Format

        // to send request on backend - to connect frontend and backend.
        const response = await fetch('http://localhost:5000/user/update/'+formdata._id, {
            method : 'PUT',
            body : JSON.stringify(formdata),
            headers : {
                'Content-Type' : 'application/json'
            }
        });

        if(response.status === 200){
            console.log('user added');
            Swal.fire({
                icon : 'success',
                title : 'Great!!',
                text : 'Updated Successfuly'
            })
            getDataFromBackend();
            setShowForm(false);
        }
    }

  return (
    <div>
        <div className="container pt-5">
            <div className="card">
                <div className="card-body">
                    <h2 className='text-center'>Update User Form</h2>
                    <Formik
                    initialValues={userFormData}
                    onSubmit={userSubmit}>
                        {({values, handleSubmit, handleChange}) => (
                            <form onSubmit={handleSubmit}>
                                <label>Name</label>
                                <input className='form-control' id="name" onChange={handleChange} value={values.name} />
                                <label>Email</label>
                                <input className='form-control' id="email" onChange={handleChange} value={values.email} />
                                <label>Password</label>
                                <input type="password" className='form-control' id="password" onChange={handleChange} value={values.password} />
                                <label>Age</label>
                                <input className='form-control' id="age" onChange={handleChange} value={values.age} />
                            <button type="submit" className='btn btn-primary mt-4'>Submit</button>
                            <button type="submit" className='btn btn-danger mt-4' onClick={e => setShowForm(false)}>Cancel</button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    </div>
  )

}

export default UpdateUser