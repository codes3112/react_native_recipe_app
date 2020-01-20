import React from "react";
import {
  DrawerNavigator,
  StackNavigator,
  DrawerItems,
  NavigationActions
} from "react-navigation";

//import splash screen
import SplashScreen from "./screens/splash.screen";
import LoginScreen from "./screens/login.screen";
import MyPageScreen from "./screens/myPage.screen";
import PostScreen from "./screens/post.screen";
import { ScrollView } from "react-native";
import { Button, Icon } from "native-base";
const hiddenItems = ["Splash"];

const SideBar = props => {
  const propsClone = {
    ...props,
    items: props.items.filter(item => !hiddenItems.includes(item.key))
  };
  return (
    <ScrollView>
      <DrawerItems {...propsClone} />
    </ScrollView>
  );
};

const MenuButton = ({ navigate }) => (
  <Button
    transparent
    onPress={() => {
      navigate("DrawerOpen");
    }}
  >
    <Icon style={{ color: "#fff" }} size={28} name="menu" />
  </Button>
);
const Splash = {
  screen: SplashScreen,
  navigationOptions: {
    header: null
  }
};

const Login = {
  screen: LoginScreen,
  navigationOptions: {
    header: null
  }
};

const MyPage = {
  screen: MyPageScreen,
  navigationOptions: {
    headerMode: "screen",
    headerTitle: "MyPages",
    drawerLabel: "MyPages"
  }
};

const Post = {
  screen: PostScreen,
  navigationOptions: {
    headerMode: "screen",
    headerTitle: "Post"
  }
};

const MyPageStack = StackNavigator(
  {
    MyPage: MyPage,
    Post: Post
  },
  {
    navigationOptions: ({ navigation, HeaderProps }) => ({
      headerLeft: <MenuButton navigate={navigation.navigate} />,
      headerStyle: { backgroundColor: "#000" },
      headerTintColor: "#fff"
    })
  }
);

const RouteConfig = {
  initialRoute: "Splash",
  contentComponent: SideBar,
  navigationOptions: {
    gesturesEnabled: false
  }
};

const AppNavigator = DrawerNavigator(
  {
    Splash: Splash,
    Login: Login,
    MyPage: { screen: MyPageStack }
  },
  RouteConfig
);

export default AppNavigator;
