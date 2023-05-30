import {Component} from "solid-js";
import styles from "./Title.module.scss";

export interface TitleProps {
  captionText: string;
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fontWeight?: string;
  cssClass?: string;
}

const Title: Component<TitleProps> = ({
                                        captionText,
                                        size = 'h2',
                                        fontWeight = '600',
                                        cssClass = '',
                                      }: TitleProps) => {
  const titleStyle = {fontWeight}; // Wrap fontWeight in an object

  return (
    <div>
      {size === 'h1' && (
        <h1 class={`${styles[size]} ${cssClass}`} style={titleStyle}>
          {captionText}
        </h1>
      )}
      {size === 'h2' && (
        <h2 class={`${styles[size]} ${cssClass}`} style={titleStyle}>
          {captionText}
        </h2>
      )}
      {size === 'h3' && (
        <h3 class={`${styles[size]} ${cssClass}`} style={titleStyle}>
          {captionText}
        </h3>
      )}
      {size === 'h4' && (
        <h4 class={`${styles[size]} ${cssClass}`} style={titleStyle}>
          {captionText}
        </h4>
      )}
      {size === 'h5' && (
        <h5 class={`${styles[size]} ${cssClass}`} style={titleStyle}>
          {captionText}
        </h5>
      )}
      {size === 'h6' && (
        <h6 class={`${styles[size]} ${cssClass}`} style={titleStyle}>
          {captionText}
        </h6>
      )}
    </div>
  );
};

export default Title;
