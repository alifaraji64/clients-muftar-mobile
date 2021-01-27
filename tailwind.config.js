//process.env.NODE_ENV = 'production'
process.env.NODE_ENV = 'development'
console.log('env', process.env.NODE_ENV)
module.exports = {
  purge: [
    './src/**/*.vue',
    './src/views/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('~@/assets/images/hero-image.jpeg')",
       }),
       backgroundColor: theme => ({
        ...theme('colors'),
        'primary':"#34a6c9"
       }),
       borderColor: theme => ({
         ...theme('colors'),
         'primary':'#34a6c9'
       }),
       textColor: theme => ({
         ...theme('colors'),
         'primary':'#34a6c9'
       }),
       width: {
        '1/8': '12.5%',
        '3/8': '37.5%',
        '5/8': '62.5%',
        '7/8':'87.5%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      height:{
        "100":"100rem"
      },
      screens:{
        'sm': {'max': '570px'},
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}