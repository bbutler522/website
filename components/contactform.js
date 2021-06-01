import styles from './contactform.module.scss'

export default function ContactForm() {

  let resultMessageText = "";

  const submitContactForm = async event => {
    event.preventDefault() 
    console.log('Submitting form!')
    let result = {};
    let formElement = document.getElementById('contact-form');
    let successMessage = document.getElementById('success-message');
    let errorMessage = document.getElementById('error-message');
    
    const res = await fetch(
      'https://formsubmit.co/ajax/brennanmade@gmail.com',
      {
        body: JSON.stringify({
          name: event.target.name.value,
          email: event.target.email.value,
          company: event.target.company.value,
          referral: event.target.referral.value,
          message: event.target.message.value
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
      errorMessage.classList.remove(styles.submitError)
      successMessage.classList.add(styles.submitSuccess)
    } else {
      successMessage.classList.remove(styles.submitSuccess)
      errorMessage.classList.add(styles.submitError)
    }
  }

  return (
    <div>
      <form id="contact-form" onSubmit={submitContactForm} className={styles.Contact_form}>
        
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
          <label htmlFor="message">
            <span className="visually-hidden">What can I work on with you?</span>
            <textarea autoComplete="off" className={`${styles.Contact_input} ${styles.Contact_input___textarea}`} name="message" placeholder="What can I work on with you?" tabIndex="0" required=""></textarea>
          </label>
        </div>
        <input type="submit" value="Contact Me" name="submit" className={styles.Contact_button} />

      </form>

      <div id="success-message" className={styles.resultMessage}>Your message has been sent!</div>
      <div id="error-message" className={styles.resultMessage}>There was an issue. Please check your input and try submitting again. Or you can email me directly at <b>hello@brennanmade.com</b></div>
    </div>
  )
}