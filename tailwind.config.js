/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'Sans Serif']
      },
      colors: {
        'project-header': '#111113',
        'project-body': '#15171B',
        'project-cta': '#1FA4E5',
        'project-divisor': '#525252',
        'project-divisor-': '#AFAFAF',
        'project-warning': '#FFBE16',
        'project-text': '#FFF',
        'pink-sweetdreams': '#F9A8D4',
        'yellow-sweetdreams': '#FAF3C0',
        'dark-pink-sweetdreams': '#AD638C',
        'light-green-sweetdreams': '#8EF0FA',
        'dark-green-sweetdreams': '#6CA7AD'
      },
      lineHeight: {
        '24': '6rem'
      },
      fontWeight: {
        'font-300': '300',
        'font-200': '200'
      }
    },
  },
  plugins: [],
}

