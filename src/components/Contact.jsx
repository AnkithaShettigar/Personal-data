import React from 'react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AiOutlineMail } from 'react-icons/ai';
import { MdWifiCalling3, MdOutlineLocationOn } from 'react-icons/md';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [email, setEmail] = useState('');

  const form = useRef();

  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(e);
    console.log(form.current);

    const templateparams = {
      from_name: name + ' ' + email,
      to_name: 'ankitha.yermal@gmail.com',
      feedback: message,
    };
    emailjs
      .send(
        'service_tc317jb',
        'template_tyam1ra',
        templateparams,
        'l-pB7e4sAqDzmUQpB'
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
  };

  return (
    <div className="main1" id="contact">
      <h1
        className="contacttext"
        style={{ color: '#105652', textAlign: 'center' }}
      >
        Contact
      </h1>
      <hr className="hrc" />
      <div className="contactpage">
        <div className="contleft">
          <h3
            style={{ color: '#105652', marginTop: '100px', marginLeft: '50px' }}
          >
            Let's Connect
          </h3>
          <p
            className="contactp"
            style={{ fontSize: '13px', marginLeft: '50px' }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta…
          </p>
          <div className="detail" style={{ color: 'grey' }}>
            <p>
              <span className="email" style={{ fontSize: '25px' }}>
                <AiOutlineMail />{' '}
              </span>
              <span style={{ position: 'absolute', fontSize: '12px' }}>
                ankitha.yermal@gmail.com{' '}
              </span>
            </p>
            <p>
              <span style={{ fontSize: '25px' }}>
                <MdWifiCalling3 />
              </span>
              <span style={{ position: 'absolute', fontSize: '12px' }}>
                {' '}
                +917760942148
              </span>
            </p>
            <p>
              <span style={{ fontSize: '25px' }}>
                <MdOutlineLocationOn />
              </span>
              <span
                style={{
                  position: 'absolute',
                  width: '300px',
                  fontSize: '12px',
                }}
              >
                7/127 KITTU GUDDE YERMAL THENKA UDUPI DISTRICT-KARNATAKA
              </span>
            </p>
          </div>
        </div>
        <div className="contright">
          <h3
            style={{ color: '#105652', marginLeft: '60px', marginTop: '50px' }}
          >
            Send me a message
          </h3>
          <form ref={form} onSubmit={sendEmail} className="form-box">
            <div className="input-name">
              <label>
                First & Last Name<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                name="user_name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div className="input-name">
              <label>
                Phone number<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="phone"
                name="user_phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                required
              />
            </div>
            <div className="input-name">
              <label>
                Email address<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="email"
                name="user_email"
                value={email}
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="input-name">
              <label>
                Message<span style={{ color: 'red' }}>*</span>
              </label>
              <textarea
                name="message"
                cols="30"
                rows="8"
                value={message}
                id="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
              />
            </div>
            <div className="input-name">
              <input type="submit" className="msgbtn" value="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
