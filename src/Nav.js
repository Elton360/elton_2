import React from "react";
import {
  Anchor,
  // AnchorButton,
  LocaleDropDownButton,
} from "./styles/Header.styled";
import { Flex } from "./styles/Utilities.styled";
import scrollToSection from "./helpers/scrollTo";
import messages from "./locales/messages";
import { FormattedMessage, useIntl } from "react-intl";
import { Dropdown } from "antd";
import getLocaleById from "./helpers/getLocaleById";
import createLocaleOption from "./helpers/createLocaleOption";

export const navItems = [
  { key: "ABOUT_ME", name: messages.aboutMe },
  { key: "SKILLS", name: messages.skills },
  { key: "EXPERIENCE", name: messages.experience },
  { key: "PROJECTS", name: messages.projects },
];

const navAnchors = navItems.map(({ key, name }) => ({
  key,
  href: `#${key}`,
  title: name,
}));

const localeOptions = [
  createLocaleOption(messages.creole, "ht-HT"),
  createLocaleOption(messages.english, "en-US"),
  createLocaleOption(messages.french, "fr-FR"),
  createLocaleOption(messages.spanish, "es-ES"),
];

const Nav = ({ /*onContactButtonClick,*/ setLocale }) => {
  const { locale } = useIntl();
  const { shortName } = getLocaleById(locale);

  return (
    <Flex gap="2rem">
      {navAnchors.map(({ key, href, title }) => (
        <Anchor
          key={key}
          href={href}
          onClick={(el) => scrollToSection(el, key)}
        >
          <FormattedMessage {...title} />
        </Anchor>
      ))}
      {/* <AnchorButton onClick={onContactButtonClick}>
        <FormattedMessage {...messages.contact} />
      </AnchorButton> */}
      <Dropdown
        menu={{
          items: localeOptions,
          onClick: ({ key }) => setLocale(key),
        }}
        placement="bottomRight"
      >
        <LocaleDropDownButton>{shortName}</LocaleDropDownButton>
      </Dropdown>
    </Flex>
  );
};

export default Nav;
