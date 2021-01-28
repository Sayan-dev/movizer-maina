
export const FONT_SIZE_H1 = 40;
export const FONT_SIZE_H2_HOMEPAGE = 25;
export const FONT_SIZE_H2_SYSTEM_PAGE = 22;
export const FONT_SIZE_H3 = 20;
export const FONT_SIZE_H4 = 18;
export const FONT_SIZE_BODY2 = 14;
export const FONT_SIZE_BODY1 = 12;


export const FONT_SIZE_BUTTON = 14;

export const FONT_WEIGHT_BOLD = 'bold';
export const FONT_WEIGHT_NORMAL = 'normal';

export const BRAND_AND_ASCENT_COLOR_02_VIOLET = "#5F68D9";
export const BRAND_AND_ASCENT_COLOR_02_TURQUOISE = "#00A2E0";

export const SYSTEM_COLOR_WHITE = '#FFFFFF';
export const SYSTEM_COLOR_WASH = '#ECECEC';
export const SYSTEM_COLOR_METAL1 = "#2F2F2F";
export const SYSTEM_COLOR_METAL2 = "#3A3A3A";
export const SYSTEM_COLOR_SKY1 = "#EDF5FF";
export const SYSTEM_COLOR_SKY2 = "#87CEFA";
export const TEXT_COLOR_DEFAULT = '#4A4A4A';
export const TEXT_COLOR_HIGHLIGHT = '#2B6BCB';
export const ASTERISK_COLOR = '#F58323';


export const globalStyles = theme => ({
    appCss: {
        fontSizeH1: FONT_SIZE_H1,
        fontSizeH2HomePage: FONT_SIZE_H2_HOMEPAGE,
        fontSizeH2SystemPage: FONT_SIZE_H2_SYSTEM_PAGE,
        fontSizeH3: FONT_SIZE_H3,
        fontSizeH4: FONT_SIZE_H4,
        fontSizeBody1: FONT_SIZE_BODY1,
        fontSizeBody2: FONT_SIZE_BODY2,

        fontWeightBold: FONT_WEIGHT_BOLD,
        fontWeightNormal: FONT_WEIGHT_NORMAL,

        systemColorWhite: SYSTEM_COLOR_WHITE,
        systemColorWash: SYSTEM_COLOR_WASH,

        textColorDefault: TEXT_COLOR_DEFAULT,
        textColorHighlight: TEXT_COLOR_HIGHLIGHT
    },
    h4: {
        fontSize: FONT_SIZE_H4,
        fontWeight: FONT_WEIGHT_BOLD,
        color: TEXT_COLOR_DEFAULT,
    },
    body1: {
        fontSize: FONT_SIZE_BODY1,
        color: TEXT_COLOR_DEFAULT,
    },
    body2: {
        fontSize: FONT_SIZE_BODY2,
        color: TEXT_COLOR_DEFAULT,
    },
    body3:{
        fontSize: 18,
        fontWeight: FONT_WEIGHT_BOLD,

        color: TEXT_COLOR_DEFAULT,

    },
    link: {
        fontSize: FONT_SIZE_BODY1,
        color: TEXT_COLOR_HIGHLIGHT,
    },
    button: {
        fontSize: FONT_SIZE_BUTTON,
        fontWeight: FONT_WEIGHT_BOLD,
        color: SYSTEM_COLOR_WHITE,
        textTransform: 'none',
    },
    buttonBlack: {
        fontSize: FONT_SIZE_BUTTON,
        fontWeight: FONT_WEIGHT_BOLD,
        color: SYSTEM_COLOR_WHITE,
        textTransform: 'none',
    },
    icon: {
        color: SYSTEM_COLOR_WHITE,
    },
    selectOption: {
        fontSize: FONT_SIZE_BODY1,
        color: TEXT_COLOR_DEFAULT
    }
});