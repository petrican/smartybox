import type { Component } from 'solid-js';
import {Route, Routes} from "@solidjs/router";
import Header from "./common-ui/Header/Header";
import NotFound from "./common-ui/NotFound/NotFound";
import LoginForm from "./common-ui/LoginForm/LoginForm";

import styles from './App.module.scss';
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./features/dashboard/Dashboard";

const App: Component = () => {
  return (
    <div>
      <Header />
      <div class={styles['container']}>
        <Routes>
          {/*<Route path="/users" component={Users} />*/}
          <Route path="/" component={<PrivateRoute path="/" component={Dashboard} />} />
          <Route path="/login" component={LoginForm} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
