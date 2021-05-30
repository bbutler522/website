import styles from './footer.module.scss'
import ContactForm from './contactform'


export default function Footer() {
  return (
    <div className={styles.footer}>
      <ContactForm></ContactForm>
    </div>
  )
}