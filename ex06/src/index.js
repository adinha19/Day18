let rockStar = new Map([
    ['artist', 'The Rolling Stones'],
    ['song', 'Angie'],
    ['album', 'Goats Head Soup'],
    ['singer', 'Mick Jagger']
])


if (key[0] > 'a') {

    let key = [...rockStar.keys()];
    console.log(key);
};
console.log(newRock);

module.exports = { rockStar, newRock };