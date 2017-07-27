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

- [`redux/`](src/redux) contains files with reducers and actions combined, because there aren't many of them.
- High-level components ([`SchedulePage`](src/components/SchedulePage), etc.) have nested structure to avoid bloating `src/components/`.
- Container components are named `index.js` in their respective folders to simplify `import`s.

## Notes

- I've been provided with a spec that lives here: [`docs/description.txt`](docs/description.txt).
- The app is written in pure ES6 and plain CSS. I used features like object spread (`{ ...foo }`) from ES7+. I can work without them if necessary.
- The code has been written under the assumption that the feature set won't ever be expanded. Some stuff like form validation isn't factored out into reusable components.
- The design isn't pixel-perfect. I allocated two days for this demo, and this is the closest to pixel-perfect I could do in that time.
- There's no autocomplete when editing participants. Please tell me if you want me to implement that as well, if that would help you better judge my style.
- Production mode uses [`http-server`](https://github.com/indexzero/http-server), which technically is a Node.js server. I decided to use it instead of Express to be able to publish on GitHub Pages.
- Everything else pretty much follows the spec.

## License

MIT © Nikita Litvin
