import messages from "../locales/messages";
import enMessages from "../locales/en.json";
import frMessages from "../locales/fr.json";
import esMessages from "../locales/es.json";

const defaultMessage = {
  name: messages.english,
  shortName: "EN",
  messages: enMessages,
};

const getLocaleById = (id) =>
  ({
    "fr-FR": { name: messages.french, shortName: "FR", messages: frMessages },
    "es-ES": { name: messages.spanish, shortName: "ES", messages: esMessages },
  }[id] || defaultMessage);

export default getLocaleById;
