import React from "react";

interface INavlinksItems {
  value: string;
  href: string;
  dropdownItems?: { item: string; href: string }[];
}

interface IFeatures {
  icon: React.JSX.Element;
  title: string;
  description: string;
}

interface IServicesContent {
  title: string;
  description: string;
  link: string;
}

type TObjectivesParagraphs = IFeatures;

interface IProgrammesParagraphs {
  title: string;
  description: string;
}

type TMembershipBenefitsParagraphs = IFeatures;

interface INavItems {
  name: string;
  path: string;
  dropdown?: { name: string; path: string }[];
}

interface IFooterNavigationItems {
  name: string;
  path: string;
}

type TFooterAdditionalLinks = IFooterNavigationItems;

interface IFooterSocialLinks {
  name: string;
  href: string;
  icon: React.JSX.Element;
}
export type {
  INavlinksItems,
  IFeatures,
  IServicesContent,
  TObjectivesParagraphs,
  IProgrammesParagraphs,
  TMembershipBenefitsParagraphs,
  INavItems,
  IFooterNavigationItems,
  TFooterAdditionalLinks,
  IFooterSocialLinks,
};
