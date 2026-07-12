# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#  GameVerse

**Live Demo:** https://game-verse-amber.vercel.app/

GameVerse is a full-stack game discovery web app that lets users search and explore games, with AI-powered game recommendations built in.

## Features

-  **Game Search** — search and browse games with cover art, powered by the RAWG Video Games Database API
-  **AI Recommendations** — get personalized game suggestions based on your search, powered by OpenRouter's AI models
-  Clean, responsive UI with a dark theme

## Tech Stack

**Frontend:** React.js, CSS
**Backend:** Node.js, Express
**APIs:** RAWG Video Games API, OpenRouter AI API
**Deployment:** Vercel (frontend), Render (backend)

## How It Works

1. User searches for a game or genre
2. Frontend fetches matching games from the RAWG API and displays results with cover images
3. User can also request AI-generated game recommendations based on their search — this hits a custom Express backend, which calls an AI model via OpenRouter and returns fun, curated suggestions

## Project Structure

## Running Locally

**Frontend:**
```bash
npm install
npm start
```

**Backend:**
```bash
cd server
npm install
node index.js
```

You'll need an OpenRouter API key in `server/.env`:

## What I Learned

Building this project involved handling real-world full-stack challenges — integrating two external APIs, managing environment variables securely across separate frontend/backend deployments, and debugging live production issues (deprecated AI model endpoints, git security scanning, environment variable formatting).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
