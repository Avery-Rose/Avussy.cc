import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { NextUIProvider, createTheme } from "@nextui-org/react";

import Login from "./pages/Login/Login";
import Home from "./pages/home/Home";
import NavBar from "./components/NavBar";
import NotFound from "./pages/404/NotFound";
import Trans from "./pages/Trans/Trans";
import Logout from "./pages/Logout/Logout";
import Account from "./pages/Account/Account";

import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primary: "#ff66ff",
      secondary: "#6685FF",
      text: "#fff",
      primaryShadow: "#ff66ff",
      secondaryShadow: "#6685FF",
      background: "#07101d",
      backgroundSecondary: "#0a0c2f",
      primaryInput: "#fff",
      primaryLightContrast: "#fff",
    },
    zIndices: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      max: "9999",
    },
  },
});

/*const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      primary: "#ff66ff",
      secondary: "#6685FF",
      text: "#000000",
      primaryShadow: "#ff66ff",
      background: "#74A2E1",
    },
  },
});*/

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = async ({ username, password }, callback) => {
    if (!user?.email || !user?.preferred_username) {
      // get login info
      // check if user has cookies set to login
      const res = await Auth.currentUserInfo()
        .then((u) => {
          return u;
        })
        .catch((err) => {
          console.log(err);
          return null;
        });
      if (res?.attributes) {
        setUser(res.attributes);
        callback({ success: true, message: "Logged in" });
      } else {
        try {
          const user = await Auth.signIn(username, password);
          if (user) {
            setUser(user.attributes);
            callback({ success: true, message: "Logged in" });
          } else {
            callback({ success: false, message: "Invalid credentials" });
          }
        } catch (err) {
          callback({ success: false, message: "Not Logged In", error: err });
        }
      }
    } else {
      // user is logged in
      callback({ success: true, message: "You are already logged in" });
      return;
    }
  };

  /*const handleLogin = async (callback) => {
    console.log("handleLogin");
    await Auth.currentAuthenticatedUser()
      .then((user) => {
        // logged in
        console.log(user);
        handleUser(user);
        callback(user);
      })
      .catch((err) => {
        // not logged in
        window.location.href = "/login";
        callback(null, err);
      });
  };*/

  const handleLogout = async (callback) => {
    console.log("handleLogout");
    try {
      await Auth.signOut();
      setUser(null);
      callback({ success: true, message: "Logged out" });
      //window.location.href = "/";
    } catch (err) {
      callback({ success: false, message: "Error logging out" });
    }
  };

  return (
    <div className="overflow-hidden" user={user}>
      <NextUIProvider theme={darkTheme}>
        <Router>
          <NavBar
            user={user}
            Auth={Auth}
            handleLogin={handleLogin}
            handleLogout={handleLogout}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home user={user} handleLogin={handleLogin} />}
            />
            <Route
              path="login"
              element={<Login handleLogin={handleLogin} user={user} />}
            />
            <Route
              path="logout"
              element={<Logout handleLogout={handleLogout} />}
            />
            <Route path="404" element={<NotFound />} />
            <Route path="trans" element={<Trans />} />
            <Route
              path="account"
              element={<Account user={user} handleLogin={handleLogin} />}
            />
            {/* if not found redirect to 404 page */}
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Router>
      </NextUIProvider>
    </div>
  );
}

export default App;
