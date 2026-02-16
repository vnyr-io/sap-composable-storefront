import { DeferLoadingStrategy } from '@spartacus/core';
import { BREAKPOINT, LayoutConfig } from '@spartacus/storefront';

export const customLayoutConfig: LayoutConfig = {
  breakpoints: {
    [BREAKPOINT.xs]: 575,
    [BREAKPOINT.sm]: { min: 576, max: 767 },
    [BREAKPOINT.md]: { min: 768, max: 991 },
    [BREAKPOINT.lg]: { min: 992, max: 1199 },
    [BREAKPOINT.xl]: { min: 1200 },
  },

  layoutSlots: {
    header: {
      lg: {
        slots: [
          'PreHeader',
          'SiteContext',
          'SiteLinks',
          'SiteLogo',
          'SearchBox',
          'SiteLogin',
          'MiniCart',
          'NavigationBar',
        ],
      },
      slots: ['PreHeader', 'SiteLogo', 'SearchBox', 'MiniCart'],
    },

    navigation: {
      lg: { slots: [] },
      slots: ['SiteLogin', 'NavigationBar', 'SiteContext', 'SiteLinks'],
    },

    footer: {
      slots: ['Footer', 'BottomFooter'],
      pageFold: 'Footer',
    },

    LandingPage2Template: {
      pageFold: 'Section2B',
      slots: [
        'Section1',
        'Section2A',
        'Section2B',
        'Section2C',
        'Section3',
        'Section4',
        'Section5',
      ],
    },

    HomePageTemplate: {
      pageFold: 'Section2',
      slots: ['Section1', 'Section2', 'Section3', 'Section4', 'Section5'],
    },

    ContentPage1Template: {
      slots: ['Section2A', 'Section2B'],
    },

    CategoryPageTemplate: {
      pageFold: 'Section2',
      slots: ['Section1', 'Section2', 'Section3'],
    },

    ProductListPageTemplate: {
      slots: ['ProductLeftRefinements', 'ProductListSlot', 'TKCompareSection'],
    },

    ProductGridPageTemplate: {
      slots: ['ProductLeftRefinements', 'ProductGridSlot'],
    },

    SearchResultsListPageTemplate: {
      slots: [
        'Section2',
        'ProductLeftRefinements',
        'SearchResultsListSlot',
        'Section4',
      ],
    },

    SearchResultsGridPageTemplate: {
      slots: [
        'Section2',
        'ProductLeftRefinements',
        'SearchResultsGridSlot',
        'PlaceholderContentSlot',
        'FooterAddress',
      ],
    },

    ProductDetailsPageTemplate: {
      lg: { pageFold: 'UpSelling' },
      pageFold: 'Summary',
      slots: [
        'Summary',
        'UpSelling',
        'CrossSelling',
        'Tabs',
        'PlaceholderContentSlot',
      ],
    },

    CartPageTemplate: {
      slots: ['TopContent', 'CenterRightContentSlot', 'EmptyCartMiddleContent'],
    },

    AccountPageTemplate: {
      slots: ['BodyContent', 'SideContent'],
    },

    LoginPageTemplate: {
      slots: ['LeftContentSlot', 'RightContentSlot'],
    },

    ErrorPageTemplate: {
      slots: ['TopContent', 'MiddleContent', 'BottomContent'],
    },

    OrderConfirmationPageTemplate: {
      slots: ['BodyContent', 'SideContent'],
    },

    MultiStepCheckoutSummaryPageTemplate: {
      slots: ['TopContent', 'BodyContent', 'SideContent', 'BottomContent'],
    },

    CheckoutLoginPageTemplate: {
      slots: ['RightContentSlot'],
    },

    MyAccountViewPageTemplate: {
      slots: ['LeftContentSlot', 'RightContentSlot'],
    },

    MaterialPageTemplate: {
      slots: [],
    },
  },

  deferredLoading: {
    strategy: DeferLoadingStrategy.DEFER,
    intersectionMargin: '50px 0px 200px 0px',
  },
};
