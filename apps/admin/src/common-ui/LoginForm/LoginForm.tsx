import styles from './LoginForm.module.scss';
import {createSignal,Component, onMount} from "solid-js";
import Title from "../Title/Title";


import { environment } from '../../environments/environment';
import { getCookie, setCookie } from "@smartybox/libs/cookies";
import { useNavigate } from "@solidjs/router";


type FormData = {
  username: string;
  password: string;
};

type FormErrors = {
  username: string;
  password: string;
  server?: string;
};


const LoginForm: Component = () => {
  const navigate = useNavigate();
  const apiUrl = environment.apiUrl + '/login';
  const isAuthenticated = Boolean(getCookie('token'));

  if (isAuthenticated) { // Already authenticated
    navigate('/');
  }

  const [formData, setFormData] = createSignal<FormData>({
    username: "",
    password: "",
  });

  const [errors, setErrors] = createSignal<FormErrors>({
    username: "",
    password: "",
    server: ""
  });

  const [isLoaded, setIsLoaded] = createSignal(false);

  onMount(() => {
    setTimeout(() => { setIsLoaded(true); }, 1000);
  })

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      username: formData().username.trim() === "" ? "Username is required." : "",
      password:
        formData().password.length < 6
          ? "Password must be at least 6 characters."
          : "",
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };


  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData()),
        });

        if (response.ok) {
          // Login successful, handle the success scenario
          const data = await response.json();
          const { token } = data;
          setCookie({ cookieName: 'token', cookieValue: token, expireDays: 1 });

          window.dispatchEvent(new Event("cookieChange"));
          navigate('/');
        } else {
          // Login failed, handle the error scenario
          console.error('LOGIN failed')
          const servErrors: FormErrors = {
            username: "",
            password: "",
            server: "Invalid credentials. Pls retry."
          };

          setErrors(servErrors);
          window.dispatchEvent(new Event("cookieChange"));
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.log('Form contains errors')
    }

  };


  return (
    <div class={styles[isLoaded() ? 'login-form' : 'login-form-hidden']}>
      <Title
        captionText="Login"
        size="h1"
        fontWeight="600"
        cssClass={styles['login-form-title']}
      />
      <form onSubmit={handleSubmit}>
        <div class={styles['username-wrapper']}>
          <input type="text"
                 name="username"
                 placeholder="Username"
                 autofocus={true}
                 value={formData().username}
                 onInput={(e) => setFormData({ ...formData(), username: e.target.value })}
          />
          <span class={styles['error-message']}>{errors().username}</span>
        </div>
        <div  class={styles['password-wrapper']}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData().password}
            onInput={(e) =>
              setFormData({ ...formData(), password: e.target.value })
            }
          />
          <span class={styles['error-message']}>{errors().password}</span>
          <span class={styles['error-message']}>{errors().server}</span>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>

      </form>
    </div>
  );
};

export default LoginForm;
