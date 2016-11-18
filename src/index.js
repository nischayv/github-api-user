'use strict';

import got from 'got';
import Promise from 'pinkie-promise';

function getUser(username) {
    if (typeof username !== 'string') {
        return Promise.reject(new Error('username required'));
    }

}