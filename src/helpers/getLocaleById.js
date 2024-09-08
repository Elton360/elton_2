import messages from "../locales/messages";
import enMessages from "../locales/en.json";
import frMessages from "../locales/fr.json";

const defaultMessage = {
  name: messages.english,
  shortName: "EN",
  messages: enMessages,
};

const getLocaleById = (id) =>
  ({
    "fr-FR": { name: messages.french, shortName: "FR", messages: frMessages },
  }[id] || defaultMessage);

export default getLocaleById;
