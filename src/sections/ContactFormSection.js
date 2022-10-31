import React, { useState } from 'react'

const ContactFormSection = () => {
    const [ contactForm, setContactForm ] = useState ({name: '', email: '', comment: ''})
    const [formErrors, setFormErrors] = useState ({})
    const [submitted, setCanSubmitted] = useState(false)
 

    const validate = (values) => {
        const errors = {}
        const regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(!values.name)
            errors.name = "You must enter a name"
        else if (values.name.length < 2)
            errors.name= "Your name must be longer then 2 characters"

        if(!values.email) 
            errors.email = "You must enter an e-mail address"
        else if (!regex_email.test(values.email)) 
            errors.email = "You must enter a valid e-mail address (ex.name@domain.com)"


        if(!values.comment)
            errors.comment = "You must enter a comment"
        else if (values.comment.length < 5)
            errors.comment = "Your comment must be longer then 5 characters"

        if(Object.keys(errors).length===0)
            setCanSubmitted(true)
        else
            setCanSubmitted(false)


        return errors;
    }
  

    const handleChange = (e) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors (validate(contactForm))

    }

  return (
    <section className="contact-form">
    <div className="container">
        {
            submitted ? 
                (<div className="d-flex justify-content-center- align-items-center">
                <div>Thank you for your comment!</div>
                </div>)
                :
                (
                <>
                <h2>Come in Contact with Us</h2>
                    <pre>{ JSON.stringify(formErrors)}</pre>
                     <form onSubmit={handleSubmit} noValidate>
                        <div>
                            <input id="name" type="text" onkeyup="validate(event)"  placeholder="Your name"  value={contactForm.name} onChange={handleChange}  />
                                <div className="errorMessage">{formErrors.name}</div>
                            </div>
                            <div>
                            <input id="email" type="email" onkeyup="validate(event)" placeholder="Your email" value={contactForm.email} onChange={handleChange} className="error"  />
                                <div className="errorMessage">{formErrors.email}</div>
                                </div>
                            <div className="textarea">
                                <textarea id="comment" onkeyup="validate(event)" placeholder="Comments" value={contactForm.comment} onChange={handleChange} > </textarea>
                                <div className="errorMessage">{formErrors.comment}</div>
                                </div>
                                <div>
                            <button type="submit" className="btn-theme">
                                <span className="corner-topLeft"></span>
                                <span className="corner-bottomRight"></span>
                                Post Comments
                            </button>
                        </div>
                    </form>
                </>
            )
        }
</div>
</section>
  )
}


export default ContactFormSection