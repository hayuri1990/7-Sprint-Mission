import Nav from './components/Nav';
import styles from './styles/HomePage.css';

function App({ children }) {
  return (
    <>
      <Nav className={styles.nav} />
      <div className={styles.body}>{children}</div>
    </>
  );
}

export default App;
