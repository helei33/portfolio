import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";
const languageName = {
  en: "EN",
  cn: "CN",
};
export default () => {
  return (
    <div className="intl-container">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map((language, index) => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
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
