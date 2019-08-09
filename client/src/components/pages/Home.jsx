import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1 id="portHeader" className="dosis">
          PORTFOLIO
        </h1>

        <div className="row">
          <div className="container portoContainer">
            <div
              className="card shadow p-3 mb-5 bg-white rounded"
              style={{ height: '10 px' }}
            >
              <img
                className="card-img-top "
                src="https://www.harlemalexander.com/wp-content/uploads/2017/03/15014_DN_Usminket_2_127-copy.jpg"
                alt="TEXT HERE"
              />
              <div className="card-body">
                <p className="card-text">
                  <strong>WHAT'S THE PLAN </strong>[Use Case]
                  <br /> New to a city and wanting to find your new best friends
                  through local activities? Get the best curated events
                  recommendations and meet new people!
                </p>
              </div>
            </div>

            <div className="card shadow p-3 mb-5 bg-white rounded">
              <img
                className="card-img-top"
                src="https://www.harlemalexander.com/wp-content/uploads/2017/03/17521848_10158673488945727_408756925_o.jpg"
                alt="TEXT HERE"
              />

              <div className="card-body">
                <p className="card-text">
                  <strong>CARPE DIEM </strong>[Use Case]
                  <br />
                  Give yourself more attention and concentration. Carpe Diem
                  helps you get rid of unsollicited notifications. Seize the
                  day, not your phone.
                </p>
              </div>
            </div>

            <div
              className="card shadow p-3 mb-5 bg-white rounded"
              style={{ width: '30rem' }}
            >
              <img
                className="card-img-top"
                src="https://www.harlemalexander.com/wp-content/uploads/2014/12/20160203_094138000_iOS.jpg"
                alt="TEXT HERE"
              />

              <div className="card-body">
                <p className="card-text">
                  <strong>PATPATPAT </strong>[Design Challenge]
                  <br />
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>

            <div className="card shadow p-3 mb-5 bg-white rounded">
              <img
                className="card-img-top"
                src="https://www.harlemalexander.com/wp-content/uploads/2017/03/specsavers-photo-simon-skreddernes.jpg"
                alt="TEXT HERE"
              />

              <div className="card-body">
                <p className="card-text">
                  <strong>Project 4 </strong>
                  <br />
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
