import React from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";
import meowcookie from "../../assets/mp3/meowcookie.mp3";

const CookieConsentForm = () => {
  const playMeowSound = () => {
    const audio = new Audio(meowcookie);
    audio.play();
  };
  return (
    <CookieConsent
      location="bottom"
      buttonText="Lol ok"
      cookieName="AcceptCookiesFelineEmporium"
      style={{ background: "#3B719F" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
      onAccept={playMeowSound}
      overlay
    >
      This website uses cookies to enhance the user experience.{" "}
      <span style={{ fontSize: "10px" }}>
        If that is not tolerated, then please leave or something, lol idk
      </span>
    </CookieConsent>
  );
};

export default CookieConsentForm;
