# tldr-it-extension [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Yay!!%20I%20found%20this%20open%20source%20chrome%20extension%20to%20summarize%20articles%20for%20free!%20%0ACheck%20it%20out%20-%20&url=https://cutt.ly/HU7S17w&hashtags=tldrit,productivity,free,github,oss,opensource)

**TLDR it** is a Free online community based text summarizing tool that condenses long articles into key summary paragraphs

## Development

Run the following to build the code:

```
yarn install
yarn start          #For local development
#or
yarn build          #For production release
```

This will generate the bundle and other required files in ./dist directory.

Load the generated chrome extension in chrome by `Menu (⋮) -> More Tools -> Extensions` and then click on `LOAD UNPACKED` and select the dist folder.
Chrome extension is loaded and ready to use.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
