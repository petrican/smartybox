import type { Component } from 'solid-js';
import {Route, Routes} from "@solidjs/router";
import Header from "./common-ui/Header/Header";
import NotFound from "./common-ui/NotFound/NotFound";

const App: Component = () => {
  return (
    <div>
      <Header />
      <Routes>
        {/*<Route path="/users" component={Users} />*/}
        {/*<Route path="/" component={Home} />*/}
        <Route path="/login" element={<div>This site was made with Solid</div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
