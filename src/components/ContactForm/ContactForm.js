import React, { Component } from 'react';
import emailjs from 'emailjs-com';

// styling
import './ContactForm.scss';

export default class ContactForm extends Component {
    

    sendEmail(e) {

        e.preventDefault();
        let user_name = e.target.user_name.value;
        let user_email = e.target.user_email.value;
        let user_telephone = e.target.user_telephone.value;
        let message = e.target.message.value;
        let reason = e.target.selectorReason.value;
        
        let user = process.env.REACT_APP_EMAILJS_USER;

        emailjs.send('portfolio-contact', 'contact_form', {user_name, user_email, user_telephone, reason, message}, user)
        .then((result) => {
          console.log(result.text);
          // clear the form
            let clearInputName = document.querySelector('.contact__name-field');
            clearInputName.value = " ";
            let clearInputEmail = document.querySelector('.contact__email-field');
            clearInputEmail.value = " ";
            let clearInputTelephone = document.querySelector('.contact__telephone-field');
            clearInputTelephone.value = "";
            let clearInputSelector = document.querySelector('.contact__selector-field');
            clearInputSelector.value = " ";
            let clearInputMessage = document.querySelector('.contact__message-field');
            clearInputMessage.value = "Thank you for your query! ";

        }, (error) => {
            console.log(error.text);
        });

  }

  
    render() {
        return (
            <div className="contact">
                <h2 className="contact__title">Contact for more information</h2>
                <form className="contact__form" onSubmit={this.sendEmail}>
                    {/* <input type="hidden" name="contact_number" /> */}
                    <div className="contact__name">
                        <label className="contact__name-label">Name</label>
                        <input className="contact__name-field" type="text" name="user_name" required />
                    </div>
                    <div className="contact__email"> 
                        <label className="contact__email-label">Email</label>
                        <input className="contact__email-field" type="email" name="user_email" required/>
                    </div>
                    <div className="contact__telephone">
                        <label className="contact__telephone-label">Telephone</label>
                        <input className="contact__telephone-field" type="number" name="user_telephone" required/>
                    </div>
                    <div className="contact__selector">
                    <   label className="contact__selector-label" htmlFor="selectorReason">Reason for reaching out</label>
                        <select className="contact__selector-field" id="selectorReason" required>
                            <option>Please select one of the following</option>
                            <option value="Hiring">Hiring a web developer</option>
                            <option value="Contracting">Contracting a web developer</option>
                            {/* <option value="Residential">Looking for a residential mortgage</option>
                            <option value="Commercial">Need a commercial mortgage</option>
                            <option value="Coaching">Collection agents are hounding me. Need help!</option>
                            <option value="CreditCard">Want a top quality cash-back credit card</option> */}
                            <option value="Other">I want to discuss something else with you</option>
                        </select>
                    </div>
                    <div className="contact__message">
                        <label className="contact__message-label">Message</label>
                        <textarea className="contact__message-field" name="message" required/>
                    </div>
                    <div class="g-recaptcha" data-sitekey='6LclasoUAAAAAPEO3KKkAR5HQXz0OR7aD_zZCtC-'></div>

                    <button className="contact__button" name="contact-button">Send</button>
                </form> 
            </div>
        );
    }
}