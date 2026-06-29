import React from "react";
import {
  Avatar,
  Button,
  TextField,
  Typography,
  Snackbar,
  Box,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { AuthContext } from "../contexts/AuthContext";
import "../styles/auth.css";

export default function Authentication() {

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [formState, setFormState] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const { handleRegister, handleLogin } =
    React.useContext(AuthContext);

  const handleAuth = async () => {
    try {

      if (formState === 0) {

        await handleLogin(username, password);

      } else {

        const result = await handleRegister(
          name,
          username,
          password
        );

        setUsername("");
        setPassword("");
        setName("");

        setMessage(result);
        setError("");

        setOpen(true);
        setFormState(0);
      }

    } catch (err) {

      const msg =
        err?.response?.data?.message ||
        "Something went wrong.";

      setError(msg);
    }
  };

  return (

    <div className="authContainer">

      {/* LEFT SIDE */}

      <div className="leftSection">

        <div className="brandLogo">

          <div className="logoCircle">
            🎥
          </div>

          <h2>MEETORA</h2>

        </div>

        <div className="heroContent">

          <h1>
            Connect.
            <br />
            Collaborate.
            <br />
            <span>Create Together.</span>
          </h1>

          <p>
            Experience seamless HD meetings,
            secure collaboration and effortless
            communication with Meetora.
          </p>

        </div>

        {/* Fake Video Meeting */}

        <div className="meetingCard">

          <div className="meetingHeader">

            <span></span>
            <span></span>
            <span></span>

          </div>

          <div className="meetingGrid">

            <div className="participant">
              😊
              <small>Alex</small>
            </div>

            <div className="participant">
              😄
              <small>Emma</small>
            </div>

            <div className="participant">
              😎
              <small>John</small>
            </div>

            <div className="participant">
              🤓
              <small>You</small>
            </div>

          </div>

          <div className="meetingControls">

            <div>🎤</div>
            <div>📹</div>
            <div>💻</div>
            <div className="endCall">📞</div>

          </div>

        </div>

        <div className="featureList">

          <div className="featureItem">

            <span>🔒</span>

            <div>

              <h4>Secure Meetings</h4>

              <p>
                End-to-end encrypted video calls.
              </p>

            </div>

          </div>

          <div className="featureItem">

            <span>⚡</span>

            <div>

              <h4>Lightning Fast</h4>

              <p>
                Crystal-clear meetings with
                ultra-low latency.
              </p>

            </div>

          </div>

          <div className="featureItem">

            <span>🌍</span>

            <div>

              <h4>Join Anywhere</h4>

              <p>
                Meet from any device,
                anytime.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="rightSection">

        <div className="loginCard">

          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>

          <Typography
            variant="h4"
            className="loginTitle"
          >
            Welcome Back
          </Typography>

          <Typography
            className="loginSubtitle"
          >
            Sign in to continue to Meetora
          </Typography>

          <div className="switchButtons">

            <Button
              variant={
                formState === 0
                  ? "contained"
                  : "outlined"
              }
              onClick={() => setFormState(0)}
            >
              Sign In
            </Button>

            <Button
              variant={
                formState === 1
                  ? "contained"
                  : "outlined"
              }
              onClick={() => setFormState(1)}
            >
              Sign Up
            </Button>

          </div>

          <Box className="formBox">
          {formState === 1 && (
  <TextField
    fullWidth
    margin="normal"
    label="Full Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
)}

<TextField
  fullWidth
  margin="normal"
  label="Username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>

<TextField
  fullWidth
  margin="normal"
  label="Password"
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

{error && (
  <Typography
    sx={{
      color: "#ef4444",
      mt: 1,
      fontSize: "14px",
      textAlign: "center",
    }}
  >
    {error}
  </Typography>
)}

<Button
  fullWidth
  variant="contained"
  className="loginBtn"
  sx={{ mt: 3 }}
  onClick={handleAuth}
>
  {formState === 0 ? "Login" : "Create Account"}
</Button>

<Typography
  sx={{
    textAlign: "center",
    mt: 3,
    color: "#666",
    fontSize: "14px",
  }}
>
  {formState === 0
    ? "New to Meetora?"
    : "Already have an account?"}
</Typography>

<Button
  fullWidth
  variant="text"
  onClick={() =>
    setFormState(formState === 0 ? 1 : 0)
  }
>
  {formState === 0
    ? "Create an Account"
    : "Sign In Instead"}
</Button>

</Box>

</div>

</div>

<Snackbar
  open={open}
  autoHideDuration={4000}
  onClose={() => setOpen(false)}
  message={message}
/>

</div>

);
}