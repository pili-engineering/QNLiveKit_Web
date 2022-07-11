import React, { useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch, useLocation } from 'react-router-dom';

import { Login } from '@/pages/login';
import { RoomList } from '@/pages/room-list';
import { Room } from '@/pages/room';
import { Auth } from '@/layouts';

const changeDocumentTitle = (path: string) => {
  if (path === '/') {
    return '欢迎登录';
  }
  if (path === '/list') {
    return '房间列表';
  }
  if (path.startsWith('/room')) {
    return '直播间';
  }
  return '互动直播体验';
};

const RootRouter = () => {
  const location = useLocation();

  /**
   * 路由切换更新文档title
   */
  useEffect(() => {
    document.title = changeDocumentTitle(location.pathname);
  }, [location.pathname]);

  return <Switch>
    <Route exact path="/login" render={() => <Login nextUrl="/room-list"/>}/>
    <Route
      path="/"
      render={() => {
        return <Auth>
          <Switch>
            <Route exact path="/room-list" component={RoomList}/>
            <Route exact path="/room" component={Room}/>
            <Redirect to="/login"/>
          </Switch>
        </Auth>;
      }}
    />
    <Redirect to="/login"/>
  </Switch>;
};

const Router = () => {
  return <BrowserRouter>
    <RootRouter/>
  </BrowserRouter>;
};

export default Router;
