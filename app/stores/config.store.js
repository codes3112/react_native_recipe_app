import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBMHs7lAkN1Aly0Sx3B-kk7L8g7TiIUOnc",
  authDomain: "foodexpedia.firebaseapp.com",
  databaseURL: "https://foodexpedia.firebaseio.com",
  projectId: "foodexpedia",
  storageBucket: "foodexpedia.appspot.com",
  messagingSenderId: "534444179135"
};

export default class ConfigStore {
  constructor() {
    firebase.initializeApp(config);
    this.splashTime = 1000;
    this.splashImg = require("../../images/splash.jpg");
    this.loginBG = require("../../images/login.jpg");
    this.recipeImg = require("../../images/food2.jpg");
  }

  //create accessor methods
  get SplashImg() {
    return this.splashImg;
  }

  get SplashTime() {
    return this.splashTime;
  }

  get LoginBG() {
    return this.loginBG;
  }

  get RecipeImg() {
    return this.recipeImg;
  }
}
