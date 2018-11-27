const robotTasks = [
    {
        description: 'do the dishes',
        eta: 1000,
    }, {
        description: 'sweep the house',
        eta: 3000,
    }, {
        description: 'do the laundry',
        eta: 10000,
    }, {
        description: 'take out the recycling',
        eta: 4000,
    }, {
        description: 'make a sammich',
        eta: 7000,
    }, {
        description: 'mow the lawn',
        eta: 20000,
    }, {
        description: 'rake the leaves',
        eta: 18000,
    }, {
        description: 'give the dog a bath',
        eta: 14500,
    }, {
        description: 'bake some cookies',
        eta: 8000,
    }, {
        description: 'wash the car',
        eta: 20000,
    }
];

const robotTypes = [
    {
        UNIPEDAL: 'Unipedal',
        BIPEDAL: 'Bipedal',
        QUADRUPEDAL: 'Quadrupedal',
        ARACHNID: 'Arachnid',
        RADIAL: 'Radial',
        AERONAUTICAL: 'Aeronautical'
    }
];

module.exports = { robotTasks, robotTypes }//`module.exports` is a way to export your `modules` aka, objects, functions, classes