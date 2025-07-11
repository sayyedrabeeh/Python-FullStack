import React,{Component} from "react";

class Test extends Component {
    state = {
        text : ''
    }

    handleChange =  (e)=>{
        this.setState({text:e.target.value})
    }

    render(){
        return(
            <>
            <h1>{this.state.text}</h1>
            <input onChange={this.handleChange}value={this.state.text} placeholder="write anything" />
            </>
        )
    }
 


}

export default Test