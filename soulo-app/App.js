import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <TitleBar>
          <Avatar source={require("./assets/orange.jpg")} />
          <Title>soulo</Title>
          <Name>Team Orange</Name>
        </TitleBar>
      </Container>
    );
  }
}

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
`;
const Container = styled.View`
  background: #f0f2f5;
  flex: 1;
`;

const Title = styled.Text`
  font-size: 36px;
  color: #b8bece;
`;
const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 20px;
`;
