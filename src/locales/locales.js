import messages from "./messages";
import frMessages from "./fr.json";

const locales = {
  "en-US": { name: messages.english, shortName: "EN" },
  "fr-FR": { name: messages.french, shortName: "FR", JSON: frMessages },
};

export default locales;
