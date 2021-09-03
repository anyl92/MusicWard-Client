import React, { useEffect } from "react";

import ArchivePage from "pages/archivePage/ArchivePage";
import { MainPage } from "pages/mainPage";
import EditPage from "pages/myPage/EditPage";
import MyPage from "pages/myPage/MyPage";
import PlayListPage from "pages/playListPage/PlayListPage";
import { SearchCategory, SearchResultList } from "pages/searchPage";
import { Redirect, Route, Switch } from "react-router-dom";
import PrivateRoute from "router/PrivateRoute";
import axios from "axios";
import { useRecoilState } from "recoil";
import { token, TokenType } from "recoil/auth";
import queryString from "query-string";

const Routes = () => {
  const [, setToken] = useRecoilState<TokenType>(token);
  const parsed = queryString.parse(location.search);
  const getToken = async () => {
    const {
      data: { data },
    } = await axios({
      url: "https://server.music-ward.com/users/auth/google",
      method: "post",
      params: {
        code: parsed.code,
      },
    });
    const { access_token, refresh_token, oauth_refresh_token, type } = data;
    setToken({
      accessToken: access_token,
      refreshToken: refresh_token,
      oauthRefreshToken: oauth_refresh_token,
      type: type,
    });
    localStorage.setItem("musicward_token", JSON.parse(data));
  };
  useEffect(() => {
    if (parsed.code) {
      getToken();
    }
  }, []);
  return (
    <>
      <Switch>
        <Route path="/search/list" component={SearchResultList} />
        <Route path="/search" component={SearchCategory} />
        <Route path="/playlist" exact component={PlayListPage} />
        <PrivateRoute path="/mypage" exact component={MyPage} />
        <PrivateRoute path="/editpage" exact component={EditPage} />
        <PrivateRoute path="/archive" exact component={ArchivePage} />
        <Route path="/" exact component={MainPage} />
        <Redirect path="*" to="/" />
      </Switch>
    </>
  );
};

export default Routes;
