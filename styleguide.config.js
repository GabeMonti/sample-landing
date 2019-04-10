const vueLoader = require('vue-loader')
const path = require( 'path' )

module.exports = {
  require : [
    path.join(__dirname, './docs/global.requires.js'),
    path.join( __dirname, './docs/styleguide.css' ),
    path.join( __dirname, './public/tbox-semantic/dist/semantic.min.css' )
  ],
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md'
    },
    {
      name: 'File Structure',
      content: 'docs/filestructure.md',
      description: 'Description File Structure'
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Dependencies',
          content: 'docs/dependencies.md',
        },
        {
          name: 'Installation',
          content: 'docs/installation.md',
        },
        {
          name: 'Configuration',
          content: 'docs/configuration.md'
        }
      ]
    },
    {
      name: 'Components',
      components: 'src/components/**/*.vue'
    },
    {
      name: 'Pages',
      components: 'src/pages/**/*.vue'
    }
  ],
  defaultExample: false,
  showUsage: true,
  showCode: false,
};
