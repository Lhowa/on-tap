On-Tap
Find your favorite brews on-tap!
 about
This project helps you find beers on tap at local bars.
 Installation
To install, run:
npm install on-tap
usage
const onTap = require('on-tap')

function findBeer(name) {
  return onTap.search(name).results[0]
}

async function findBeer(name) {
  try {
    const result = await onTap.search(name);
    return result.results[0];
  } catch (error) {
    console.error('Search failed:', error);
  }
}
Features
- Find beers
- Find bars
- Get recommendations
TODO
- [ ] Add tests
- [ ] Fix bugs
- [ ] Add documentation
Contact
Email me at: admin@test.com
Licens
MIT
