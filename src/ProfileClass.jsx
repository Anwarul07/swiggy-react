import React from "react";

export class ProfileC extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   counter1: 0,
    //   counter2: 1,
    // };
    this.state = {
      userInfo: {
        name: "DUMMY NAME",
        location: "DUMMY LOCATION",
      },
    };
    console.log("Child-constructor " + this.props.name);

    // console.log("first of all contructor executes");
  }

  componentDidMount() {
    //Best palace to call api
    //first render than update
    // console.log("last of all componenet Did Mount executes");
    console.log("Child-componentdidMount " + this.props.name);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/noori09");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log("Child-componentdidMount " + this.props.name);
  }
  //  componentDidMount(){
  //    this.timer=setInterval(()=>{
  //         console.log("Namaste React OP")
  //     },1000)
  //     console.log("Child-componentdidMount ")
  // }

  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentwillunmount");
  }

  render() {
    const { counter1, counter2 } = this.state;
    // console.log("Second of all render executes");
    console.log("Child-render " + this.props.name);
    return (
      <div className="pl-96 ml-12 pb-8">
        <h3> Profile section using class baased page </h3>
        <h4> profile class propes is : {this.props.name}</h4>
        <h4>counting 1st : {counter1}</h4>
        <h4>counting 2nd : {counter2}</h4>

      
        <button className="count-btn text-white mt-2 text-lg bg-indigo-600 h-8 w-24   pb-2 outline-none"
          onClick={() => {
            this.setState({
              counter1: 1,
              counter2: 2,
            });
          }}
        >
          SetCount
        </button>

        {/* <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2> */}
      </div>
    );
  }
}
