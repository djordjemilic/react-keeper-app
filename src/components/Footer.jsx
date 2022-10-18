import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ George, {year}</p>
    </footer>
  );
}

export default Footer;
