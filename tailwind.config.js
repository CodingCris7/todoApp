module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        catawba: '#7C2E41',
        'red-violet': '#942B3B',
        'upsdell-red': '#AB2836',
        'indigo-dye': '#053C5E',
        'space-cadet': '#353652',
        'english-violet': '#4C334D',
        'prussian-blue': '#1D3958',
        'dark-gray': '#343A40',
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotateY(0)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
      },
      animation: {
        flip: 'flip 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
