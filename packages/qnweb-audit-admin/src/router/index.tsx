import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { ContentAudit } from '@/pages/content-audit';
import { Auth } from '@/layouts';

export const Router = () => {
  return (
    <BrowserRouter>
      <Auth>
        <Switch>
          <Route path="/content-audit" component={ContentAudit}/>
          <Redirect to="/content-audit"/>
        </Switch>
      </Auth>
    </BrowserRouter>
  );
};
