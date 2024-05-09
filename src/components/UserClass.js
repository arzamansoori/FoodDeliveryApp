import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count : 0
        }
    }

    render(){
        //destructuring
        const {name, location} = this.props;

        return(
            <div className="user-card">
            <h3>Name: {name}</h3>
            <h4>Count: {this.state.count}</h4>
            <button onClick={()=>{
                this.setState({
                    count : this.state.count+1
                })
            }}>Count increace</button>
            <button onClick={()=>{
                this.setState({
                    count : this.state.count-1
                })
            }}>Count decrease</button>
            <p>Location: {location}</p>
            <p>Contact: {this.props.contact}</p>
        </div>
        )
    }
}

export default UserClass;