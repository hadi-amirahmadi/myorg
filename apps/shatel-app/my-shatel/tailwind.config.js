const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../apps/**/*.{js,jsx,ts,tsx}',
    '../../libs/**/*.{js,jsx,ts,tsx}',
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  important: '#root',
  theme: {
    extend: {},
  },
  plugins: [],
};
