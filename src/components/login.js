import React from "react";
import SocialButton from "./socialLogin";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Input,
  Label,
} from "reactstrap";

const Login = (props) => {
  const handleSocialLogin = (user) => {
    console.log(user);
  };

  const handleSocialLoginFailure = (err) => {
    console.error(err);
  };

  const handleLogin = () => {
    props.history.push("/App");
  };
  return (
    <div
      className="container-fluid"
      style={{
        paddingTop: "10px",
        paddingBottom: "10px",
        maxWidth: "500px",
        backgroundColor: "lightgray",
      }}
    >
      <div className="text-center">
        <Card>
          <CardBody style={{ backgroundColor: "lightblue" }}>
            <CardTitle tag="h3">Sign In</CardTitle>
            <CardSubtitle>
              Sign In using your social media account or email.
            </CardSubtitle>
            <br />
            <Label>
              Email<span style={{ color: "red" }}>*</span>
            </Label>
            <Input
              placeholder="example@email.com"
              type="email"
              required
            ></Input>
            <br />
            <Label>
              Password<span style={{ color: "red" }}>*</span>
            </Label>
            <Input type="password" required></Input>
            <br />
            <Button outline color="primary" onClick={handleLogin}>
              Sign In
            </Button>
            <br />
            <br />
            <CardTitle> OR </CardTitle>
            <br />
            <SocialButton
              provider="instagram"
              onLoginSuccess={handleSocialLogin}
              onLogoutFailure={handleSocialLoginFailure}
            >
              Sign In using Instagram
            </SocialButton>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Login;
