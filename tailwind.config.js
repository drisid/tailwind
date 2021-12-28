module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js,css}"],
  purge: ['./src/**/* .{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}