import React from "react";


class Table extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div>
                <dl >
                    {Object.keys(this.props['data']).map((item) => {

                        return(
                            <div style={{display: 'flex'}}>
                                <dt key={item.id}>{item}</dt>
                                <dt key={item.id}>{this.props['data'][item]}</dt>
                            </div>
                        )
                    })}
                </dl>
            </div>


        )
    }
}

export default Table