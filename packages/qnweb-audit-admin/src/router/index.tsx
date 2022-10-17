import React, { useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { ContentAudit, Login } from '@/pages';

const MAIN_VERSION = mainVersion;

export const Router = () => {
  useEffect(() => {
    document.title += MAIN_VERSION;
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/content-audit" component={ContentAudit}/>
        <Redirect to="/content-audit"/>
      </Switch>
    </BrowserRouter>
  );
};
