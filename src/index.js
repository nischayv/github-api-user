'use strict';

import got from 'got';
import Promise from 'pinkie-promise';

function getUser(username) {
    if (typeof username !== 'string') {
        return Promise.reject(new Error('username required'));
    }
    const url = 'https://api.github.com/users/' + username;

    return got(url)
        .then(res => {
            return {
                name: res.name,
                company: res.company,
                location: res.location,
                email: res.email,
                bio: res.bio,
                avatar_url: res.avatar_url
            };
        })
        .catch(err => {
            if (err.statusCode === 404) {
                err.message = `User doesn't exist`;
            }

            throw err;
        });
}

module.exports = getUser;