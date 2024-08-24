import { SectionSubHeader } from "./styles/Utilities.styled";

const Section = ({ title, id, children }) => (
  <>
    <SectionSubHeader id={id}>{title}</SectionSubHeader>
    {children}
  </>
);

export default Section;
