# How to

The SCSS of the tutorial is in the main > assets > css > _tutorial.scss file.

The JavaScript of the tutorial is in the main > assets > js > tutorial.js file.

In the style.scss file, we import [CodyFrame](https://codyhouse.co/ds/docs/framework) (CodyHouse front-end framework) basic style from the npm module and _custom-style.scss, where we define the global style of buttons, forms, typography and more.

The scripts.js imported in index.html uses Gulp to combine the tutorial.js with the util.js file of CodyFrame.

## Gulp

To make changes to this project, you can use the Gulp configuration file included in the source files. Once you have downloaded the source files, navigate to the tutorial folder, and run the following commands in your command line:

```
npm install
npm run gulp watch
```

The first command will install the modules required for compiling SCSS into CSS and importing CodyFrame; the second will launch your project on a development server.

⚠️ If you get error messages while trying to run the `npm install` command, you may need to download and install [Git](https://git-scm.com) first.

## Import tutorial in CodyFrame project

To import this component in a CodyFrame project, import _tutorial.scss and tutorial.js.

If you're starting a project from scratch:

- Download CodyFrame on [Github](https://github.com/CodyHouse/codyhouse-framework)
- Import _tutorial.scss and tutorial.js
- (Optionally) Copy the custom style (custom-style/*) into your new project if you want to preserve the style of buttons, form elements, typography, etc.

## Tutorials

For more web design tutorials, visit [codyhouse.co/tutorials](https://codyhouse.co/tutorials)