# Tour of heros + Ngrx tutorial

Install https://github.com/zalmoxisus/redux-devtools-extension/

Full code and solution at: https://github.com/pmachaux/tof-ngrx-tutorial-stackblitz
Use documentation of Ngrx: https://ngrx.io/guide/store
You can find solution of every step on the branch with matching name

1) Goal: The heroes component must not handle any logic to maintain the list state.
We are going to use the Ngrx store to help us the logic out of there and create a more scalable and maintainable component
    STEP 1:
     After fetching the hero, add the list to the store and display the list from the store:
        - create action and associated reducer action (use https://next.ngrx.io/guide/store/actions and https://next.ngrx.io/guide/store/reducers)
        - create the selector called by the component to display the list (use https://next.ngrx.io/guide/store/selectors)
        - Update the dashboard component and heroes component
    
    STEP 2:
     Manage add and delete actions / reducers so the component does not care about this logic anymore.
 
 
2) The message service is basically a store for messages occurring within the app.
We want to maintain the concept of single source of truth. Therefore let's get rid of this service and use the NgRx store

    STEP 1:
     Create a messageState state, and update the appState with this new state. Create associated reducer and initial state
    STEP 2:
     Create the actions and associated reducer actions to add and clear messages. You can also create now the selector for the messages
    STEP 3:
     Remove the Message Service and replace its usage by dispatching the corresponding actions or using the selector.
     At the end of this step, from a user perspective, you must have the exact same behavior as before but under the hood we use NgRx




   
