//import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {
    return (
        <div>
            <h3>
                <UserContext.Consumer>
                    {({loggedInUser}) => (
                        <h3 className="p-2 m-2 font-mono">{loggedInUser}</h3>
                    )}
                </UserContext.Consumer>
            </h3>
            <h2>About us</h2>
            <p>We're food delivering app.</p>
            {/* <User name={"Arza(Func)"} location={"Bangalore"} contact={"@arza"}/> */}
            <UserClass name={"Arza(Class)"} location={"Usa"} contact={"@arza"}/>
        </div>
    )
}

export default About;