import {Component, JSX} from 'solid-js';
import {useNavigate} from '@solidjs/router';

interface ProtectedRouteProps {
  component: Component;
  isAuthenticated: boolean;
  path: string;
}

export function PrivateRoute(props: ProtectedRouteProps): JSX.Element {
  const navigate = useNavigate();
  const {isAuthenticated} = props;
  const ChildComponent = props.component;

  if (!isAuthenticated) {
    navigate('/login'); // Redirect to the login page
    return null; // Render nothing during the redirect
  }

  return <ChildComponent />;
}

export default PrivateRoute;
