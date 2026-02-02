import styles from "./Button.module.css";
export default function Button() {
  return (
    <button
      className={styles.btn}
      style={{ background: "red", color: "skyblue" }}
    >
      Button
    </button>
  );
}
