import React, { useState } from 'react';
import { Button, Icon, Textarea, TextInput } from 'react-materialize';

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        email: "",
        subject:"",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        console.log(name, value);
        if (name === 'fullname' || name === 'email' || name === 'subject' || name === 'message') {
            setData((prevState) => {
                return {
                    ...prevState,
                    [name]: value,
                };

            });
        
        };
    };

        const resetForm = () => {
            setData({fullname: '', email: '', subject:'', message: ''})
        }
        
    //    const handleSubmit = (e) => {
    //        e.preventDefault();
    //        axios.post("/send", { data })
    //            .then((response) => {
    //           if (response.data.status === 'success'){
    //               alert("Message Sent."); 
    //               resetForm()
    //           }else if(response.data.status === 'fail'){
    //               alert("Message failed to send.")
    //           }
    //            })
    //            console.log(data)
    //     }
    
   
  return (
      <section id='contact'>
          <h3 className="center-align">Contact</h3>
                      <form >
                          <div className="row wrap">
                          <div className="input-field col s12">
                              <p>Name (First and Surname)</p>
                                  <TextInput
                                      type="text"
                                      name="fullname"
                                      value={data.fullname}
                                      onChange={handleChange}
                                      className="browser-default validate c-input"
                                      placeholder="Your answer"
                                  />
                            </div>
                        </div>
                         
                          <div className="row wrap">
                            <div className="input-field col s12">
                                <p>Email Address</p>
                                    <TextInput
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        onChange={handleChange}
                                        className="browser-default validate c-input"
                                        placeholder="Your answer"
                                    />
                                </div>
                         </div>
                          
                         
                          <div className="row wrap">
                            <div className="input-field col s12">
                                    <p>Subject</p>
                                    <TextInput
                                        type="text"
                                        name="subject"
                                        value={data.subject}
                                        onChange={handleChange}
                                        className="browser-default validate c-input"
                                        placeholder="Your answer"
                                    />
                                </div>
                         </div>
                          
                         
                          <div className="row wrap">
                            <div className="input-field col s12 ">
                                <p>Message</p>
                                    <Textarea
                                        name="message"
                                        value={data.message}
                                        type="text"
                                        onChange={handleChange}
                                        className="browser-default validate c-input"
                                        placeholder="Your answer"
                                    />
                                </div>
                          </div>
                <div className="button center-align">
                    <Button
                        node="button"
                        type="submit"
                
                    >
                            Submit
                        <Icon right>
                            send
                        </Icon>
                    </Button>
                </div>
                            
                        
                      </form>
      </section>
  );
};

export default Contact;
