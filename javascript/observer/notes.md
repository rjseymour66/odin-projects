- pass controller to view constructor as dependency
  - controller listens for events on the DOM

## View

- HTML, CSS
- DOM selectors
- communicates with controller
  - accepts dynamic values from controller

- EventListeners that tell the controller when to call the event handlers


## Model

- data, values for the DOM
- interacts with the DB
- communicates with the controller

## Controller

- receives user input
- processes requests (CRUD)
- gets data from the model
- passes data to the view
- implements eventlisteners

- event handler functions. These funcitons call methods on the model that mutate the model