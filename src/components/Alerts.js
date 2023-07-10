import React from 'react'

export default function Alerts(props) {
    const capitalize = (word) => {
        const arr = word.toLowerCase();
        return arr.charAt(0).toUpperCase() + arr.slice(1);
    }
    return (
        <div style={{ height: '50px' }}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
            </div>}
        </div>
    )
}