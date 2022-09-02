import React from "react";

class Form extends React.Component {
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

        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state.formData)
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        const formData = {...this.state.formData}

        formData[target.name] = value
        this.setState({
            formData: formData
        });
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{display:'flex', flexDirection: 'column', maxWidth: '300px'}}>
                    <input onChange={this.handleChange} value={this.state.formData.email} name='email' type={"email"} placeholder={'Enter email'} style={{marginBottom: "15px"}}/>
                    <input onChange={this.handleChange} value={this.state.formData.password} name='password' type={"password"} placeholder={'Enter password'} style={{marginBottom: "15px"}}/>
                    <textarea onChange={this.handleChange} value={this.state.formData.textarea} name='textarea' placeholder={'Enter your address'} style={{marginBottom: "15px"}}/>
                    <input onChange={this.handleChange} value={this.state.formData.city} name='city' type={"text"} placeholder={'Enter your city'} style={{marginBottom: "15px"}}/>
                    <label>
                        Enter your country
                        <select onChange={this.handleChange} value={this.state.formData.country} name='country' style={{marginBottom: "15px", marginLeft: '10px', padding:'5px'}}>
                            <option value='argentina'>Argentina</option>
                            <option value='canada'>Canada</option>
                            <option value='china'>China</option>
                        </select>
                    </label>
                <label style={{marginBottom: "15px"}}>
                    Accept Rules:
                    <input onChange={this.handleChange} name="accept" type="checkbox" checked={this.state.formData.accept} />
                </label>
                <input type="submit" value="Submit" style={{maxWidth: '100px'}} />
            </form>
        )
    }
}

export default Form