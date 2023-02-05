// common funtion that will handle input validations

import { enumUtil } from "./Enum"
import isNull from "./NullCheck"


const FormValidator = (data, type, name, length) => {
    // data will be input field value of modal 
    // type will be required or null check etc 
    // name will be used for returning msg
    // length if we are going to check lenght of filed then type will be lengthCheck


    if (data instanceof Array && type === enumUtil.enumValidationType.NullCheck) {
        //if any value of Array is a Object then it will retrun true otherwise false

        if (!isNull(data)) {
            let array = Object.values(data[0])
            let dummy_Array = []
            for (let i = 0; i < array.length; i++) {
                dummy_Array.push(array[i])
            }
            let result = !dummy_Array.every((VALUE) => !hasObject(VALUE))
            return result
        }
    }
    if (type === enumUtil.enumValidationType.Required) {
        if (isNull(data)) {
            return (
                <div className="invalid-feedback" style={{ display: "block" }}>
                    {capitalize(name)}
                </div>
            )
        } else {
            return ""
        }
    } else if (type === enumUtil.enumValidationType.Length) {
        if (data.length < length && data.length > 0) {
            return (
                <div className="invalid-feedback" style={{ display: "block" }}>
                    {' '}
                    {capitalize(name)} length should be {length} !
                </div>
            )
        } else {
            return ''
        }
        ///////////////////////// For Normal Validation Code END/////////////////////
    }

}

// first letter of str to cap like name to Name
const capitalize = (params) => {
    if (typeof params === 'string') {
        return params.charAt(0).toUpperCase() + params.slice(1)
    }
    return null
}

// check if value is object 
const hasObject = (value) => {
    if (value instanceof Object) {
        return true
    } else {
        return false
    }
}
export default FormValidator