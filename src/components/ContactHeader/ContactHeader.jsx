import React from "react";
import styles from "./ContactHeader.module.css"

const ContactHeader = () => {
  return (
    <>
      <div className={`${styles.contact_sectio}`}>
        <h1>CONTACT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          quibusdam repellendus consectetur, voluptatibus atque rerum eum
          consequuntur non nobis, ex omnis nostrum qui tenetur nulla aliquam quo
          eveniet repudiandae pariatur!
        </p>
      </div>
    </>
  );
};

export default ContactHeader;
