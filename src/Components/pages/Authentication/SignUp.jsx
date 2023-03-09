import React, { useCallback, useState } from "react";
import AccountVerification from "../../SignUpForms/AccountVerification";
import PsycheTag from "../../SignUpForms/PsycheTag";
import CreateAccount from "../../SignUpForms/CreateAccount";
import { motion } from "framer-motion";
import Otp from "../../SignUpForms/Otp";

const SignUp = () => {
  const [currentForm, setCurrentForm] = useState(1);

  const navigateToNextForm = useCallback(() => {
    window.scrollTo({ top: 150, behavior: "smooth" });
    setCurrentForm(currentForm + 1);
  }, [currentForm]);

  const navigateToPreviousForm = useCallback(() => {
    window.scrollTo({ top: 150, behavior: "smooth" });
    setCurrentForm(currentForm - 1);
  }, [currentForm]);

  return (
    <div>
      <Container isActive={currentForm === 1} id="createAccount">
        <CreateAccount onFormSubmit={navigateToNextForm} />
      </Container>
      <Container isActive={currentForm === 2} id="otp">
        <Otp onFormSubmit={navigateToNextForm} />
      </Container>
      <Container isActive={currentForm === 3} id="account verification">
        <AccountVerification
          onFormSubmit={navigateToNextForm}
          handlePrevious={navigateToPreviousForm}
        />
      </Container>
      <Container isActive={currentForm === 4} id="psychetag">
        <PsycheTag
          onFormSubmit={() => alert("submitted")}
          handlePrevious={navigateToPreviousForm}
        />
      </Container>
    </div>
  );
};

const Container = ({ children, isActive, id }) => {
  return (
    <>
      {isActive ? (
        <motion.div
          className=""
          layoutId={id}
          // layout
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.25 }}
        >
          {children}
        </motion.div>
      ) : null}
    </>
  );
};

export default SignUp;
