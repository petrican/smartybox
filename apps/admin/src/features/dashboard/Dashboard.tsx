import styles from './Dashboard.module.scss';
import { Component } from "solid-js";
// import { deleteCookie } from "@smartybox/libs/cookies";
// import { useNavigate } from "@solidjs/router";

const Dashboard: Component = () => {
  // const navigate = useNavigate();
  // const handleLogout = () => {
  //   deleteCookie('token')
  //   navigate('/login');
  // }

  return (
    <div class={styles['dashboard']}>
      <div class={styles['column-left']}>Column 1</div>
      <div class={styles['column-center']}>Column 2</div>
      <div class={styles['column-right']}>Column 3</div>

      {/*Dashboard <button onClick={handleLogout}>Logout</button>*/}
    </div>
  );
};

export default Dashboard;
