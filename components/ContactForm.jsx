
import { useState } from 'react';
import { useRouter } from 'next/router';

// styles
import styles from './scss/form.module.scss';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ContactForm = ({formName = "contact-form", action="/contact/thanks", pageLocation =""}) => {
  //const [isValidated, setIsValidated] = useState(false);
  const [fields, setFields] = useState({});
  const router = useRouter();

    const handleChange = e => {
        setFields({
          ...fields,
           [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': formName,
            ...fields
          })
        })
          .then(() => router.push(action))
          .catch(error => alert(error));
    }

  return (
    <form
      name={formName}
      method='post'
      action={action}
      data-netlify='true'
      data-netlify-honeypot='bot-field'
      onSubmit={handleSubmit}
      className={styles.form}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type='hidden' name='form-name' value={formName} />
      <input type='hidden' name='page-sent-from' value={pageLocation} />
      <div hidden>
        <label>
          Don’t fill this out:{' '}
          <input name='bot-field' onChange={handleChange} />
        </label>
      </div>

      <div className={styles.field}>
        <label className='label' htmlFor={'txtName'}>
          Your name
        </label>
        <div className='control'>
          <input
            id='txtName'
            name='name'
            className='input'
            type='text'
            placeholder='Alice Jones'
            onChange={handleChange}
            required={true}
          />
        </div>
      </div>
      <div className={styles.field}>
        <label className='label' htmlFor={'txtEmail'}>
          Your email address
        </label>
        <div className='control'>
          <input
            id='txtEmail'
            name='email'
            className='input'
            type='email'
            placeholder='alice.jones@outlook.com'
            onChange={handleChange}
            required={true}
          />
        </div>
      </div>
      <div className={styles.field}>
        <label className='label' htmlFor={'txtMessage'}>
          Your message
        </label>
        <div className='control'>
          <textarea
            id='txtMessage'
            name='message'
            className='textarea'
            placeholder='Hey Rob, I have an exciting WordPress or web development project I want to talk about'
            onChange={handleChange}
            required={true}
          />
        </div>
      </div>
      <div className={styles.field}>
        <div className='control'>
          <button type='submit' className='button is-primary is-medium'>
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
