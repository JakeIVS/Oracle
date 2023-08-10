# Introduction

Oracle is a react application used for virtual tabletop gaming. At current, it is only compatible with Dungeons and Dragons 5th Edition.

Oracle allows you to create a campaign or character for a campaign. Once created, the players can view a generated character sheet with all of their character's stats, and the player running the campaign can highlight specific fields on the players' character sheets, helping guide newer players through the gameplay.

## Getting Started

### Server

Once inside the repository, set up the backend environment with the following commands

```bash
$ pipenv install
$ pipenv shell
```

This will install all necessary dependencies. To initiate the database, run:

```bash
$ export FLASK_APP=app.py
$ export FLASK_RUN_PORT=5555
$ flask db init
```

And then create the first database migration:

```bash
$ flask db revision --autogenerate -m"create tables"
$ flask db upgrade head
```

With the database set up, you can now run the API:

```bash
$ python app.py
```

### Client

Navigate into the client folder of the repository, then download the dependencies and run the React app.

```bash
$ npm install
$ npm run dev
```
