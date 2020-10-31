import React, { Component } from "react";

import { FiAtSign, FiFacebook, FiPhoneIncoming, FiPhoneCall } from "react-icons/fi";
import Title from "./Title";

export default class Communication extends Component {
  state = {
    services: [
      {
        icon: <FiPhoneCall />,
        title: "Звоните нам",
        info: `0587705778`
      },
      {
        icon: <FiAtSign />,
        title: "Пишите нам",
        info: `yair7705778@gmail.com
        office@binyanadeiad.org
        `
      },

      {
        icon: <FiFacebook />,
        title: "Давайте дружить",
        info: `https://www.facebook.com/Binyan-Adei-Ad-349673261794655/
        
        https://www.facebook.com/binyanadeiad.org/
        `
      },

      // {
      //   icon: <FiPhoneIncoming />,
      //   title: "   Investment properties",
      //   info: `Looking to invest in Israel?
      //   Check out our wide selection!`
      // }
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
                <span><FiPhoneIncoming /></span>
                <h6>11111111111</h6>
                <p>22222222</p>
 
              
              </article>


        </div>



      </section>




    );
  }
}
