import {Component, JSX} from 'solid-js';
import {useNavigate} from '@solidjs/router';
import { getCookie } from "@smartybox/libs/cookies";

interface ProtectedRouteProps {
  component: Component;
  path: string;
}

export function PrivateRoute(props: ProtectedRouteProps): JSX.Element {
  const navigate = useNavigate();
  const isAuthenticated = Boolean(getCookie('token'));
  const ChildComponent = props.component;

  if (!isAuthenticated) {
    navigate('/login'); // Redirect to the login page
  }

  return <ChildComponent />;
}

export default PrivateRoute;
