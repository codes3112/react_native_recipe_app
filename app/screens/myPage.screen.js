import React, { Component } from "react";
import {
  Container,
  Content,
  Icon,
  Button,
  View,
  Image,
  Text
} from "native-base";
import { inject } from "mobx-react";

import MyPage from "../components/myPage.component";

@inject("stores")
export default class MyPageScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Button transparent onPress={() => navigation.navigate("Post")}>
        <Icon name="camera" style={{ color: "#fff" }} size={28} />
      </Button>
    )
  });

  render() {
    const { stores } = this.props;
    return (
      <Container>
        <Content scrollEnabled={false} style={{ backgroundColor: "#858585" }}>
          <MyPage stores={this.props.stores} />
        </Content>
      </Container>
    );
  }
}
