import React from "react";
import { Helmet } from "react-helmet";

const GoogleTranslate = () => {
  return (
    <div className="flex justify-center items-center ">
      {/* Add Google Translate script to the head of the HTML document */}
      <Helmet>
        <script type="text/javascript">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en', // default language
              includedLanguages: "en,hi,zh-CN,ja,es,fr,de",
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
              }, 'google_translate_element');
            }
          `}
        </script>
        <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
      </Helmet>

      {/* Google Translate dropdown container */}
      <div id="google_translate_element"></div>
    </div>
  );
};

export default GoogleTranslate;
