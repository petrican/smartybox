import styles from './LoginForm.module.scss';
import {Component} from "solid-js";
import Title from "../Title/Title";

const LoginForm: Component = () => {

  return (
    <div class={styles['login-form']}>
      <Title
        captionText="Login"
        size="h1"
        fontWeight="600"
        cssClass={styles['login-form-title']}
      />
    </div>
  );
};

export default LoginForm;
