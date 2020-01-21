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

3) Now let's be a bit more scalable and focus on separation of concern. Hero feature should not know anything about the message feature.
Message feature is more something transverse that can be used in any feature.
Let's use ngRx effects to help decouple our code: https://ngrx.io/guide/effects
Effects are great to decouple things.
For example a component of a feature that should not know about a service but this service needs to perform actions when something happen in that component.

    STEP 1:
     Create the write message effect for the fetch heroes.
    STEP 2:
     Replicate step 1 for all occurrences where hero dispatch the message action



   
