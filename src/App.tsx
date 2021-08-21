import React from "react";
import GlobalStyle from "./GlobalStyle";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import GlobalNavBar from "components/GlobalNavBar";
import Main from "./pages/mainPage/Main";
import MyPage from "./pages/MyPage";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <GlobalNavBar />
      <Switch>
        <Route path="/mypage" exact component={MyPage} />
        <Route path="/" exact component={Main} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
