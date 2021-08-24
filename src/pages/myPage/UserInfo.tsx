import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import UserIcon from "components/user/UserIcon";

import PlayYoutube from "assets/img/mypage/play-youtube.png";
import PlaySpotify from "assets/img/mypage/play-spotify.png";
import GoogleAccount from "assets/img/mypage/google-account.png";

const UserInfo = () => {
  const [userId] = useState("와드깔고승리하자");
  const [userEmail] = useState("rPwjd@lol.lol");

  const history = useHistory();
  const clickToEdit = () => {
    history.push({
      pathname: "/editpage",
    });
  };

  return (
    <Container>
      <UserIcon />
      <MyInfoBox>
        <div>
          <img
            style={{ width: "40px", marginRight: "1vw" }}
            src={PlayYoutube}
          />
          <img style={{ width: "40px" }} src={PlaySpotify} />
        </div>
        <MyId>{userId}</MyId>
        <MyInfoLine />
        <MyInfoAccount>
          <img
            style={{ width: "23px", marginRight: "15px" }}
            src={GoogleAccount}
            alt="account icon"
          />
          <UserEmail>{userEmail}</UserEmail>
        </MyInfoAccount>
      </MyInfoBox>
      <Functions>
        <FunctionButton onClick={clickToEdit}>수정</FunctionButton>
        <FunctionButton>로그아웃</FunctionButton>
      </Functions>
    </Container>
  );
};

const Container = styled.section`
  height: 20vw;
  position: relative;
  display: flex;
  margin: 5vw 10% 0;
  background: #010407;
`;

const MyInfoBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 3vw 0;
  flex: none;
`;

const MyId = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 41px;
  color: #ffffff;
`;

const MyInfoLine = styled.hr`
  display: inline-block;
  width: 240px;
  height: 0px;
  margin-left: 0;

  opacity: 0.8;
  /* gold/primary */
  border: 1px solid #bb8c3c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const MyInfoAccount = styled.div`
  display: flex;
  justify-content: left;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

const UserEmail = styled.div`
  display: inline-block;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

const Functions = styled.section`
  position: relative;
  margin: 2vw 0;
  margin-left: auto;
`;

const FunctionButton = styled.div`
  display: inline-block;
  padding: 5px 15px;
  margin: 4px;
  background: linear-gradient(#010407, #010407) padding-box,
    linear-gradient(180deg, #c9ac6a 0%, #72572a 100%);
  border: 1px solid transparent;
  border-radius: 8px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  opacity: 0.8;
`;

export default UserInfo;
