import React from "react";
import classNames from "classnames";

class Button extends React.Component{
    constructor(props) {
        super(props);
        this.state = {switchOn: true, disabled: false}
    }
    left = () =>{
        this.setState({switchOn: false});
        this.setState({disabled: false});


    };
    right = () =>{
        this.setState({switchOn: true});
        this.setState({disabled: true});
    };

    render() {
        const buttonClassLeft = classNames([
            'btn ',
            this.state.switchOn ?'btn-secondary' : 'btn-primary',
            this.state.disabled ? {} : {disabled:true}
        ]) ;
        const buttonClassRight = classNames([
            'btn ',
            this.state.switchOn ?
                'btn-primary': 'btn-secondary',
            this.state.disabled ? {disabled:true} : {}
        ]) ;

        return<div>
            <div className="btn-group " role="group">
                <button type="button" className={buttonClassLeft} onClick={this.left}>Left</button>
                <button type="button" className={buttonClassRight} onClick={this.right}>Right</button>
            </div>
        </div>

    }
}

export default Button;