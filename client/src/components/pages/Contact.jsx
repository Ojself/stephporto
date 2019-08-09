import React, { Component } from 'react'
import linkedinLogo from '../../img/logo_linkedin.png'
import mediumLogo from '../../img/logo_medium.png'
import dribbleLogo from '../../img/logo_drbble.png'

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }

  render() {
    return (
      <div className="contctContainer">
        <h2 onClick={event => console.log(event)}>CONTACT</h2>
        <div>
          <span className="dash" />
          <span id="square">&#x25A0; </span>
          <span className="dash" />
        </div>
        <p>
          Feel free to reach out to me through social media or email, and I will
          get back to you as soon as possible
        </p>
        <div className="container d-flex ">
          <div className="contactLogo d-flex flex-column justify-content-center w-50 ">
            <a href="https://medium.com/@houdayer.stephane">
              <img className="p-3" src={linkedinLogo} alt="Medium" />
            </a>
            <a href="https://dribbble.com/StephHoudayer">
              <img className="p-3" src={mediumLogo} alt="Dribble" />
            </a>
            <a href="https://www.linkedin.com/in/st%C3%A9phane-houdayer/?locale=en_US">
              <img className="p-3" src={dribbleLogo} alt="Linkedin" />
            </a>
          </div>
          <div className="formContainer mt-5">
            <form
              method="POST"
              action="https://formspree.io/stephanehoudayerdesign@gmail.com"
            >
              <div className="form-group">
                <label for="exampleInputName1" />
                <input
                  type="text"
                  className="form-control shadow-none"
                  id="exampleInputName1"
                  aria-describedby="emailHelp"
                  placeholder="NAME"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputemail1" />
                <input
                  type="email"
                  className="form-control shadow-none"
                  id="exampleInputemail1"
                  placeholder="EMAIL"
                />
              </div>

              <div className="form-group">
                <label for="exampleInputsubject1" />
                <input
                  type="subject"
                  className="form-control shadow-none"
                  id="exampleInputsubject1"
                  placeholder="SUBJECT"
                />
              </div>

              <div className="form-group ">
                <label for="exampleFormControlTextarea1" />
                <textarea
                  className="form-control shadow-none"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="MESSAGE"
                />
              </div>

              <button type="submit" className="btn btn-dark ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
