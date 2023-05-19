import styles from './index.module.css'

const Navigation: React.FC = () => {
  return (
    <div className={styles.Navigation}>
      <div>Arthur&apos;s Portfolio</div>
      <nav className={styles.LogoBox}></nav>
      <div>
        <small className={styles.Copyright}>&copy; 2020-2023 Arthur</small>
      </div>
      <div>
        <small className={styles.Copyright}>Last Modified: hoge</small>
      </div>
    </div>
  )
}

export default Navigation
