import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import clusterReducer from '../features/cluster/clusterSlice';
import messagesReducer from '../features/messages/messagesSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    cluster: clusterReducer,
    messages: messagesReducer,
  },
});
