import React, { useEffect } from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";
const languageName = {
  en: "EN",
  cn: "CN",
};
export default () => {
  // useEffect(() => {
  //   if (localStorage.getItem("lng")) {
  //     changeLocale(localStorage.getItem("lng"));
  //     return;
  //   }
  //   if (
  //     navigator.language === "zh-CN" ||
  //     navigator.language === "zh-SG" ||
  //     navigator.language === "zh-TW" ||
  //     navigator.language === "zh-HK"
  //   ) {
  //     changeLocale("cn");
  //     localStorage.setItem("lng", "cn");
  //   } else {
  //     changeLocale("en");
  //     localStorage.setItem("lng", "en");
  //   }
  // }, []);
  return (
    <div className="intl-container">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map((language, index) => (
            <a
              key={language}
              onClick={() => {
                changeLocale(language);
                localStorage.setItem("lng", language);
              }}
              style={{
                color:
                  currentLocale === language ? `rgba(82, 22, 206, 1)` : `white`,
              }}
            >
              {languageName[language]}&nbsp;
              <span
                style={
                  index === 1
                    ? { display: "none", color: "white" }
                    : { color: "white" }
                }
              >
                /
              </span>
              &nbsp;
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  );
};
