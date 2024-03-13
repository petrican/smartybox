import styles from './Button.module.scss';
import { Component } from "solid-js";

export interface ButtonProps {
  caption: string;
  handleClick?: () => void;
  padding?: string;

}
const Button: Component<ButtonProps> = ({ caption, padding = '0.5rem 2rem', handleClick }) => {

  return (
    <button style={{  padding }}  class={styles['button']} onClick={() => handleClick && handleClick()} >{caption}</button>
  )
}

export default Button;
