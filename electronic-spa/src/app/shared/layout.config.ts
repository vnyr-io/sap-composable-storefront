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
      md: {
        slots: ['PreHeader', 'SiteLogo', 'SearchBox', 'MiniCart'],
      },
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
      xl: {
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
      md: { slots: ['SiteLogin', 'NavigationBar', 'SiteContext', 'SiteLinks'] },
      lg: { slots: [] },
      xl: { slots: [] },
      slots: ['SiteLogin', 'NavigationBar', 'SiteContext', 'SiteLinks'],
    },

    footer: {
      md: { slots: ['Footer', 'BottomFooter'], pageFold: 'Footer' },
      lg: { slots: ['Footer', 'BottomFooter'], pageFold: 'Footer' },
      slots: ['Footer', 'BottomFooter'],
      pageFold: 'Footer',
    },

    LandingPage2Template: {
      md: {
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
      lg: {
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
      md: {
        pageFold: 'Section2',
        slots: ['Section1', 'Section2', 'Section3', 'Section4', 'Section5'],
      },
      lg: {
        pageFold: 'Section2',
        slots: ['Section1', 'Section2', 'Section3', 'Section4', 'Section5'],
      },
      pageFold: 'Section2',
      slots: ['Section1', 'Section2', 'Section3', 'Section4', 'Section5'],
    },

    ContentPage1Template: {
      md: { slots: ['Section2A', 'Section2B'] },
      lg: { slots: ['Section2A', 'Section2B'] },
      slots: ['Section2A', 'Section2B'],
    },

    CategoryPageTemplate: {
      md: { pageFold: 'Section2', slots: ['Section1', 'Section2', 'Section3'] },
      lg: { pageFold: 'Section2', slots: ['Section1', 'Section2', 'Section3'] },
      pageFold: 'Section2',
      slots: ['Section1', 'Section2', 'Section3'],
    },

    ProductListPageTemplate: {
      md: { slots: ['ProductLeftRefinements', 'ProductListSlot'] },
      lg: { slots: ['ProductLeftRefinements', 'ProductListSlot'] },
      slots: ['ProductLeftRefinements', 'ProductListSlot'],
    },

    ProductGridPageTemplate: {
      md: { slots: ['ProductLeftRefinements', 'ProductGridSlot'] },
      lg: { slots: ['ProductLeftRefinements', 'ProductGridSlot'] },
      slots: ['ProductLeftRefinements', 'ProductGridSlot'],
    },

    SearchResultsListPageTemplate: {
      md: {
        slots: [
          'Section2',
          'ProductLeftRefinements',
          'SearchResultsListSlot',
          'Section4',
        ],
      },
      lg: {
        slots: [
          'Section2',
          'ProductLeftRefinements',
          'SearchResultsListSlot',
          'Section4',
        ],
      },
      slots: [
        'Section2',
        'ProductLeftRefinements',
        'SearchResultsListSlot',
        'Section4',
      ],
    },

    SearchResultsGridPageTemplate: {
      md: {
        slots: [
          'Section2',
          'ProductLeftRefinements',
          'SearchResultsGridSlot',
          'PlaceholderContentSlot',
          'FooterAddress',
        ],
      },
      lg: {
        slots: [
          'Section2',
          'ProductLeftRefinements',
          'SearchResultsGridSlot',
          'PlaceholderContentSlot',
          'FooterAddress',
        ],
      },
      slots: [
        'Section2',
        'ProductLeftRefinements',
        'SearchResultsGridSlot',
        'PlaceholderContentSlot',
        'FooterAddress',
      ],
    },

    ProductDetailsPageTemplate: {
      md: {
        pageFold: 'UpSelling',
        slots: [
          'Summary',
          'UpSelling',
          'CrossSelling',
          'Tabs',
          'PlaceholderContentSlot',
        ],
      },
      lg: {
        pageFold: 'UpSelling',
        slots: [
          'Summary',
          'UpSelling',
          'CrossSelling',
          'Tabs',
          'PlaceholderContentSlot',
        ],
      },
      pageFold: 'Summary',
      slots: [
        'Summary',
        'Tabs',
        'UpSelling',
        'CrossSelling',
        'PlaceholderContentSlot',
      ],
    },

    CartPageTemplate: {
      md: {
        slots: [
          'TopContent',
          'CenterRightContentSlot',
          'EmptyCartMiddleContent',
        ],
      },
      lg: {
        slots: [
          'TopContent',
          'CenterRightContentSlot',
          'EmptyCartMiddleContent',
        ],
      },
      slots: ['TopContent', 'CenterRightContentSlot', 'EmptyCartMiddleContent'],
    },

    AccountPageTemplate: {
      md: { slots: ['BodyContent', 'SideContent'] },
      lg: { slots: ['BodyContent', 'SideContent'] },
      slots: ['BodyContent', 'SideContent'],
    },

    LoginPageTemplate: {
      md: { slots: ['LeftContentSlot', 'RightContentSlot'] },
      lg: { slots: ['LeftContentSlot', 'RightContentSlot'] },
      slots: ['LeftContentSlot', 'RightContentSlot'],
    },

    ErrorPageTemplate: {
      md: { slots: ['TopContent', 'MiddleContent', 'BottomContent'] },
      lg: { slots: ['TopContent', 'MiddleContent', 'BottomContent'] },
      slots: ['TopContent', 'MiddleContent', 'BottomContent'],
    },

    OrderConfirmationPageTemplate: {
      md: { slots: ['BodyContent', 'SideContent'] },
      lg: { slots: ['BodyContent', 'SideContent'] },
      slots: ['BodyContent', 'SideContent'],
    },

    MultiStepCheckoutSummaryPageTemplate: {
      md: {
        slots: ['TopContent', 'BodyContent', 'SideContent', 'BottomContent'],
      },
      lg: {
        slots: ['TopContent', 'BodyContent', 'SideContent', 'BottomContent'],
      },
      slots: ['TopContent', 'BodyContent', 'SideContent', 'BottomContent'],
    },

    CheckoutLoginPageTemplate: {
      md: { slots: ['RightContentSlot'] },
      lg: { slots: ['RightContentSlot'] },
      slots: ['RightContentSlot'],
    },

    MyAccountViewPageTemplate: {
      md: { slots: ['LeftContentSlot', 'RightContentSlot'] },
      lg: { slots: ['LeftContentSlot', 'RightContentSlot'] },
      slots: ['LeftContentSlot', 'RightContentSlot'],
    },

    MaterialPageTemplate: {
      md: { slots: [] },
      lg: { slots: [] },
      slots: [],
    },
  },

  deferredLoading: {
    strategy: DeferLoadingStrategy.DEFER,
    intersectionMargin: '50px 0px 200px 0px',
  },
};
