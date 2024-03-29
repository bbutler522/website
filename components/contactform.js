import styles from './contactform.module.scss'
import { useForm } from "react-hook-form";

export default function ContactForm(props) {

  let resultMessageText = "";
  const { register, handleSubmit, formState: { errors }} = useForm();

  const submitContactForm = async data => {
    console.log('Submitting form!')
    let result = {};
    let formElement = document.getElementById('contact');
    let successMessage = document.getElementById('success-message');
    let errorMessage = document.getElementById('error-message');
    let source = 'Main footer';
    if (props.source) {
      source = props.source;
    }
    console.log(source)
    
    const res = await fetch(
      'https://formsubmit.co/ajax/bbutler522@gmail.com',
      {
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          source: source
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
      <form id="contact" onSubmit={handleSubmit(submitContactForm)} className={styles.Contact_form}>
        
        <div className={styles.Contact_inputColWrap}>
          <div className={styles.Contact_inputCol}>
            <div className={styles.Contact_inputWrap}>
              <label htmlFor="name">
                <span className={styles.labelText}>Name</span>
                <input autoComplete="off" className={styles.Contact_input} name="name" tabIndex="0" {...register("name")} />
              </label>
            </div>
            <div className={styles.Contact_inputWrap}>
              <label htmlFor="email">
                <span className={styles.labelText}>Email</span>
                <input autoComplete="off" type="email" className={styles.Contact_input} name="email" tabIndex="0" required="" {...register("email", {required: "Required",})}/>
              </label>
            </div>
          </div>
        </div>
        <div className={`${styles.Contact_inputWrap} ${styles.Contact_inputWrapTextarea}`}>
          <label htmlFor="message">
            <span className={styles.labelText}>Message</span>
            <textarea autoComplete="off" className={`${styles.Contact_input} ${styles.Contact_input___textarea}`} rows="5" name="message" tabIndex="0" required="" {...register("message", {required: "Required",})}></textarea>
          </label>
        </div>
        {errors.email && <span className={styles.errorMessage}>Email is required</span>}
        {errors.message && <span className={styles.errorMessage}>Message is required</span>}
        <input type="submit" value="Contact Me" name="submit" className={styles.Contact_button} />

      </form>

      <div id="success-message" className={styles.resultMessage}>Your message has been sent!</div>
      <div id="error-message" className={styles.resultMessage}>There was an issue. Please try submitting again, or you can email me at <b>bbutler522@gmail.com</b></div>
    </div>
  )
}