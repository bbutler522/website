import styles from './footer.module.scss'
import ContactForm from './contactform'
import Image from 'next/image'




export default function Footer(props) {

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
          <h2>{props.headline ? (props.headline) : (`Want to bring your ideas to life?`)}</h2>
          <p>{props.subhead ? (props.subhead) : (`Have an exciting project that could use my help? Need a consultation? Get in touch and let's chat!`)}</p>

          <p>Use the form or <a href="mailto:bbutler522@gmail.com">email me</a> at <span className={styles.copyButton} onClick={() => copyToClipboard()}>bbutler522@gmail.com</span></p>
          <div id="copy-notice" className={styles.copyNotice}>Email copied to clipboard</div>
          <input id="email-copy" className={styles.copyText} defaultValue="bbutler522@gmail.com"></input>
        </div>
        

        <div className={styles.contact_container}>
          <ContactForm source={props.source}></ContactForm>
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

          <div className={styles.footerSocial}>
            <div className={styles.footerSocialLinkContainer}>
              <a className={styles.footerSocialLink} href="https://www.linkedin.com/in/butlerbrennan/">
                <span className="visually-hidden">Linkedin</span>
                <Image
                  src="/images/social/linkedin.svg"
                  height={50}
                  width={50}
                  layout="responsive"
                />
              </a>
              <a className={styles.footerSocialLink} href="https://github.com/bbutler522/">
                <span className="visually-hidden">Github</span>
                <Image
                  src="/images/social/github.svg"
                  height={50}
                  width={50}
                  layout="responsive"
                />
              </a>
              <a className={styles.footerSocialLink} href="https://www.instagram.com/brennanrome/">
                <span className="visually-hidden">Instagram</span>
                <Image
                  src="/images/social/instagram.svg"
                  height={50}
                  width={50}
                  layout="responsive"
                />
              </a>
              <a className={styles.footerSocialLink} href="https://twitter.com/BrennanRome">
                <span className="visually-hidden">Twitter</span>
                <Image
                  src="/images/social/twitter.svg"
                  height={50}
                  width={50}
                  layout="responsive"
                />
              </a>
              <a className={styles.footerSocialLink} href="https://soundcloud.com/brennanbutler/">
                <span className="visually-hidden">SoundCloud</span>
                <Image
                  src="/images/social/soundcloud.svg"
                  height={50}
                  width={50}
                  layout="responsive"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}