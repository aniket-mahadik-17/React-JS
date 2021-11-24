import React,{Component} from "react";

export default class FormComponent extends Component{
    state={
        name:"",
        age:0,
    };
    // onInputNameChange=(event)=>{
    //     this.setState({name:event.target.value})
    // }
    // onInputAgeChange=(event)=>{
    //     this.setState({age:event.target.value})
    // }
    onInputChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
        console.log(event.target.name);
    }

    onFormSubmitHandler=(event)=>{
        event.preventDefault();
        console.log("in submit");
        console.log(this.state);
    }
    render(){
        return(
            <>
            <h1>Person Form</h1>
            <form onSubmit={this.onFormSubmitHandler}>
            <label>Name:</label>
            <input name={"name"} value={this.state.name} onChange={this.onInputChange}/>
            <br/>
            <label>Age:</label>
            <input name={"age"} value={this.state.age} onChange={this.onInputChange}/>
            <br/>
            <button type="submit">Submit</button>
            </form>
            </>
        )
    }

}