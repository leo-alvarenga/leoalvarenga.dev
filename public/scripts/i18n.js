const Language = {
  english: "en-us",
  portugues: "pt-br",
};

function isLangValid(lang) {
  return lang && Object.values(Language).includes(String(lang));
}

function getLangFromUrl() {
  const [, lang, ...rest] = location?.pathname.split("/");

  const isDefault = lang !== Language.portugues;
  const path = "".concat(isDefault ? lang : "", ...rest);

  return [isDefault ? Language.english : Language.portugues, path];
}

function getAltUrl(targetLanguage, path) {
  const [lang, currentPath] = getLangFromUrl();

  let resultPath = (path || currentPath).replaceAll(`/${lang}`, "");

  if (targetLanguage === Language.english) {
    return resultPath || "/";
  }

  return `/${targetLanguage}`.concat(resultPath);
}

function writeLangToLS(lang) {
  try {
    localStorage.setItem("lang", isLangValid(lang) ? lang : Language.english);
  } catch (e) {
    console.error("Could not persist the selected language...", e);
  }
}

function readPreferredLangFromLS() {
  try {
    let lang = localStorage.getItem("lang");

    if (!lang) {
      lang = getLangFromUrl()[0];
      writeLangToLS(lang);
    }

    if (!isLangValid(lang)) throw "Invalid lang";

    return lang;
  } catch {
    return Language.english;
  }
}

function isCurrentLangCorrect() {
  return getLangFromUrl()[0] === readPreferredLangFromLS();
}

function sync() {
  console.log(
    getLangFromUrl(),
    readPreferredLangFromLS(),
    isCurrentLangCorrect(),
  );
  if (isCurrentLangCorrect()) return;

  console.log(getLangFromUrl(), readPreferredLangFromLS());
  window.location.href = getAltUrl(readPreferredLangFromLS());
}

function load() {
  document.addEventListener(
    "lang_change",
    (event) => {
      const { detail } = event;

      console.log({ detail }, readPreferredLangFromLS());
      writeLangToLS(detail);

      console.log(readPreferredLangFromLS());
      sync();
    },
    false,
  );

  sync();
}

load();
