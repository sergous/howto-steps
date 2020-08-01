# Howto-Steps

Universal How to project. Question - answer step-by-step service.
Plans to integrate with known chat bot (FaceBook, Telegram) and voice (Alexa, Siri, Google Assistent, Yandex Alisa) services.

_For more examples and usage, please refer to the [Wiki][wiki-url] and [<img src="https://d33wubrfki0l68.cloudfront.net/879d8e40573d7118cbc5d5e95544c2bce8fa5143/a5f17/images/2013/pivotal-tracker-fluid-icon-2013.png"  width="18" height="18" style="vertical-align: middle;padding:2px">PivotalTracker][pivotal-url]._

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Configure Parse Server backend

Backend Code: [sergous/parse-express-server](https://github.com/sergous/parse-express-server)

Add server to file .env.development.local:

```
REACT_APP_APPLICATION_ID=APPLICATIONIDFROMYOURPARSERBACKEND
REACT_APP_SERVER_URL=http://localhost:8000/parse

```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Contributing

Kanban development board with current tasks on
[<img src="https://d33wubrfki0l68.cloudfront.net/879d8e40573d7118cbc5d5e95544c2bce8fa5143/a5f17/images/2013/pivotal-tracker-fluid-icon-2013.png"  width="18" height="18" style="vertical-align: middle;padding:2px"> PivotalTracker][pivotal-url].

1. Fork it (<https://github.com/sergous/howto-steps/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->

[pivotal-url]: https://www.pivotaltracker.com/n/projects/2267174
[wiki-url]: https://github.com/sergous/howto-steps/wiki
