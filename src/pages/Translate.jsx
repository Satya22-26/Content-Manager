import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faCopy, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import countries from '../data';
import { useSpeechSynthesis } from 'react-speech-kit';

function Translate() {
  const iconStyle = { color: '#ffc107' };
  const { speak } = useSpeechSynthesis();
  const [fromText, setFromText] = useState('');
  const [toText, setToText] = useState('');
  const [inputError, setInputError] = useState(false);
  const [selectOptions, setSelectOptions] = useState({
    from: 'en-GB',
    to: 'hi-IN',
  });
  const selectFromRef = useRef(null);
  const selectToRef = useRef(null);

  const copyToClipboard = (text) => {
    const textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  useEffect(() => {
    const fromTextElem = document.querySelector(".from-text");
    const toTextElem = document.querySelector(".to-text");
    const exchangeIcon = document.querySelector(".exchange");
      const fromVolumeIcon = document.getElementById("from-volume-icon");
    const selectTags = document.querySelectorAll("select");

    // Set default select options
    for (let id = 0; id < 2; id++) {
      for (let country_code in countries) {
        let selected =
          id === 0
            ? country_code === selectOptions.from
              ? "selected"
              : ""
            : country_code === selectOptions.to
            ? "selected"
            : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        selectTags[id].insertAdjacentHTML("beforeend", option);
      }
    }

    exchangeIcon.addEventListener("click", () => {
      let tempText = fromTextElem.value;
      let tempLang = selectFromRef.current.value;

      setFromText(toText);
      setToText(tempText);

      selectFromRef.current.value = selectToRef.current.value;
      selectToRef.current.value = tempLang;
    });

    fromTextElem.addEventListener("keyup", () => {
      if (!fromTextElem.value) {
        setToText('');
      }
    });

    // Add translation functionality
    const translateBtn = document.querySelector("button");
    translateBtn.addEventListener("click", () => {
      let text = fromTextElem.value.trim();
      let translateFrom = selectTags[0].value;
      let translateTo = selectTags[1].value;
      if (!text) {
        setToText('');
        return;
      }

      if (text.length > 750) {
        setInputError(true);
        return;
      } else {
        setInputError(false);
      }

      setToText('Translating...');

      let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
      
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          if (data.responseData && data.responseData.translatedText) {
            setToText(data.responseData.translatedText);
          } else if (data.matches && Array.isArray(data.matches)) {
            // Iterate over matches if it's an array
            data.matches.forEach((match) => {
              if (match && match.translation) {
                setToText(match.translation);
              }
            });
          } else {
            setToText('Translation not available');
          }
        })
        .catch((error) => {
          console.error('Translation error:', error);
          setToText('Error during translation');
        });
    });

    // Add copy functionality for both text areas
    const fromCopyIcon = document.getElementById("from-copy-icon");
const toCopyIcon = document.getElementById("to-copy-icon");

 fromVolumeIcon.addEventListener("click", () => {
    if (fromText) {
      speak({ text: fromText });
    } else {
      // If fromText is empty, stop speech
      speak({ text: '', stop: true });
    }
  });

    fromCopyIcon.addEventListener("click", () => {
      copyToClipboard(fromTextElem.value);
    });

    toCopyIcon.addEventListener("click", () => {
      copyToClipboard(toTextElem.value);
    });

  }, [fromText, selectOptions]);

  return (
    <div className="items-center justify-center w-screen h-screen bg-gray-900">
      <p className="text-white font-semibold pt-12 text-4xl text-center">Unlock Communication in Every Language</p>
      <div className="container mx-auto px-5 py-10">
        <div className="wrapper bg-gray-800 bg-opacity-40 p-8 rounded-lg">
          <div className="text-input flex flex-col md:flex-row border-b border-gray-300">
            <textarea
              spellCheck="false"
              className="from-text flex-1 p-4 outline-none text-white resize-none bg-transparent text-lg w-full h-48 mb-4 md:mb-0 md:mr-2"
              placeholder="Enter text"
              value={fromText}
              onChange={(e) => { setFromText(e.target.value); setInputError(false); }}
            ></textarea>
            <textarea
              spellCheck="false"
              readOnly
              disabled
              className="to-text flex-1 p-4 outline-none text-white resize-none bg-transparent text-lg w-full h-48 md:ml-2"
              placeholder="Translation"
              value={toText}
            ></textarea>
          </div>

          <ul className="controls list-none p-4 flex justify-evenly">
            <li className="flex justify-evenly w-full md:w-2/3 mr-0 md:mr-14">
              <div className="icons w-full flex justify-evenly mb-2 md:mb-0">
                <FontAwesomeIcon
  id="from-volume-icon"
  icon={faVolumeUp}
  style={iconStyle}
  onClick={() => speak({ text: fromText })}
  className="hover:opacity-70"
/>
             <FontAwesomeIcon
  id="from-copy-icon"
  icon={faCopy}
  style={iconStyle}
  onClick={() => copyToClipboard(fromText)}
  className="hover:opacity-70"
/>

              </div>
              <select
                className="text-lg bg-yellow-600 text-white focus:outline-none rounded w-full"
                value={selectOptions.from}
                onChange={(e) => setSelectOptions({ ...selectOptions, from: e.target.value })}
                ref={selectFromRef}
              ></select>
            </li>
            <li className="exchange mx-0 md:mx-24">
              <FontAwesomeIcon icon={faExchangeAlt} style={iconStyle} onClick={() => exchangeIcon.click()} className="hover:opacity-70" />
            </li>
            <li className="flex justify-evenly ml-0 md:ml-14 w-full md:w-2/3">
              <select
                className="text-lg bg-yellow-600 text-white focus:outline-none rounded w-full"
                value={selectOptions.to}
                onChange={(e) => setSelectOptions({ ...selectOptions, to: e.target.value })}
                ref={selectToRef}
              ></select>
              <div className="icons w-full flex justify-evenly">
                <FontAwesomeIcon
  id="to-copy-icon"
  icon={faCopy}
  style={iconStyle}
  onClick={() => copyToClipboard(toText)}
  className="hover:opacity-70"
/>

                <FontAwesomeIcon
                  id="to-volume"
                  icon={faVolumeUp}
                  style={iconStyle}
                  onClick={() => speak({ text: toText, lang: selectOptions.to })}
                  className="hover:opacity-70"
                />
              </div>
            </li>
          </ul>
          <button
            className="w-full py-4 bg-yellow-600 text-white text-lg rounded mt-4"
            onClick={() => { }}
          >
            Translate Text
          </button>
          {inputError && (
            <p className="text-red-500 text-sm mt-2">
              Please enter up to 750 characters for translation.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Translate;
