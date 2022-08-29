import { Section } from "../styles/Section";
import { useState } from "react";
import {useLocation} from 'react-router-dom';
//import FilterByTitle from "../shared/FilterByTitle";
//import ProductList from "../data/ProductList.json";

const SignUp = () => {
  const location = useLocation();
  return (
    <Section>
      <h2>sign up page</h2>
      <p>{location.state.input}</p>
    </Section>
  );
};

export default SignUp;