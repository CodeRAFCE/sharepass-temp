import './subscribe.css';
import { useEffect, useState, Fragment } from "react";
import purplecorner from "../../../assets/images/purple-dots-top-right.avif";
import { ToastContainer, toast } from 'react-toastify';
import {apiUrl} from "../../../assets/js/blogConfig";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Subscribe = () => {
  const navigate = useNavigate();
  const notify = () => toast("News Letter Send SuccessFully.");


  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`${apiUrl}wp-json/custom-subscriber/v1/add-subscriber`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        notify()
        setEmail('')
      } catch (error) {
        // Handle error here
      }
    };
    const [email, setEmail] = useState('');
    const [formData, setFormData] = useState({});
    const handleChange = (e) => {
      setEmail(e.target.value);
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  return (
      <section className='subscribe'>
          <div className='content_sec'>
              <div className='square'>
              <ToastContainer toastStyle={{ top:"6em" }} />
                  <img src={purplecorner} alt="corner" />
                  <h3>Download our whitepaper, discover how SharePass works and receive lastest news in cybersecurity field</h3>
                  <form
                            action=""
                            method="post"
                            id="mc-embedded-subscribe-form"
                            name="mc-embedded-subscribe-form"
                            className="validate"
                            target="_blank"
                            noValidate=""
                            onSubmit={handleSubmit}>

                      {false && <div className='field_wrap'>

                          <input type='email' name="email" value={email} onChange={handleChange}  placeholder='Enter Your Email' />
                          <button type="submit">Subscribe</button>

                      </div>}

                      <div className='btn_wrap center'>
                        <button type="button" onClick={() => { navigate('/whitepaper'); }} className='first'>Whitepaper</button>
                      </div>
                      
                  </form>
              </div>
          </div>
      </section>
  )
}

export default Subscribe;