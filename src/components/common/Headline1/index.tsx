import styles from './index.module.css'

type Headline1Props = Readonly<{
  children: React.ReactNode
}>

const Headline1: React.FC<Headline1Props> = ({ children }) => {
  return (
    <div className={styles.Headline1Box}>
      <h1 className={styles.Headline1}>{children}</h1>
    </div>
  )
}

export default Headline1
