import ConfigStore from "./config.store";
import AuthStore from "./auth.store";
import MyPageStore from "./myPage.store";

const config = new ConfigStore();
const auth = new AuthStore();
const myPages = new MyPageStore();

export default { config, auth, myPages };
