import styles from './index.module.css'

type Headline2Props = Readonly<{
  children: React.ReactNode
}>

const Headline2: React.FC<Headline2Props> = ({ children }) => (
  <h2 className={styles.Headline2}>{children}</h2>
)

export default Headline2
