import React from 'react'
import { useForm } from "react-hook-form";
import BloodGroups from './BloodGroups';
import Countries from './Countries';
import Religions from './Religions';
import States from './States';
import * as yup from "yup";
import "yup-phone-lite";
import { yupResolver } from "@hookform/resolvers/yup";



const Register = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.string().required(),
    sex: yup.string().required(),
    mobile: yup.string().phone("IN","Enter a valid indian number"),
    emergency_contact : yup.string().phone("IN","Enter a valid indian number"),
  })
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
  };
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <h3><b><u>Personal Details</u></b></h3>
            <div className='row'>
                <div className='col-md-4'>
                    <label htmlFor='Name' className='mx-4'>Name</label>
                    <input type="text" {...register("name")}  placeholder="Enter Name"></input>
                    <p className='text-danger'>{errors.name?.message}</p>
                </div>
                <div className='col-md-4'>
                    <label htmlFor='Age' className='mx-4'>Date of Birth or Age</label>
                    <input type="text" {...register("age")} placeholder="DD/MM/YYYY or Age in Years"></input>
                    <p className='text-danger'>{errors.age?.message}</p>
                </div>
                <div className='col-md-4'>
                    <label htmlFor='Sex' className='mx-4'>Sex</label>
                    <select {...register("sex")}>
                        <option selected>Enter Sex</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <p className='text-danger'>{errors.sex?.message}</p>
                </div>
            </div>
            <div className='row my-3'>
                <div className='col-md-4'>
                    <label htmlFor='Mobile' className='mx-4'>Mobile</label>
                    <input type="text" {...register("mobile")} placeholder="Enter Mobile"></input>
                    <p className='text-danger'>{errors.mobile?.message}</p>
                </div>
                <div className='col-md-8'>
                    <label htmlFor='Id' className='mx-4'>Govt Issued Id</label>
                    <select className='mx-2' {...register("id_type")}>
                        <option>ID TYPE</option>
                        <option value="aadhar">Aadhar</option>
                        <option value="pan">pan</option>
                    </select>
                    <input type="text" {...register("id")}></input>
                    <p className='text-danger'>{errors.id?.message}</p>
                </div>
            </div>
            <h3><b><u>Contact Details</u></b></h3>
            <div className='row my-2'>
                <div className='col-md-4'>
                <label htmlFor='Guardian' className='mx-4'>Guardian Details</label>
                    <select  {...register("guardian_type")}>
                        <option value="Mr">Mr</option>
                        <option value="Ms">Ms</option>
                        <option value="Mrs">Mrs</option>
                    </select>
                    <input type="text" {...register("guardian_name")}></input>
                </div>
                <div className='col-md-4'>
                    <label htmlFor='Email' className='mx-4'>Email</label>
                    <input type="text" {...register("email")}></input>
                </div>
                <div className='col-md-4'>
                    <label htmlFor='Emergency' className='mx-4'>Emergency Contact</label>
                    <input type="text" {...register("emergency_contact")}></input>
                    <p className='text-danger'>{errors.emergency_contact?.message}</p>
                </div>
            </div>
            <h3><b><u>Address Details</u></b></h3>
            <div className='row my-2'>
                <div className='col-md-4'>
                <label htmlFor='Address' className='mx-4'>Address</label>
                    <input type="text" {...register("address")}></input>
                </div>
                <div className='col-md-4'>
                    <label htmlFor='State' className='mx-4'>State</label>
                    <select  {...register("state")}>
                        <States/>
                    </select>
                </div>
                <div className='col-md-4'>
                    <label htmlFor='City' className='mx-4'>City</label>
                    <input type="text" {...register("city")}></input>
                </div>
            </div>
            <div className='row my-2'>
                <div className='col-md-8'>
                <label htmlFor='Country' className='mx-4'>Country</label>
                    <select className='mx-2' {...register("country")}>
                        <Countries/>    
                    </select>
                </div>
                <div className='col-md-4'>
                    <label htmlFor='Pincode' className='mx-4'>Pincode</label>
                    <input type="text" {...register("pincode")}></input>
                </div>
            </div>
            <h3><b><u>Other Details</u></b></h3>
            <div className='row my-2'>
                <div className='col-md-3'>
                <label htmlFor='Occupation' className='mx-2'>Occupation</label>
                    <input type="text" {...register("occupation")}></input>
                </div>
                <div className='col-md-3'>
                    <label htmlFor='Religion' className='mx-2'>Religion</label>
                    <select  {...register("religion")}>
                        <Religions/>
                    </select>
                </div>
                <div className='col-md-3'>
                    <label htmlFor='Martial' className='mx-2'>Martial Status</label>
                    <select  {...register("martial_status")}>
                        <option value="married">Married</option>
                        <option value="unmarried">Unmarried</option>
                    </select>
                </div>
                <div className='col-md-3'>
                    <label htmlFor='Blood' className='mx-2'>Blood Group</label>
                    <select  {...register("blood_group")}>
                        <BloodGroups/>
                    </select>
                </div>
            </div>
            <div className='row my-2'>
                <div className='col-md-8'>
                    <label htmlFor='Country' className='mx-2'>Nationality</label>
                    <select className='mx-2' {...register("nationality")}>
                        <Countries/>    
                    </select>
                </div>
            </div>
            
            
            <input type="submit" className="btn btn-success float-end mx-2" value="Submit (ENTER)"/> 
            <input type="cancel" className="btn btn-danger float-end mx-5" value="Cancel (ESC)"/>
        </form>
    </div>
  )
}

export default Register