import React from 'react';
import Header from "../components/Header";
import FormField from "../components/FormField";
import CoolButton from "../components/CoolButton";

const Signup = () => (
  <div className="container">
    <Header/>
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <FormField label="Password" type="password" placeholder="type password" />
    <CoolButton isSmall isDanger className="is-rounded my-class">Submit</CoolButton>
  </div>
)

export default Signup