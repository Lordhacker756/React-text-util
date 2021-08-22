import React from 'react'

function Alert(props) {
    return (
       props.alert && <div class="alert alert-success d-flex align-items-center" role="alert">
            <div>
                {props.alert}
            </div>
        </div>
    )
}

export default Alert
