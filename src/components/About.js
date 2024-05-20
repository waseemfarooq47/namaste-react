import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("parent mount");
  }

  render() {
    // console.log("parent render");
    return (
      <>
        <UserClass
          name={"Waseem Farooq Developer"}
          location={"Srinagar Kashmir"}
        />
      </>
    );
  }
}
export default About;
