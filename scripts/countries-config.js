// Shared registry of "deep" countries (one-file-per-place architecture) used by
// validate.js, generate-bundles.js and generate-og-pages.js, so adding a new country
// means updating this list in one place instead of three.
module.exports = [
  {
    slug: 'japon',
    countryFile: 'japan.js',
    creditsFile: 'japan-credits.js',
    cityDirs: ['kioto', 'nara', 'uji', 'miyajima', 'himeji', 'osaka', 'tokio', 'kamakura'],
    countryVar: 'japanCountry', citiesVar: 'japanCities', placesVar: 'japanPlaces',
  },
  {
    slug: 'polonia',
    countryFile: 'polonia.js',
    creditsFile: 'polonia-credits.js',
    cityDirs: ['cracovia', 'varsovia'],
    countryVar: 'polandCountry', citiesVar: 'polandCities', placesVar: 'polandPlaces',
  },
  {
    slug: 'hungria',
    countryFile: 'hungria.js',
    creditsFile: 'hungria-credits.js',
    cityDirs: ['budapest'],
    countryVar: 'hungaryCountry', citiesVar: 'hungaryCities', placesVar: 'hungaryPlaces',
  },
];
