import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const middleware = applyMiddleware(thunk)

const store = createStore(
  rootReducer,
  compose(
    middleware
  )

)

export default store
