import React from 'react'
import propTypes from 'prop-types'
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import { ErrorMessage } from 'formik'


InputField.propTypes = {
    field: propTypes.object.isRequired,
    form: propTypes.object.isRequired,

    type: propTypes.string,
    label: propTypes.string,
    placeholder: propTypes.string,
    disabled: propTypes.bool
}

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false
}

export default function InputField(props) {
    const {
        field, form,
        type, label, placeholder, disabled
 } = props
 const { name } = field;
 const { errors, touched } = form;
const showError = errors[name] && touched[name];
    return (
        <FormGroup>
            
            {label && <Label for={name}>{label}</Label>}
            <Input 
            name={name} 
            {...field }
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            invalid={showError}
             />

        <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>

    )
}
