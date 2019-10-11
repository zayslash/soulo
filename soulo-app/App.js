import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <TitleBar>
          <Avatar source={require("./assets/orange.jpg")} />
          <Title>Welcome</Title>
          <Name>Team Orange</Name>
        </TitleBar>
        <Subtitle>Radio Stations</Subtitle>
        <ScrollView horizontal={true}>
          <Card
            title="NYC Pulse Radio"
            image={require("./assets/test.jpg")}
            caption="Mike Star"
            subtitle="live"
            logo={require("./assets/orange.jpg")}
          />

          <Card
            title="Captain    Hunch "
            image={require("./assets/test2.jpg")}
            caption="April Jane"
            subtitle="live"
            logo={require("./assets/april.jpeg")}
          />
        </ScrollView>
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
  position: absolute;
  top: 0;
  left: 0;
`;
const Container = styled.View`
  background: #f0f2f5;
  flex: 1;
`;

const Title = styled.Text`
  font-size: 30px;
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
  padding-left: 80px;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;
