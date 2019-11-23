1. What problem does the context API help solve?

    - Context API can by pass the parent/child data passing from top-down, it shares the prop explicitly to the components needs and eliminating props drilling.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

	- Actions are simply put as events, which send data from the application to the store and are created within the action creators.
  - Reducers return a new state/updates state from the redux store and the action object.
  - Store is a single JavaScript object that contains our state for the application. It is known as the 'single source of truth' because it is not rewritten or reshaped but is immutable state tree, where we can easily retrieve the information and maintain a clean state tree.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

  - Application state is centralized global state and is accessable to any component.
  - Component state is locally stored state within the component and unable to be accessed by other components unless explicitly passed through props or sub components.
  - Best to use application state when the same state needs to be shared between mulitple components, components dont belong to the same tree hierarchy, or the number of props that needs to be passed through multiple components.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  - Redux-thunk is a separate node package that allows us to make the flow asynchronous, so we can make API calls from our action creators and easier to read/follow.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

  - I think context API is my favorite just because I feel I can see/wrap my head around the concept, more visually pleasing and easier to use. Where as with Redux, I understand what it is doing but trying to apply it to code, my brain just cant grasp what it is doing behind the scenes. 