import React from "react";

import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";

import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const authElement = !isAuthenticated ? <Auth /> : <UserProfile />;
  return (
    <React.Fragment>
      <Header />
      {authElement}
      <Counter />
    </React.Fragment>
  );
}

export default App;
