/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'red': {
        DEFAULT: '#F85A3E',
        '50': '#FEF1EF',
        '100': '#FEE1DB',
        '200': '#FCBFB4',
        '300': '#FB9D8D',
        '400': '#F97C65',
        '500': '#F85A3E',
        '600': '#F52C09',
        '700': '#BF2307',
        '800': '#891905',
        '900': '#530F03'
      },
      'orange': {
        DEFAULT: '#FF7733',
        '50': '#FFF1EB',
        '100': '#FFE4D6',
        '200': '#FFC9AD',
        '300': '#FFAD85',
        '400': '#FF925C',
        '500': '#FF7733',
        '600': '#FA5300',
        '700': '#C24100',
        '800': '#8A2E00',
        '900': '#521B00'
      },
      'yellow': {
        DEFAULT: '#FFBA08',
        '50': '#FFEDC0',
        '100': '#FFE8AB',
        '200': '#FFDC82',
        '300': '#FFD15A',
        '400': '#FFC531',
        '500': '#FFBA08',
        '600': '#CF9500',
        '700': '#976D00',
        '800': '#5F4400',
        '900': '#271C00'
      },
      'gray': {
        'gray': '#9E9E9E',
        'gray-50': '#FAFAFA',
        'gray-100': '#F5F5F5',
        'gray-200': '#EEEEEE',
        'gray-300': '#E0E0E0',
        'gray-400': '#BDBDBD',
        'gray-500': '#9E9E9E',
        'gray-600': '#757575',
        'gray-700': '#616161',
        'gray-800': '#424242',
        'gray-900': '#212121'
      },
      'white': '#FFFFFF',
      'black': '#000000',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ],
}
