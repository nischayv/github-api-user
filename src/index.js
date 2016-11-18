'use strict';

import got from 'got';
import Promise from 'pinkie-promise';

function getUser(username) {
    if (typeof username !== 'string') {
        return Promise.reject(new Error('username required'));
    }
    const url = 'https://www.github.com/' + username;

    return got(url)
        .then(res => {

            return {

            };
        })
        .catch(err => {
            if (err.statusCode === 404) {
                err.message = 'User doesn\'t exist';
            }

            throw err;
        });
}