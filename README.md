# Planning app

> The test task for EBC

## Run

Clone the repo and run a single command:

| Mode                                                               | Command                    | Details                                        |
|--------------------------------------------------------------------|----------------------------|------------------------------------------------|
| Production mode                                                    | `npm run deploy-here`      | Default port is 8080, add `-- -p 80` if needed |
| Deploy to [GitHub Pages](https://deltaidea.github.io/planning-app) | `npm run deploy-github`    | Requires write access to the repo              |
| Development mode                                                   | `npm install && npm start` | Hot reload enabled, listens to file changes    |

## Docs

The app is written in plain JavaScript and CSS on top of bare [create-react-app](https://github.com/facebookincubator/create-react-app).

Directory structure inside [`src`](src) is a bit unorthodox but fairly intuitive, given the small scope of the project:

- [`index.js`](src/index.js) is the container component for [`App.js`](src/App.js).
- [`redux/`](src/redux) contains files with reducers and actions combined, because there aren't many of them.
- High-level components ([`SchedulePage`](src/SchedulePage), etc.) have nested structure to avoid bloating `src/`.
- Container components are named `index.js` in their respective folders to simplify `import`s.

## License

MIT © Nikita Litvin
