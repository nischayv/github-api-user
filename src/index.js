'use strict';
import got from 'got';
import promise from 'pinkie-promise';

function getUser(username) {
    if (typeof username !== 'string') {
        return promise.reject(new Error('username required'));
    }

}