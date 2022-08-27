import React from "react";

class Cart extends React.Component {
    renderList() {
        const { data } = this.props
        return data.map(item => <li>{item.title}</li>);
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{this.renderList()}</h4>
                    <p className="card-text">{this.renderList()}</p>
                </div>
            </div>
        );
    }
}

export default Cart