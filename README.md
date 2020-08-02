# Howto-Steps

Universal How to project. Question - answer step-by-step service.
TODO: Plans to integrate with known chat bot (FaceBook, Telegram) and voice (Alexa, Siri, Google Assistent, Yandex Alisa) services.

_For more examples and usage, please refer to the [Wiki][wiki-url] and [GitHub Projects][projects-url]._

## Yarn or NPM

Feel free to use npm instead of yarn.

## Install and configure

1. Install MongoDB runner or use existing client.

```
yarn add global mongodb-runner
```

2. Create database (default name 'parse') and edit server/config.json if needed.

3. Install Parse Server using **install:server** script bellow

Docs: [Parse Server Guide](https://docs.parseplatform.org/parse-server/guide/)

During parse-server installation you should see your secrets:

```
APPLICATION_ID=SECRET_APPLICATION_ID
MASTER_KEY=SECRET_MASTER_KEY
```

4. Save you secrets to file server/.env:

```
APPLICATION_ID=SECRET_APPLICATION_ID
MASTER_KEY=SECRET_MASTER_KEY
```

5. Install client app using **install:server** script bellow

6. Save your secrets to config file client/.env.development.local:

```
REACT_APP_APPLICATION_ID=SECRET_APPLICATION_ID
REACT_APP_SERVER_URL=http://localhost:8000/parse

```

## Available Scripts

In the project directory, you can run:

### `yarn install:server`

Install parse server.

### `yarn install:client`

Install client app.

### `yarn start:server`

Runs the app server in the development mode.<br>
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.
In the project directory, you can run:

### `yarn start:client`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

TODO: run end-to-end tests.

## Contributing

Kanban development board with current tasks on [GitHub Projects][projects-url].

1. Fork it (<https://github.com/sergous/howto-steps/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->

[projects-url]: https://github.com/sergous/howto-steps/projects/
[wiki-url]: https://github.com/sergous/howto-steps/wiki
