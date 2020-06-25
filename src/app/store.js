import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import clusterReducer from '../features/cluster/clusterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    cluster: clusterReducer,
  },
});
