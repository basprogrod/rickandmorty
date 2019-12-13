import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import createSagaModdlewere from 'redux-saga'
import storage from 'redux-persist/lib/storage'
import combineReducers from '@/store/reducers'
import watch from '@/sagas/'

const sagaMiddlewere = createSagaModdlewere()
const logger = createLogger({
  collapsed: true,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, combineReducers)
const middlewares = [
  sagaMiddlewere,
  logger,
]

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares),
)

export const persistor = persistStore(store)
sagaMiddlewere.run(watch)
