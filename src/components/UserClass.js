import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + "child constructor");
    this.state = {
      UserInfo: {
        name: "dummy",
        location: "sgr",
      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name + "child mount");

    const data = await fetch("https://api.github.com/users/waseemfarooq47");
    const json = await data.json();
    this.setState({
      UserInfo: json,
    });
    console.log(json);
  }

  render() {
    const { name, location, avatar_url } = this.state.UserInfo;
    // console.log(this.props.name + "child render");
    // debugger;
    return (
      <div>
        <img src={avatar_url} alt="avatar" />
        <h2>{name}</h2>
        <p>{location}</p>
        <p>9711866630</p>
      </div>
    );
  }
}
export default UserClass;
