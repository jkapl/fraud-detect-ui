import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    updateAsync,
    selectState,
} from './clusterSlice';

export function Cluster() {
    const status = useSelector(selectState);
    const dispatch = useDispatch();
    
    return (
        <div>
            <span>Brokers: {status.broker}</span>
            <span>Zookeepers: {status.zookeeper}</span>
            
            <button
                onClick={() => dispatch(updateAsync())}
            >
                Get status
            </button>
        </div>
    );
}