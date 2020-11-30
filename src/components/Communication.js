import React, { Component } from "react";

import { FiAtSign, FiFacebook, FiPhoneIncoming, FiPhoneCall } from "react-icons/fi";
import Title from "./Title";
// import { Form,Button } from 'react-bootstrap';
import MyForm from "./Myform.js"

export default class Communication extends Component {
  state = {
    services: [
      {
        icon: <FiPhoneCall />,
        title: "Звоните нам",
        info: `0542622070`
      },
      {
        icon: <FiAtSign />,
        title: "Пишите нам",
        info: `office@binyanadeiad.org`
      },

     
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">

 
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}


          <article className="service">
                <span><FiFacebook /></span>
                <h6>Мы в соц.сетях</h6>
            <div className="knopki">
              
            
                <div class="social facebook">
                  <a href="https://www.facebook.com/Binyan-Adei-Ad-349673261794655/" target="_blank"><i class="fa fa-instagram fa-2x"></i></a>
              </div>
              <div class="social facebook">
                  <a href="https://www.facebook.com/binyanadeiad.org/" target="_blank"><i class="fa fa-facebook fa-2x"></i></a>    
              </div>
            </div> 
              </article>

          <article className="service">
                <span><FiPhoneIncoming /></span>
                <h6>Напишите нам!</h6>
                   
                  <MyForm/>
  
              </article>
 
        </div>
 
      </section>
 
    );
  }
}
