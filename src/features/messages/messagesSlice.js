import { createSlice } from '@reduxjs/toolkit';

import { getMessages } from '../../api/messagesAPI';

export const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
        messages: [],
        err: '',
    },
    reducers: {
        // reducers using Redux Toolkit and Immer for immutable state updates
        updateMessagesState: (state, action) => {
            const { messages } = action.payload;
            state.messages = messages
        },
        updateMessagesFailed(state, action) {
            state.err = action.payload
        }
    }

});

export const { updateMessagesState, updateMessagesFailed } = messagesSlice.actions;

export const updateMessagesAsync = () => async dispatch => {
    // fetch request
    try {
        const { messages } = await getMessages();
        dispatch(updateMessagesState(messages));
    } catch (err) {
        dispatch(updateMessagesFailed(err.toString()));
    }
}

export const selectMessagesState = state => state.messages.messages;

export default messagesSlice.reducer;