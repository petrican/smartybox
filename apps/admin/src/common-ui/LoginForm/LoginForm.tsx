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
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" autofocus={true} />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>

      </form>
    </div>
  );
};

export default LoginForm;
