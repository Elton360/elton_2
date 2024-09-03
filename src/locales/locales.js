import messages from "./messages";
import enMessages from "./en.json";
import frMessages from "./fr.json";

const defaultMessage = {
  name: messages.english,
  shortName: "EN",
  messages: enMessages,
};

const getLocaleById = (id) =>
  ({
    "en-US": defaultMessage,
    "fr-FR": { name: messages.french, shortName: "FR", messages: frMessages },
  }[id] || defaultMessage);

export default getLocaleById;
