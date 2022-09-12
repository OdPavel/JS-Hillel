import React from "react";
import classNames from "classnames";

class Button extends React.Component{
    constructor(props) {
        super(props);
        this.state = {switchOn: false, disabled: false}
    }
    left = () =>{
        this.setState({switchOn: false});
        this.setState({disabled: true});
    };
    right = () =>{
        this.setState({switchOn: true});
        this.setState({disabled: true});
    };

    render() {
        const buttonClassLeft = classNames([
            'btn btn-primary',
            this.state.disabled && this.state.switchOn ? 'disabled' : ''
        ]) ;
        const buttonClassRight = classNames([
            'btn btn-primary',
            this.state.disabled && !this.state.switchOn? 'disabled' : ''
        ]) ;

        return<div>
            <div className="btn-group " role="group">
                <button type="button" className={buttonClassLeft} onClick={this.left} >Left</button>
                <button type="button" className={buttonClassRight} onClick={this.right}>Right</button>
            </div>
        </div>

    }
}

export default Button;