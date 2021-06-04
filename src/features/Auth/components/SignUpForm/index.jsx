import React from 'react'
import { FastField, Form, Formik } from 'formik';
import { Button, FormGroup} from 'reactstrap';
import InputField from '../../../../custom_fields/InputField';

import * as Yup from 'yup';


export default function SignupForm(props) {
    const initialValues = {
        email: '',
        password: ''
    }
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('This field is required'),
        email: Yup.string().required('This field is required'),
        password: Yup.number().min(6).required('This field is required'),
        passwordCon: Yup.number().oneOf([Yup.ref('password'), null], 'Passwords must match')
    })
    return (
        <Formik 
        initialValues={initialValues}
        validationSchema = {validationSchema}
        onSubmit={props.onSubmit}
        >
            {formikProps => {
                const { values, errors, touched } = formikProps
                console.log({ values, errors, touched })
                return (
                    <Form>
                        <FastField
                            name="username"
                            component={InputField}
                            

                            label="Username"
                            placeholder="username..."
                        />
                        <FastField
                            name="email"
                            component={InputField}
                            type="email"

                            label="Email"
                            placeholder="example@gmail.com"
                        />

                        <FastField
                            name="password"
                            component={InputField}
                            type="password"

                            label="Password"
                            placeholder="******"

                        />
                        <FastField
                            name="passwordCon"
                            component={InputField}
                            type="password"

                            label="Password"
                            placeholder="******"
                        />
                        <FormGroup>
                            <Button color="primary" className="w-100 mt-4" type="submit">Sign up</Button>
                        </FormGroup>
                    </Form>
                    
                )
    
            }}
        </Formik>
    )
}
