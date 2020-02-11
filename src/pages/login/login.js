
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Input, Form, Button } from '@tarojs/components';
import TopBar from '../../components/topBar/index'
import './login.less'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      passWord: ''
    }
  }
  state = {}
  config = {
    navigationBarTitleText: "登录"
  };


  componentDidMount() { }
  componentWillReceiveProps(nextProps, nextContext) { }

  formSubmit(e) {
    console.log('用户名:' + e.detail.value.userName)
    console.log('密码:' + e.detail.value.passWord)
  }
  render() {
    return (
      <View style={{ fontSize: '.6rem' }}>
        <TopBar title="登录" />
        <View className="loginBox">
          <Form onSubmit={this.formSubmit}>
            <Input placeholder="请输入用户名" name="userName" value={this.state.userName} />
            <Input placeholder="请输入密码" name="passWord" value={this.state.passWord} />
            <Button className="login">登录</Button>
          </Form>

        </View>
      </View>
    );
  }
}
export default Login;
