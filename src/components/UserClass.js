import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //super();
    console.log(props);
  }
  render() {
    return (
      <div>
        <h1>Name:{this.props.name}</h1>
        <h3>Location:Vadodara Gujarat</h3>
      </div>
    );
  }
}
export default UserClass;
