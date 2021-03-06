# github-api-user
[![Build Status](https://travis-ci.org/nischayv/github-api-user.svg?branch=master)](https://travis-ci.org/nischayv/github-api-user)

> Get basic info of Github user

A simple wrapper for Github API. Gets the basic info of a github user without all the unnecessary stuff.

## Install

Using NPM
```
npm install --save github-api-user
```

Using Yarn
```
yarn add github-api-user
```

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
        bio: 'Tech Enthusiast and Dreamer',
        avatar_url: 'https://avatars.githubusercontent.com/u/13353147?v=3'
    }
    */
});

```

## License

[MIT License] (https://github.com/nischayv/github-api-user/blob/master/LICENSE)