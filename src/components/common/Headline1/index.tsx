import styles from './index.module.css'

type Headline1Props = Readonly<{
  children: React.ReactNode
}>

const Headline1: React.FC<Headline1Props> = ({ children }) => {
  return (
    <div className={styles.headlineBox}>
      <h1 className={styles.headline}>{children}</h1>
    </div>
  )
}

export default Headline1
