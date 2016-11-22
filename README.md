# github-api-user
[![Build Status](https://travis-ci.org/nischayv/github-api-user.svg?branch=master)](https://travis-ci.org/nischayv/github-api-user)

A simple wrapper for Github API

## Install

`npm install --save github-api-user`

## Usage

```javascript
const githubUser = require('github-api-user');

githubUser('nischayv').then(user => {
    console.log(user);
    /*
    {
        name: 'Nischay Venkatram',
        company: 'Student',
        location: 'Ames, IA'
        email: 'nischay.v@gmail.com',
        bio: 'Tect Enthusiast and Dreamer',
        avatar_url: 'https://avatars.githubusercontent.com/u/13353147?v=3'
    }
    */
});

```

## License

MIT © [Nischay Venkatram] (https://github.com/nischayv)