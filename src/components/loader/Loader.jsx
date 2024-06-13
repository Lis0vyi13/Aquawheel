import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className="fixed z-[1000] bg-white inset-0 flex items-center justify-center">
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
