import styles from './Dashboard.module.scss';
import { Component } from "solid-js";
import HeaderMenu from "../../common-ui/HeaderMenu/HeaderMenu";
import useCookieSync from "../../hooks/useCookieSync";
import Image from '../../common-ui/Image/Image';

const Dashboard: Component = () => {
  const [sharedState] = useCookieSync();

  return (
    <div class={styles['dashboard']}>
      {sharedState().token ? <HeaderMenu /> : null}
      <div class={styles['dashboard-content']}>
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
      </div>
    </div>
  );
};

export default Dashboard;
