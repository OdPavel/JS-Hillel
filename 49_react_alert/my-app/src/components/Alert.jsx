import React from "react";

const checkType = (checkType)=>{
    const types = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
    return types.include(checkType)
}

class Alert extends React.Component {
    render() {
        const {type, text} = this.props
        return (
            <div className={`alert alert-${checkType ? type : 'primary'}` }role="alert">
                {text.trim().length ? text : 'No text provided'}
            </div>
        )
    }
}

export default Alert