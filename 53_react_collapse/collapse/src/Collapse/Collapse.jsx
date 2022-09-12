import React from "react";
import classNames from "classnames";

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text,
            opened: true,
        }
    }

    onChange = () => {
        this.setState(({opened})=>({opened: !opened}))
    }

    render() {
        const buttonClass = classNames([
            'collapse',
            this.state.opened ? 'show' : ''

        ])

        return (
            <div>
                <p>
                    <a onClick={this.onChange} className="btn btn-primary" data-bs-toggle="collapse" href="#"
                       role="button" aria-expanded={this.state.opened}>Link with href</a>
                </p>
                <div className={buttonClass} >
                    <div className="card card-body ">
                        {this.state.text}
                    </div>
                </div>
                </div>

                )
                }
                }

                export default Collapse