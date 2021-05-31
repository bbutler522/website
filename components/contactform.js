import styles from './contactform.module.scss'

export default function ContactForm() {
    const registerUser = async event => {
      event.preventDefault() 
      let result = {};
      let formElement = document.getElementById('contact-form');
      let resultMessage = document.getElementById('result-message');
      
      const res = await fetch(
        'https://formsubmit.co/ajax/brennanmade@gmail.com',
        {
          body: JSON.stringify({
            name: event.target.name.value
          }),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          method: 'POST'
        }
      )
      .then(response => response.json())
      .then(data => result = data)
      .catch(error => console.log(error));

      if (result.success == 'true') {
        formElement.classList.add(styles.success)
        resultMessage.classList.add(styles.submitSuccess)
        resultMessage
      }
    }
  
    return (
      <div>
        <form id="contact-form" onSubmit={registerUser} className={styles.Contact_form}>
          
          <div className={styles.Contact_inputColWrap}>
            <div className={styles.Contact_inputCol}>
              <div className={styles.Contact_inputWrap}>
                <label htmlFor="name">
                  <span className="visually-hidden">Name</span>
                  <input autoComplete="off" className={styles.Contact_input} name="name" placeholder="Name" tabIndex="0" />
                </label>
              </div>
              <div className={styles.Contact_inputWrap}>
                <label htmlFor="email">
                  <span className="visually-hidden">Email</span>
                  <input autoComplete="off" type="email" className={styles.Contact_input} name="email" placeholder="Email" tabIndex="0" required="" />
                </label>
              </div>
            </div>
            <div className={styles.Contact_inputCol}>
              <div className={styles.Contact_inputWrap}>
                <label htmlFor="company">
                  <span className="visually-hidden">Company Name</span>
                  <input autoComplete="off" className={styles.Contact_input} name="company" placeholder="Company Name" tabIndex="0" />
                </label>
              </div>
              <div className={styles.Contact_inputWrap}>
                <label htmlFor="referral">
                  <span className="visually-hidden">How did you hear about me?</span>
                  <input autoComplete="off" className={styles.Contact_input} name="referral" placeholder="How did you hear about me?" tabIndex="0" />
                </label>
              </div>
            </div>
          </div>
          <div className={`${styles.Contact_inputWrap} ${styles.Contact_inputWrapTextarea}`}>
            <label htmlFor="referral">
              <span className="visually-hidden">What can I work on with you?</span>
              <textarea autoComplete="off" className={`${styles.Contact_input} ${styles.Contact_input___textarea}`} name="message" placeholder="What can I work on with you?" tabIndex="0" required=""></textarea>
            </label>
          </div>
          <input type="submit" value="Contact Me" name="submit" className={styles.Contact_button} />

        </form>

        <div id="result-message" className={styles.resultMessage}></div>
      </div>
    )
  }