# Introduction

Oracle is a react application used for virtual tabletop gaming. At current, it is only compatible with Dungeons and Dragons 5th Edition.

Oracle allows you to create a campaign or character for a campaign. Once created, the players can view a generated character sheet with all of their character's stats, and the player running the campaign can highlight specific fields on the players' character sheets, helping guide newer players through the gameplay.

# Getting Started

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

# Using the Program

To utilize oracle you must first create an account. Once you are signed in, you will be taken to the user dashboard.

## Create a Character

Select the "Create New Character" button from the user dashboard. This will take you to a form where you can input your character's stats and basic info. Each stat score should be a whole number between 1 and 20. At current, there are no validations apart from being between 1 and 20 that the form looks for in the stat selections, but make sure you are working with your DM to generate stats in a proper manner.

## My Characters

Selecting this button from the user dashboard will display a list of all characters created by the currently signed-in user. Each card displays the character's image, name, level, and class. Additionally, the icon on the right side of the card indicates whether or not the character is currently part of a campaign group. Selecting a card will take you to that specific character's Character Sheet.
