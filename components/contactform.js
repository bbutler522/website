import styles from './contactform.module.scss'

export default function ContactForm() {
    const registerUser = async event => {
      event.preventDefault() 
      let result = {};
      let formElement = document.getElementById('contact-form');
      
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
        console.log('true')
        formElement.classList.add('success')
      }
    }
  
    return (
      <form id="contact-form" onSubmit={registerUser} className={styles.contactForm}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
        <button type="submit">Register</button>
      </form>
    )
  }