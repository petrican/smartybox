import styles from './HeaderMenu.module.scss';
import {Component} from "solid-js";
//import { getCookie } from "@smartybox/libs/cookies";

const HeaderMenu: Component = () => {
  // const isAuthenticated = Boolean(getCookie('token'));
  return (
    <div class={styles['header-menu']}>Add</div>
  );
};

export default HeaderMenu;
