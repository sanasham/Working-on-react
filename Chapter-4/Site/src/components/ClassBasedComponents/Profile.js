import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { count } = this.state;
    const { count2 } = this.state;
    return (
      <div>
        <h1>Profile Class based component</h1>
        <p>{this.props.name}</p>
        <h2>{count}</h2>
        <h2>{count2}</h2>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            })
          }
        >
          click me
        </button>
      </div>
    );
  }
}

export default Profile;
