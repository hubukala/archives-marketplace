import { Section } from "../styles/Section";
import { useEffect } from "react";
import SignUpPopup from "../components/SignUpPopup";

const SignUp = ({ showSignUp, setShowSignUp, setShowLogin }) => {
  useEffect(() => {
    setShowSignUp(true);
  }, []);

  // return (
  //   <Section>
  //     {/* <SignUpPopup
  //       showSignUp={showSignUp}
  //       setShowSignUp={setShowSignUp}
  //       setShowLogin={setShowLogin}
  //     /> */}
  //   </Section>
  // );
};

export default SignUp;