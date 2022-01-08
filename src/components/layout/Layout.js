import MainNavigation from "./MainNavigation";
import styles from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
