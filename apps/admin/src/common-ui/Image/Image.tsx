import { Component } from "solid-js";
import styles from './Image.module.scss';

const Image: Component = () => {
  return (
    <div class={styles['image-container']}>
      <img class={styles['gallery-image']} src="/images/borca.jpg" alt="gal"/>
    </div>
  );
};

export default Image;
