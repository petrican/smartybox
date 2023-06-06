import styles from './LoginForm.module.scss';
import {createSignal,Component, onMount} from "solid-js";
import Title from "../Title/Title";

const LoginForm: Component = () => {
  const [isLoaded, setIsLoaded] = createSignal(false);

  onMount(() => {
    setTimeout(() => { setIsLoaded(true); }, 1000);
  })

  return (
    <div class={styles[isLoaded() ? 'login-form' : 'login-form-hidden']}>
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
