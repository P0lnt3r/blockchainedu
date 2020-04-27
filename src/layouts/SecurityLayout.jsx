import React from 'react';
import { PageLoading } from '@ant-design/pro-layout';
import { Redirect, connect, history } from 'umi';
import { stringify } from 'querystring';
import { ENV as env } from '@/services/config';

class SecurityLayout extends React.Component {

  state = {
    isReady: false,
  };

  componentDidMount() {
    this.setState({
      isReady: true,
    });
    const { dispatch } = this.props;
    /**
     * 页面挂载上时,检查路径中是否存在code, 如果存在code则进行调用后台,将 code 信息传给后台进行验证
     * 
     * 如果验证通过,则根据返回的用户类型跳转到对应的页面,同时将验证中获取的用户信息存储到 LocalStorage 中.
     * 如果验证不通过,则清空本地 LocalStorage 中可能表示身份的信息.并跳到警告页面或者...
     * 
     * 当请求时,如果不存在 code , 则访问 LocalStorage 中是否存在 JWT , 如果存在 JWT , 则调用接口更新一遍用户信息,
     * 如果在验证中不通过,则走如上一样的逻辑.
     */
    if ('dev' !== env) {
      const code = this.props.location.query.code;
      if (code) {
        dispatch({
          type: 'user/checkCode',
          payload: { code: code }
        });
      } else {
        dispatch({
          type: 'user/fetchCurrent',
        });
      }
    }
  }

  render() {
    const { isReady } = this.state;
    const { children, loading, currentUser } = this.props; // You can replace it to your authentication rule (such as check token exists)
    // // 你可以把它替换成你自己的登录认证规则（比如判断 token 是否存在）
    const isLogin = currentUser && currentUser.id;
    if ( 'dev' === env ){
      return children;
    }
    // const queryString = stringify({
    //   redirect: window.location.href,
    // });
    if ((!isLogin && loading) || !isReady) {
      return <PageLoading />;
    }
    const code = this.props.location.query.code;
    const { type } = currentUser;
    if ( code ){
      if ( type > 2 ){
        history.push('/lessions');
      }else{
        history.push('/bm/discuss');
      }
    }else{
      const bmReg = /^\/bm*/
      if ( type > 2 && bmReg.test( this.props.location.pathname ) ){
        history.push('/lessions');
      }
    }
    console.log( currentUser );
    // if (!isLogin && window.location.pathname !== '/user/login') {
    //   return <Redirect to={`/user/login?${queryString}`} />;
    // }
    return children;
  }
}

export default connect(({ user, loading }) => ({
  currentUser: user.currentUser,
  loading: loading.models.user,
}))(SecurityLayout);
