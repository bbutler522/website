import styles from './footer.module.scss'
import ContactForm from './contactform'


export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <ContactForm></ContactForm>
      </div>
    </div>
  )
}