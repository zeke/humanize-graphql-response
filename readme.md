# humanize-graphql-response 

> Clean up GraphQL repsonse objects by flattening nodes and edges into object arrays

Give this module a GraphQL response object and it will recursively flatten all 
edges into arrays, making your data more compact and easier to read.

Consider the following:

<img width="1311" alt="screen shot 2018-03-20 at 12 02 49 pm" src="https://user-images.githubusercontent.com/2289/37677141-670b4de8-2c37-11e8-8d8a-8d7bd97c206b.png">

With a raw GraphQL response, accessing the name of the latest release asset
looks like this:

`data.repository.releases.edges[0].node.releaseAssets.edges[0].node.name`

With a humanized response, it looks like this:

`data.repository.releases[0].releaseAssets[0].name`

## Installation

```sh
npm install humanize-graphql-response --save
```

## Usage

```js
const humanize = require('humanize-graphql-response')

humanize(graphQLResponseObject)
```

## Tests

```sh
npm install
npm test
```

## Dependencies

None

## Dev Dependencies

- [jest](https://github.com/facebook/jest): Delightful JavaScript Testing.
- [standard](https://github.com/standard/standard): JavaScript Standard Style


## License

MIT
