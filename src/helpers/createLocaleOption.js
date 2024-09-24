import { FormattedMessage } from "react-intl";
import { LocaleDropDownOptionText } from "../styles/Header.styled";

const createLocaleOption = (message, key) => ({
  label: (
    <LocaleDropDownOptionText>
      <FormattedMessage {...message} />
    </LocaleDropDownOptionText>
  ),
  key,
});

export default createLocaleOption;
