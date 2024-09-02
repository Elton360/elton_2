import { FormattedMessage } from "react-intl";
import { SectionSubHeader } from "./styles/Utilities.styled";

const Section = ({ title, id, children }) => (
  <>
    <SectionSubHeader id={id}>
      <FormattedMessage {...title} />
    </SectionSubHeader>
    {children}
  </>
);

export default Section;
