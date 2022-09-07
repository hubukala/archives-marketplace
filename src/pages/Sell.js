import { useState } from "react";
import { Section } from "../styles/Section";
import SellForm from "../components/PostItemForm";

const Sell = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <Section>
      { isLoggedIn ?
        <SellForm />
        : <p>not logged in</p>
      }
    </Section>
  );
};

export default Sell;