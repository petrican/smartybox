import styles from './Header.module.scss';
import {Component} from "solid-js";

const Header: Component = () => {
  return (
    <header class={styles['header']}>
      <div class={styles['header-logo']}>
        &nbsp;
      </div>
      <div class={styles['header-title']}>
        Smartybox
      </div>
      <div class={styles['login-button']}>
        <a href="/login">Login</a>
      </div>
    </header>
  );
};

export default Header;
