import styles from './index.module.css'

type ContainerProps = Readonly<{
  children?: React.ReactNode
}>

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className={styles.Container}>{children}</div>
)

export default Container
