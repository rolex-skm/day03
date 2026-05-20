export const typography = {
  fontFamily: {
    sans: 'Roboto-Regular',
  },
  fontSize: {
    caption: 12,
    body: 16,
    subheading: 18,
    heading: 24,
    // legacy support
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
  },
  fontWeight: {
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  }
};
