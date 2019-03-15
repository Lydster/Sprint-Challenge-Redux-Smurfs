


1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

array.filter(), arr.map(),  

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are payloads of information that send payloads of information from your app to your store.

reducers specify how the application state changes in response to actions sent to the store.

the store is a single object in our app that contains the state.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

You might use component state on a form that is seperate from the other data on your applications. You would use application state to manage state in an app that needs to have information uupdated in multiple places.

1.  What is middleware?

middleware acts as a bridge between data and an application. You can use it to pause and perform other functions before finishing another function.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux thunk is middleware that allows you to call action creators that return a function instead of an action object.

1.  Which `react-redux` method links up our `components` with our `redux store`?

the connect function
