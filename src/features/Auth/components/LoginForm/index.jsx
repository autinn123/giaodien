import React from 'react'
import { FastField, Form, Formik } from 'formik';
import { Button, FormGroup} from 'reactstrap';
import InputField from '../../../../custom_fields/InputField';
import PropTypes from 'prop-types';
import * as Yup from 'yup';


export default function LoginForm(props) {
    const initialValues = {
        email: '',
        password: ''
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().required('This field is required'),

        password: Yup.number().required('This field is required')
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
                        <FormGroup>
                            <Button color="primary" className="w-100 mt-4" type="submit">Sign in</Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
    )
}
