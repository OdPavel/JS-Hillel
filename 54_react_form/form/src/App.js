import Form from "./Components/Form";
import React from "react";
import Table from "./Components/Table";
import './App.css';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            formData:{
                email: '',
                password: '',
                textarea: '',
                city: '',
                country: '',
                accept: '',
            },
            showTable: false

        }
    }
    handleSubmit = (data)=>{
        this.setState({formData: data})
        this.setState({showTable: true})
    }
    render() {
        return (
            <div className="App">
                <Form handleSubmit={this.handleSubmit}/>
                {this.state.showTable && <Table data={this.state.formData}/>}
            </div>
        );
    }


}

export default App;
