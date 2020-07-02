import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    updateMessagesAsync,
    selectMessagesState,
} from './messagesSlice';

export function Messages() {
    const messages = useSelector(selectMessagesState);
    const dispatch = useDispatch();

    const listMessages = messages.map((message) => 
        <li>{message.value}</li>
    )

    return (
        <div>
            <span>Messages: </span>
            <ul>{listMessages}</ul>
            <button
                onClick={() => dispatch(updateMessagesAsync())}
            >
                Poll for messages
            </button>
        </div>
    );
}