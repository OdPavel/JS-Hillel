import React from "react";

class Progress extends React.Component{

    render() {

    const{percentage } = this.props
    return <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100"
                 aria-label="progressbar" style={{width: percentage + '%', height:'8px', backgroundColor: "red"}} >
            </div>
        </div>
    }
}

export default Progress