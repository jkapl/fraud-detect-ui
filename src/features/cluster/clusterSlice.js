import { createSlice } from '@reduxjs/toolkit';

import  { getClusterState } from '../../api/clusterAPI'

export const clusterSlice = createSlice({
    name: 'cluster',
    initialState: {
        cluster: {
            broker: 0,
            zookeeper: 0
        },
        err : ''
    },
    reducers: {
        // reducers using Redux Toolkit and Immer for immutable state updates
        updateState: (state, action) => {
            const { broker, zookeeper } = action.payload
            state.cluster.broker = broker
            state.cluster.zookeeper = zookeeper
        },
        updateClusterStateFailed(state, action) {
            state.err = action.payload
        }
    },
});

export const { updateState, updateClusterStateFailed } = clusterSlice.actions;

export const updateAsync = () => async dispatch => {
    // fetch request to server
    try {
        const { cluster } = await getClusterState();
        dispatch(updateState(cluster))
    } catch (err) {
        dispatch(updateClusterStateFailed(err.toString()))
    }
}

export const selectState = state => state.cluster.cluster;

export default clusterSlice.reducer;