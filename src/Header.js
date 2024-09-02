import {
  Header as HeaderStyled,
  Content,
  HeaderBg,
} from "./styles/Header.styled";
import React from "react";
import "./App.css";
import {
  H1,
  H2,
  HighLightedText,
  Overlay,
  P,
  // PrimaryButton,
  SecondaryButton,
  Flex,
  DimmedText,
} from "./styles/Utilities.styled";
import Resume from "./EltonLucienResume.pdf";
import HeaderBackground from "./HeaderBackground";
import Nav from "./Nav";
import { FormattedMessage } from "react-intl";
import messages from "./locales/messages";
import profile from "./config/profile";

const Header = ({ contactModalState, setLocale }) => {
  const [, setContactModalOpen] = contactModalState;
  const onContactButtonClick = () => setContactModalOpen(true);

  const { firstName, lastName, jobTitle, bio } = profile;
  const fullName = `${firstName} ${lastName}`;

  return (
    <HeaderStyled>
      <HeaderBackground />
      <Overlay />
      <Flex align="center" justify="space-between" $m="auto">
        <H2>
          <HighLightedText>{firstName}</HighLightedText> {lastName}
        </H2>
        <Nav
          onContactButtonClick={onContactButtonClick}
          setLocale={setLocale}
        />
      </Flex>
      <Content>
        <Flex vertical>
          <H2>
            <HighLightedText>
              <FormattedMessage {...jobTitle} />
            </HighLightedText>
          </H2>
          <H1>{fullName}</H1>
          <P>
            <DimmedText>
              <FormattedMessage {...bio} />
            </DimmedText>
          </P>
          <Flex gap="1.5rem" wrap $mt="1.5rem">
            {/* <PrimaryButton
              onClick={onContactButtonClick}
              type="primary"
              disabled={contactModalOpen}
            >
              <FormattedMessage {...messages.contact} />
            </PrimaryButton> */}
            <SecondaryButton>
              <a href={Resume} target="_blank" rel="noopener noreferrer">
                <FormattedMessage {...messages.resume} />
              </a>
            </SecondaryButton>
          </Flex>
        </Flex>
        <HeaderBg />
      </Content>
    </HeaderStyled>
  );
};

export default Header;
