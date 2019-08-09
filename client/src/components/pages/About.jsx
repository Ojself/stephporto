import React, { Component } from 'react'
import img1 from '../../img/s1.jpg'
import img2 from '../../img/s2.jpg'
import img3 from '../../img/s3.jpg'
import img4 from '../../img/s4.jpg'
import img5 from '../../img/s5.jpg'
import img6 from '../../img/s6.jpg'

export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startedCounting: false,
      doneCounting: false,
      countingAge: 0,
      age: 0,
      birthday: '1992-10-26',
      theposition: 0,
    }
    this.counting = this.counting.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
    let age = Math.floor(
      (new Date() - new Date(this.state.birthday).getTime()) / 3.15576e10
    )
    this.setState({ age })
  }

  counting = () => {
    let countingAge = 0
    let ageInterval = setInterval(() => {
      countingAge++
      if (countingAge >= this.state.age) {
        clearInterval(ageInterval)
        this.setState({ doneCounting: true })
      }
      this.setState({ countingAge })
    }, 50)
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = winScroll / height
    if (scrolled > 0.4 && !this.state.startedCounting) {
      this.counting()
      this.setState({ startedCounting: true })
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  /* TODO pics, 3*2 big screen.
  1*6 small screen */
  render() {
    return (
      <div>
        <div className="introContainer">
          <div className="intoText">
            <h1 className="dosis">STEPHANE HOUDAYER</h1>
            <h4>UX / UI Designer</h4>
            <p>
              My name is Stephane and I work as a UX / UI designer. The job I do
              allows me to a lot of exciting work, which is why I made this site
              to collect everything in one spot. Make sure to Check in to see
              new content!
            </p>
            <a href="http://localhost:3000/contact">
              {' '}
              <button>GET IN TOUCH</button>
            </a>
          </div>
        </div>
        <div className="picsAndAgeContainer row ">
          <div className="picsContainer row ">
            <h3 className="col"> THIS IS ME</h3>
            <div class="w-100" />
            <div class="col">
              <img src={img1} className="" alt="Friedrichshain" />
            </div>
            <div class="col">
              <img src={img2} className="" alt="Friedrichshain" />
            </div>
            <div class="col">
              <img src={img3} className="" alt="Friedrichshain" />
            </div>
            <div class="w-100" />
            <div class="col">
              <img src={img4} className="" alt="Friedrichshain" />
            </div>
            <div class="col">
              <img src={img5} className="" alt="Friedrichshain" />
            </div>
            <div class="col">
              <img src={img6} className="" alt="Friedrichshain" />
            </div>
          </div>{' '}
          {/* Age font should be with sans. Lora? same for skills */}
          <div className="ageContainer">
            <h3>I AM</h3>
            <div class="w-100" />
            <div id="age"> {this.state.countingAge}</div>
            <br />
            <h5
              style={{
                opacity: this.state.doneCounting
                  ? '1'
                  : this.state.countingAge.toString() / 40,
              }}
            >
              YEARS OLD
            </h5>
          </div>
        </div>

        <div>skills/experience</div>
        <div>other</div>
      </div>
    )
  }
}
