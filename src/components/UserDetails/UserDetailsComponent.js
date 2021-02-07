import React from 'react';
import {useParams} from "react-router";

export function UserDetailsComponent() {

    const { userId } = useParams();

    return (
        <div>
            <h3>{userId}</h3>
        </div>
    );
}