import React from "react";

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tab: 0}
    }

    buttonPrev = () => {
        this.setState({tab: this.state.tab +1})
    }

    buttonNext = () => {
        this.setState({tab: this.state.tab -1})
    }

    render() {
        const {data} = this.props


        return (
            <div id="carousel" className="carousel slide" data-bs-ride="carousel" style={{margin: "0 auto"}}>
                <div className="carousel-inner">

                    {data.map((item) => {
                        return (<div className="carousel-item active">
                            <img alt="" className="d-block w-100 " key={item.id} src={item.url}
                                 style={{width: '850px', margin: "0 auto", display:'none'}}/>
                        </div>)
                    })}


                </div>
                <button onClick={this.buttonPrev} className="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev">
                    <span className="visually-hidden">Previous{this.state.tab}</span>
                </button>
                <button onClick={this.buttonNext} className="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next">
                    <span className="visually-hidden">Next{this.state.tab}</span>
                </button>
            </div>
        )


    }
}

export default Carousel

