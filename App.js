import React from 'react';

// Higher-order component for authentication
const withAuthentication = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false,
      };
    }

    // Simulated login functionality
    login = () => {
      this.setState({ isLoggedIn: true });
    };

    render() {
      return (
        <WrappedComponent
          isLoggedIn={this.state.isLoggedIn}
          login={this.login}
          {...this.props}
        />
      );
    }
  };
};

// Example usage of the HOC
class Profile extends React.Component {
  render() {
    return (
      <div>
        {this.props.isLoggedIn ? (
          <h1>Welcome to your profile!</h1>
        ) : (
          <button onClick={this.props.login}>Login</button>
        )}
      </div>
    );
  }
}

// Wrapping the Profile component with the HOC
const ProfileWithAuthentication = withAuthentication(Profile);

export default ProfileWithAuthentication;