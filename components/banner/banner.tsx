import { DOMAttributes, HTMLAttributes } from "react";
import styles from "./banner.module.css";

interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  buttonText?: string;
  handleOnClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export const Banner = (props: Readonly<BannerProps>): JSX.Element => {
  const { buttonText = "", handleOnClick } = props;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee stores!</p>
      <button className={styles.button} onClick={handleOnClick}>
        {props.buttonText}
      </button>
    </div>
  );
};
