import styles from './LoginForm.module.scss';
import {createSignal,Component, onMount} from "solid-js";
import Title from "../Title/Title";

type FormData = {
  username: string;
  password: string;
};

type FormErrors = {
  username: string;
  password: string;
};


const LoginForm: Component = () => {
  const [formData, setFormData] = createSignal<FormData>({
    username: "",
    password: "",
  });

  const [errors, setErrors] = createSignal<FormErrors>({
    username: "",
    password: "",
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


  const handleSubmit = (e: Event) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('F:', formData())
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
        <div>
          <input type="text"
                 name="username"
                 placeholder="Username"
                 autofocus={true}
                 value={formData().username}
                 onInput={(e) => setFormData({ ...formData(), username: e.target.value })}
          />
          <span class={styles['error-message']}>{errors().username}</span>
        </div>
        <div>
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
        </div>
        <div>
          <button type="submit">Login</button>
        </div>

      </form>
    </div>
  );
};

export default LoginForm;
