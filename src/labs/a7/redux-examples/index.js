import React from "react";
// import {createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer"
import HelloReduxExampleComponent from "./hello-redux-example-component";
import Todos from "./todos-component";

// const store = createStore(hello);
const store = configureStore({
    reducer: {
        hello,
        todos
    }
});

const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
}
export default ReduxExamples;