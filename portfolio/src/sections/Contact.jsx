import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    // whenever the input changes
    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value})
    }
    // send emails with Email.js
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send(
                'service_y0nrjt7',
                'template_t2879gs',
                {
                    from_name: form.name,
                    to_name: 'Dejan',
                    from_email: form.email,
                    to_email: 'dejan.jovovic2001@gmail.com',
                    message: form.message
                }, 'cPKYmPDSr1vDJNjy2')
            setLoading(false);

            alert('Your message has been sent!')
            setForm({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert('Something went wrong!')
        }
    }


    return (
        <section className="c-space my-20">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background"
                     className="absolute inset-0 min-h-screen"/>
                <div className="contact-container">
                    <h3 className="head-text mt-3">Let's talk</h3>
                    <p className="text-lg text-white-600 mt-3">Whether you are looking to build a new mobile
                        application, or perhaps a web application, improve your existing platform, or bring a new
                        project to life, I am here to help.</p>
                    <form ref={formRef} onSubmit={handleSubmit}
                          className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">
                                Full Name
                            </span>
                            <input type="text"
                                   name="name"
                                   value={form.name}
                                   onChange={handleChange}
                                   required
                                   className="field-input"
                                   placeholder="Your name"/>
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">
                                Email
                            </span>
                            <input type="email"
                                   name="email"
                                   value={form.email}
                                   onChange={handleChange}
                                   required
                                   className="field-input"
                                   placeholder="Your email address"/>
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">
                                Your message
                            </span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Hi, I want to offer you a job..."/>
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}

                            <img src="/assets/arrow-up.png" alt="arrow-up"
                                 className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact
