import styles from './Header.module.css';
import {Component} from "solid-js";

const Header: Component = () => {
  return (
    <header class={styles.header}>
       Smartybox
    </header>
  );
};

export default Header;
