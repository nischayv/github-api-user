import test from 'ava';
import fn from './index';

test('should get the github user', async t => {
    const user = await fn('nischayv');
    t.is(user.name, 'Nischay Venkatram');
    t.is(user.email, null);
    t.is(user.bio, 'Tech Enthusiast and Dreamer');
    t.is(user.location, 'Ames, IA');
    t.is(user.company, 'Student');
    t.is(user.avatar_url, 'https://avatars.githubusercontent.com/u/13353147?v=3');
});