import React from 'react';
import {  useNavigate } from "react-router-dom"
import { errorContainer, formAttr } from '../utils/Validation';
import { Formik } from "formik"
import * as Yup from "yup"

const Login = () => {
    const navigate = useNavigate()

    const submitFormData = async (data) => {
        const bodyData = {
            fieldsName: { email: data.email },
            password: data.password,
        }
        console.log(bodyData)

     if(data.email === "ava" && data.password === "123456"){    
        navigate("/dashboard")
     }else if(data.email === "john" && data.password === "123456"){    
        navigate("/admin")
     }else if(data.email === "mark" && data.password === "123456"){    
        navigate("/manager")
     }else if(data.email === "thomas" && data.password === "123456"){    
        navigate("/employee")
     }
      
     
        // await makeApiCall("post", "/user/login", bodyData, "raw")
        //     .then((res) => {
        //         navigate("/")
        //     })
        //     .catch((error) => {
        //         console.log("error", error)
        //         if (error.response.data.status == 0) {
        //             toast.error(`${error.response.data.message}`)
        //         }
        //     })
    }
      
   
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign In</h2>
                </div>
                <Formik
                            enableReinitialize
                            initialValues={{
                                email: "",
                                password: "",
                            }}
                            validationSchema={Yup.object({
                                email: Yup.string().required("Name is required"),
                                password: Yup.string().required("Password is required").min(6, "Password must be at least 8 characters"),
                            })}
                            onSubmit={(formData, { resetForm }) => {
                                submitFormData(formData, resetForm)
                            }}
                        >
                            {(runform) => (
                <form className="mt-8 space-y-4" onSubmit={runform.handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md space-y-4">
                        <div>
                            <label htmlFor="email-address" className="sr-only mb-20 space-x-1">Email address</label>
                            <input id="email-address" name="email" type="text" autoComplete="email"  {...formAttr(runform, "email")} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name" />
                            {errorContainer(runform, "email")}
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only space-x-1">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" {...formAttr(runform, "password")} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                            {errorContainer(runform, "password")}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Sign in
                        </button>
                    </div>
                </form>
                 )}
                 </Formik>
            </div>
        </div>
    );
}

export default Login;
