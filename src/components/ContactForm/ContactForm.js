import React, { Component } from 'react';
import emailjs from 'emailjs-com';

// styling
import './ContactForm.scss';

export default class ContactForm extends Component {

    sendEmail(e) {
        e.preventDefault();
        console.log('event info:', e);

        emailjs.sendForm('portfolio-contact', 'contact_form', e.target, 'user_jXBhIUn5sDqtvzmD9FKA6')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
  }

    render() {
        return (
            <div>
                <form className="contact-form" onSubmit={this.sendEmail}>
                    <input type="hidden" name="contact_number" />
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form> 
                {/* <form action="?" method="POST">
                    <div class="g-recaptcha" data-sitekey="6LclasoUAAAAAPEO3KKkAR5HQXz0OR7aD_zZCtC-"></div>
                    <br/>
                    <input type="submit" value="Submit"></input>
                </form> */}
            </div>
        );
    }
}