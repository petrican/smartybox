import { Component } from "solid-js";
import  Button  from '../Button/Button';
import { deleteCookie } from "@smartybox/libs/cookies";
import { useNavigate } from "@solidjs/router";
import styles from './Header.module.scss';
import useCookieSync from "../../hooks/useCookieSync";


const Header: Component = () => {
  const navigate = useNavigate();

  const [sharedState] = useCookieSync();

  const handleLogout = () => {
    deleteCookie('token');
    navigate('/');
    window.dispatchEvent(new Event("cookieChange"));
  };


  return (
    <header class={styles['header']}>
      <div class={styles['header-logo']}>
        &nbsp;
      </div>
      <div class={styles['header-title']}>
        <a href="/">Smartybox</a>
      </div>
      <div class={styles['login-button']}>
        {sharedState({ token: ''}).token ? (<Button handleClick={handleLogout} caption="Logout" />) : (<a href="/login">Login</a>)}
      </div>
    </header>
  );
};

export default Header;
