import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h2>About us</h2>
            <p>We're food delivering app.</p>
            <User name={"Arza(Func)"} location={"Bangalore"} contact={"@arza"}/>
            <UserClass name={"Arza(Class)"} location={"Usa"} contact={"@arza"}/>
        </div>
    )
}

export default About;