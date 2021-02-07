import React from 'react';
import {NavLink} from 'react-router-dom';

export const userTableColumns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => <NavLink to={`/users/${record.id}`}>{text}</NavLink>
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Address',
            children: [
                {
                    title: 'Street',
                    dataIndex: ['address', 'street'],
                    key: 'street'
                },
                {
                    title: 'Suite',
                    dataIndex: ['address', 'suite'],
                    key: 'suite'
                },
                {
                    title: 'City',
                    dataIndex: ['address', 'city'],
                    key: 'city'
                },
                {
                    title: 'Zipcode',
                    dataIndex: ['address', 'zipcode'],
                    key: 'zipcode'
                },
                {
                    title: 'Geo',
                    children: [
                        {
                            title: 'Lat',
                            dataIndex: ['address', 'geo', 'lat'],
                            key: 'lat'
                        },
                        {
                            title: 'Lng',
                            dataIndex: ['address', 'geo', 'lng'],
                            key: 'lng'
                        }
                    ]
                },
            ],
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone'
        },
        {
            title: 'Website',
            dataIndex: 'website',
            key: 'website',
        },
        {
            title: 'Company',
            children: [
                {
                    title: 'Company name',
                    dataIndex: ['company', 'name']
                },
                {
                    title: 'Catch phrase',
                    dataIndex: ['company', 'catchPhrase']
                },
                {
                    title: 'BS',
                    dataIndex: ['company', 'bs']
                }
            ]
        },
    ];
