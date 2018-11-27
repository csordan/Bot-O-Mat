Thank you for reviewing over my project!

I have chosen to do my project using React, a JavaScript library, because I thought it would be easier to read my code as well as practice manipulating the virtual DOM.

How to start my project:

1.  Go inside the project's main folder by doing:  `$ cd bot-o-mat`

2. If you haven't already, install Node from https://nodejs.org/en/download/ .

3. Run `$ npm install` to install the dependencies needed for React(listed in the `package.json` file).

4. Do `$ npm start` inside you're terminal to start up the React development server.

5. When the page loads, input a Robot name and select a Robot type from the dropdown list. If name or type or both isn't selected, you will be prompted with an error message.

6. To complete a Robot's task, press the Robot's `complete` button and wait until the ETA is finished.

7. After the task is finished, you will be presented with a green checkmark to show completion followed by the task slowly disappearing.

Have fun!


# BOT-O-MAT
Use any language to complete this challenge. The implementation is up to you: it can be a command-line application or have a graphical interface.

Your application should collect a name and robot type from the types we list below. For each, it should create a Robot of the type the user chooses, e.g. Larry, Bipedal.

Given the list of tasks below, your application should then assign the Robot a set of five tasks, all of which complete after a duration that we show in milliseconds.



- Collect a name and robot type from user.
- Instantiate a Robot of the type provided by the user with the name provided by the user
  - for example: Bipedal, Larry
- Set up methods on Robot to complete tasks from the provided list

## Robot
Robot completes tasks and removes them from the list when they are done (i.e. enough time has passed since starting the task).

## Tasks
Tasks have a description and an estimated time to complete.

```
[
  {
    description: 'do the dishes',
    eta: 1000,
  },{
    description: 'sweep the house',
    eta: 3000,
  },{
    description: 'do the laundry',
    eta: 10000,
  },{
    description: 'take out the recycling',
    eta: 4000,
  },{
    description: 'make a sammich',
    eta: 7000,
  },{
    description: 'mow the lawn',
    eta: 20000,
  },{
    description: 'rake the leaves',
    eta: 18000,
  },{
    description: 'give the dog a bath',
    eta: 14500,
  },{
    description: 'bake some cookies',
    eta: 8000,
  },{
    description: 'wash the car',
    eta: 20000,
  },
]
```

## Types
```
{
  UNIPEDAL: 'Unipedal',
  BIPEDAL: 'Bipedal',
  QUADRUPEDAL: 'Quadrupedal',
  ARACHNID: 'Arachnid',
  RADIAL: 'Radial',
  AERONAUTICAL: 'Aeronautical'
}
```

## Features to add once the core functionality is complete
Be creative and have fun! Use this list or create your own features.
- Allow users to create multiple robots at one time
- Create a leaderboard for tasks completed by each Robot
- Create tasks specific for each robot type, this could work in conjunction with the leaderboard. For e.g. robots that are assigned tasks that their type can’t perform won’t get “credit” for finishing the task.
- Add persistance for tasks, bots and leaderboard stats


# Bot-O-Mat
