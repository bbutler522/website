import styles from './footer.module.scss'
import ContactForm from './contactform'
import { useRef } from 'react';



export default function Footer() {

  function copyToClipboard() {
    let copyText = document.getElementById("email-copy");
    let copyNotice = document.getElementById("copy-notice");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    copyNotice.classList.add(styles.success);
    setTimeout(function(){
      copyNotice.classList.remove(styles.success);
    }, 2000);
  }

  return (
    <div className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.footerText_container}>
          <h2>Want to bring your ideas to life?</h2>
          <p>Have an exciting project that could use my help? Need a consultation? Get in touch and let's chat!</p>
          <p>Use the form or <a href="mailto:hello@brennanbutler.com">email me</a> at <span className={styles.copyButton} onClick={() => copyToClipboard()}>hello@brennanbutler.com</span></p>
          <div id="copy-notice" className={styles.copyNotice}>Email copied to clipboard</div>
          <input id="email-copy" className={styles.copyText} defaultValue="hello@brennanbutler.com"></input>
        </div>
        

        <div className={styles.contact_container}>
          <ContactForm></ContactForm>
        </div>
      </div>


      <div className={`${styles.footerLowerWrapper}`}>
        <div className={`${styles.footerLowerContainer} container`}>
          <div className={styles.footerAbout}>
            My name is Brennan Butler and I'm creatively driven, and technically skilled. I'm here to help bring your ideas to life and to make an impact. Any project size is welcome!
          </div>

          <div className={styles.footerLinks}>
            
          </div>

          <div className={styles.footer_buildNote}>
            This site is built with NextJS, React, and SCSS. Designed in Figma. Source code available on <a href="https://github.com/bbutler522/website" target="_blank">Github</a>.
          </div>
        </div>
      </div>
    </div>
  )
}