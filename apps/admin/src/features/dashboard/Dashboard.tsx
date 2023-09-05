import styles from './Dashboard.module.scss';
import { Component } from "solid-js";
import { deleteCookie } from "@smartybox/libs/cookies";
import { useNavigate } from "@solidjs/router";

const Dashboard: Component = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    deleteCookie('token')
    navigate('/login');
  }

  return (
    <header class={styles.header}>
      Dashboard <button onClick={handleLogout}>Logout</button>
    </header>
  );
};

export default Dashboard;
