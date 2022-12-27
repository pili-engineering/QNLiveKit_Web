import React, { useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch, useLocation } from 'react-router-dom';

import { LiveRoom, Login, Record, Room, RoomList, Shop } from '@/pages';

import { Auth } from '../auth';

const MAIN_VERSION = mainVersion;

const changeDocumentTitle = (path: string) => {
  if (path === '/') {
    return '欢迎登录';
  }
  if (path === '/room-list') {
    return '直播列表';
  }
  if (path.startsWith('/live-room')) {
    return '直播间';
  }
  return '互动直播体验';
};

const Router = () => {
  const location = useLocation();

  /**
   * 路由切换更新文档title
   */
  useEffect(() => {
    document.title = changeDocumentTitle(location.pathname);
  }, [location.pathname]);

  return <Switch>
    <Route exact path="/login" render={() => <Login nextUrl="/room-list" version={MAIN_VERSION}/>}/>
    <Route
      path="/"
      render={() => {
        return <Auth>
          <Switch>
            <Route exact path="/room-list" component={RoomList}/>
            <Route exact path="/room" component={Room}/>
            <Route exact path="/live-room" component={LiveRoom}/>
            <Route exact path="/record" component={Record}/>
            <Route exact path="/shop" component={Shop}/>
            <Redirect to="/login"/>
          </Switch>
        </Auth>;
      }}
    />
    <Redirect to="/login"/>
  </Switch>;
};

export const Root = () => {
  return <BrowserRouter>
    <Router/>
  </BrowserRouter>;
};
