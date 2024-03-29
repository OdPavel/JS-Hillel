import React from "react";

class Hi extends React.Component {
    render() {

        return <div className="card">
            <div className="card-body">
                <h4 className="card-title">{this.props.title && this.props.title}</h4>
                <p className="card-text">{this.props.text && this.props.text}</p>
            </div>
        </div>
    }
}

export default Hi;