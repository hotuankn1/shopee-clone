import { theme, ThemeConfig } from "antd"

export const appTheme: ThemeConfig = {
    token: {
        colorPrimary: '#FA541C',
        colorText: '#3D3737',
        fontFamily: 'Gilroy',
        fontWeightStrong: 400,

        fontSizeSM: 14,
        fontSize: 16,
        fontSizeLG: 18,
        fontSizeXL: 20,
    },

    components: {
        Typography: {
            fontWeightStrong: 500,

            fontSizeHeading1: 64,

            fontSizeHeading2: 32,


            fontSizeHeading3: 24,

            fontSizeHeading4: 16,

            fontSizeHeading5: 14,

        },

        Button: {
            fontSize: 16,
            borderRadius: 3,
            colorBorder: '#DDD',
            paddingContentHorizontal: 16,
            paddingContentVertical: 4,

            padding: 16,
        },
        Input: {
            colorBgContainer: '#fff',
            colorBorderBg: '#A49BF9',
            colorTextPlaceholder: '#85858A',
            colorBorder: '#8D8D8D',


            paddingContentHorizontal: 8,
            paddingContentVertical: 16,
            borderRadius: 4,
            controlHeight: 40,

       
        },

    }
}