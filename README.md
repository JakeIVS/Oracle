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

## Create a Campaign

Select the "Create New Campaign" button from the user dashboard. This will take you to a form where you can input the campaign name and a code that players must enter to join the campaign. Your campaign is what you will use to communicate with the players in your game. When they join, they will select a character of theirs to tie to that specific campaign. After they have done that, the owner of the campaign will be able to use the campaign control panel to push rolls to the players in the campaign

### My Campaigns

Selecting this button from the user dashboard will display a list of all campaigns created by the signed-in user. Each card displays the campaign name and number of players currently in the campaign, as well as a delete button to get rid of any campaigns you don't need anymore (WARNING: currently there is no secondary confirmation when clicking the delete button). Clicking on a campaign's card will take you to the campaign control panel.

## Create a Character

Select the "Create New Character" button from the user dashboard. This will take you to a form where you can input your character's stats and basic info. Each stat score should be a whole number between 1 and 20. At current, there are no validations apart from being between 1 and 20 that the form looks for in the stat selections, but make sure you are working with your DM to generate stats in a proper manner.

### My Characters

Selecting this button from the user dashboard will display a list of all characters created by the currently signed-in user. Each card displays the character's image, name, level, and class. Additionally, the icon on the right side of the card indicates whether or not the character is currently part of a campaign group. Selecting a card will take you to that specific character's Character Sheet.

## Campaign Control Panel

The campaign control panel contains a blank character sheet template. Clicking on any field indicated with a cube icon will highlight the field on your template as well as on the character sheets of all characters in the selected campaign. This can be used to guide new players to the specific stats and bonuses they need to add to any roll they make.

## Auto-rolling

Clicking on any modifier field on the character sheet will automatically "roll" the selected stat or ability by generating a random number between 1 and 20 and adding whatever value is present in the selected field. At current, the generated value is simply printed to the terminal.
