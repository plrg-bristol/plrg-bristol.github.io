This project uses [Create React App](https://github.com/facebook/create-react-app) and [React-Github-Pages](https://github.com/gitname/react-gh-pages).

# Prerequisites
- Install node & npm (tested with node 16)
- Clone the repository locally: `git clone https://github.com/plrg-bristol/plrg-bristol.github.io.git`
- Switch the dev branch: `git checkout dev`
- Install the required node modules: `npm i`

# Run the site locally on `localhost:3000`:
`npm start`

This is how you can test changes and check everything is working on the site.

# Deploy the site
Make sure you're on the `dev` branch.

`npm run-script deploy`

This command compiles the code into frontend js, deploys the compiled website to the `master` branch and updates the live website, so only run this once you're happy with the updated version you've tested locally with `npm start`.

After running the command, you should be able to monitor deployment progress in the Actions tab of the github repository. (https://github.com/plrg-bristol/plrg-bristol.github.io/actions)

# Updating the site
Use a code editor such as [VS Code](https://code.visualstudio.com/) to make changes. We recommend installing the `Prettier` and `ESLint` VS code plugins.

All relevant code is located in the `src/config/` directory. Each page is declared in `src/config/pages.js` using a `PageComponent` which is passed a list of components to render on the page. Components can be strings, JSX, or any valid React component.

# Files & Images
Content should be placed in the `public/` folder, e.g. `public/images/logo.png`.

These images' source will then be their pathname excluding the outer `public/` directory, e.g.
```JSX
import ImageComponent from "../components/generics/imageComponent";

const imageDetails = {
    name: "Sam Frohlich",
    src: "images/people/sam.jpg",
    link: "https://samfrohlich.github.io/",
}

const image = <ImageComponent
    alt={image.name}
    caption={image.name}
    src={image.src}
    link={image.link}
    maxHeight="200px"
/>

```

# SCSS and Styling
Pages are styled using SCSS, the `scss/` folder contains all non-inline styling. `scss/scss_global` contains globally applied SCSS, `scss/*.module.scss` contains modular scss that must be imported and used in individual files. E.g. see `src/components/images/image.js` which imports and uses module specific classes from `src/scss/image.module.scss`.