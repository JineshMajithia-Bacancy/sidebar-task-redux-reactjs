import React from "react";
import SocialLogin from "react-social-login";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class SocialButton extends React.Component {
  render() {
    const { children, triggerLogin, ...props } = this.props;
    return (
      <button
        className="btn btn-outline-primary"
        onClick={triggerLogin}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default SocialLogin(SocialButton);
