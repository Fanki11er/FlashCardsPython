export const theme: AppTheme = {
  colors: {
    navigationButton: 'rgba(118, 210, 176, 0.5)',
    darkPurple: 'rgba(60, 10, 105, 1)',
    transparentGray: 'rgba(0, 0, 0, 0.25)',
    purple: 'rgba(46,38,142, 1)',
    inputBlue: 'rgba(42, 93, 158, 1)',
    buttonGreen: 'rgba(0, 252, 163, 0.66)',
    greenPlaceholder: 'rgba(0, 252, 163, 0.3)',
    orange: 'rgba(255, 152, 0, 1)',
    errorRed: 'rgba(217,20,36, 0.9)',
    lightBlue: 'rgba(19,179,242,1)',
    darkOrange: 'rgba(223,108,79,1)',
    yellow: 'rgba(236,208,111,1)',
    lightGrey: 'rgba(171,171,163, 1)',
    darkGrey: 'rgba(92, 102,115, 1)',
    listElementBlue: 'rgba(78, 178,209, 1)',
    transparentPurple: 'rgba(46,38,142, 0.3)',
    lightRed: 'rgba(232,169,169, 1)',
  },
  fontSizes: {
    navigationButton: '25px',
    mediumNavigationButton: '20px',
    mediumHeader: '4.5rem',
    smallHeader: '3.5rem',
    smallError: '2rem',
    verySmallError: '1.5rem',
  },

  devices: {
    medium: `max-width: 1919px`,
  },
};

export type AppTheme = {
  colors: {
    navigationButton: string;
    darkPurple: string;
    transparentGray: string;
    purple: string;
    inputBlue: string;
    buttonGreen: string;
    greenPlaceholder: string;
    orange: string;
    errorRed: string;
    lightBlue: string;
    darkOrange: string;
    yellow: string;
    lightGrey: string;
    darkGrey: string;
    listElementBlue: string;
    transparentPurple: string;
    lightRed: string;
  };
  fontSizes: {
    navigationButton: string;
    mediumNavigationButton: string;
    mediumHeader: string;
    smallError: string;
    verySmallError: string;
    smallHeader: string;
  };

  devices: {
    medium: string;
  };
};

export interface ThemeProps {
  theme: AppTheme;
}
