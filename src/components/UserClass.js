import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            //count : 0
            userInfo : {
                name : "dummy",
                bio : "dummy",
                location: "dummy",
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/arzamansoori");
        const json = await data.json();

        console.log(json);

        this.setState({
            userInfo : json,
        });

    }

    render(){
        //destructuring
        const {name, bio, location, avatar_url} = this.state.userInfo;

        return(
            <div className="user-card">
            <h3>Name: {name}</h3>
            <img src={avatar_url}></img>
            <p>Bio: {bio}</p>
            <p>Location: {location}</p>
            {/* <h4>Count: {this.state.count}</h4>
            <button onClick={()=>{
                this.setState({
                    count : this.state.count+1
                })
            }}>Count increace</button>
            <button onClick={()=>{
                this.setState({
                    count : this.state.count-1
                })
            }}>Count decrease</button> */}
        </div>
        )
    }
}

export default UserClass;