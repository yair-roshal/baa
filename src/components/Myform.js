// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xoqpwwqv"
        method="POST"
        class="postcard"
      >
        {/* <!-- add your custom form HTML here --> */}

        <label>Name:</label>
        <input className="inputClass" type="text" name="name" />

        <label>Email:</label>
        <input className="inputClass" type="email" name="email" />

        <label>Telephone:</label>
        <input className="inputClass" type="text" name="telephone" />

        <label>Message:</label>
        <input className="inputClassTextArea" type="text" name="message" />
      

{/* 
        
  <div class="form-row">
    <label for="name">Ваше имя</label><input type="text" id="name" required/>
  </div>
  <div class="form-row">
    <label for="email">Ваш Email</label><input type="email" id="email" required/>
  </div>
  <div class="form-row">
    <label for="tel">Ваш Телефон</label><input   id="tel" type="tel" required/>
  </div>
 
  <div class="form-row">
    <label for="message">Ваше сообщение</label>  
    
    <textarea rows="2" id="message" required></textarea>
    

  </div>  

    <div class="form-row">
    <input type="submit" value="Отправить сообщение"/>
  </div> */}
 


        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}