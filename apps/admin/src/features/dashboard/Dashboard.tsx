import styles from './Dashboard.module.scss';
import { Component } from "solid-js";
import HeaderMenu from "../../common-ui/HeaderMenu/HeaderMenu";
import useCookieSync from "../../hooks/useCookieSync";

const Dashboard: Component = () => {
  const [sharedState] = useCookieSync();

  return (
    <div class={styles['dashboard']}>
      {sharedState().token ? <HeaderMenu /> : null}
      <div class={styles['dashboard-content']}>
        <div class={styles['column-left']}>Column 1</div>
        <div class={styles['column-center']}>Column 2</div>
        <div class={styles['column-right']}>Column 3</div>
      </div>
    </div>
  );
};

export default Dashboard;
