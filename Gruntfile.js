module.exports = function(grunt) {

  // Load all tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Project configuration
    pkg: grunt.file.readJSON('package.json'),

    // Handle vendor prefixing
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({ browsers: ['last 2 versions', 'ie 8', 'ie 9'] })
        ]
      },
      build: {
        src: '_site/**/*.css'
      }
    },

    // Optimise/minify images
    imagemin: {
      build: {
        options: {
          optimizationLevel: 3,
          progressive: true,
          interlaced: true,
          svgoPlugins: [{ removeViewBox: false }]
        },
        files: [{
          expand: true,
          cwd: '_site',
          src: ['**/*.{png,jpg,gif}'],
          dest: '_site'
        }]
      },
    },

    // Builds Jekyll website to `_site` directory
    jekyll: {
      options: {
        bundleExec: true
      },
      build: {}
    },

    // Starts a local server with LiveReload instance
    connect: {
      server: {
        options: {
          livereload: true,
          open: true,
          base: '_site/',
          hostname: '*',
          port: 9001
        }
      }
    },

    // Watch for changes in files
    watch: {
      options: {
        livereload: true
      },
      jekyll: {
        files: ['**/*', '!_site/**'],
        tasks: ['build']
      }
    },

    // Publish site to GitHub Pages
    buildcontrol: {
      options: {
        dir: '_site',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      publish: {
        options: {
          remote: 'git@github.com:resir014/Reliable-Lightweight-CSS-Reset.git',
          branch: 'gh-pages'
        }
      }
    }
  });

  // Default task
  grunt.registerTask('default', ['build']);

  // Manually build page
  grunt.registerTask('build', ['jekyll', 'postcss']);

  // Start a local server
  grunt.registerTask('serve', ['build', 'connect:server', 'watch']);

  // Publish to GitHub
  grunt.registerTask('publish', ['jekyll', 'postcss', 'imagemin', 'buildcontrol']);
};