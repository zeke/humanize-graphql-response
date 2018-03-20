# humanize-graphql-response 

> Clean up GraphQL repsonse objects by flattening nodes and edges into object arrays

<img width="1311" alt="screen shot 2018-03-20 at 12 02 49 pm" src="https://user-images.githubusercontent.com/2289/37677141-670b4de8-2c37-11e8-8d8a-8d7bd97c206b.png">

---

Give this module a GraphQL response object and it will recursively flatten all 
edges into arrays, making your data more compact and easier to read.

Raw GraphQL response:

`data.repository.releases.edges[0].node.releaseAssets.edges[0].node.name`

Humanized GraphQL response:

`data.repository.releases[0].releaseAssets[0].name`

### Before

```json
{
  "data": {
    "repository": {
      "nameWithOwner": "electron/electron",
      "releases": {
        "edges": [
          {
            "node": {
              "name": "electron v1.8.4",
              "createdAt": "2018-03-16T18:44:17Z",
              "releaseAssets": {
                "edges": [
                  {
                    "node": {
                      "name": "electron-v1.8.4-linux-arm64.zip",
                      "downloadCount": 203
                    }
                  },
                  {
                    "node": {
                      "name": "electron-v1.8.4-linux-arm64-symbols.zip",
                      "downloadCount": 23
                    }
                  }
                ]
              }
            }
          },
          {
            "node": {
              "name": "electron v1.7.13",
              "createdAt": "2018-03-15T14:28:46Z",
              "releaseAssets": {
                "edges": [
                  {
                    "node": {
                      "name": "electron-v1.7.13-linux-x64.zip",
                      "downloadCount": 348
                    }
                  },
                  {
                    "node": {
                      "name": "electron-v1.7.13-linux-x64-symbols.zip",
                      "downloadCount": 27
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    }
  }
}
```

### After

```json
{
  "data": {
    "repository": {
      "nameWithOwner": "electron/electron",
      "releases": [
        {
          "name": "electron v1.8.4",
          "createdAt": "2018-03-16T18:44:17Z",
          "releaseAssets": [
            {
              "name": "electron-v1.8.4-linux-arm64.zip",
              "downloadCount": 203
            },
            {
              "name": "electron-v1.8.4-linux-arm64-symbols.zip",
              "downloadCount": 23
            }
          ]
        },
        {
          "name": "electron v1.7.13",
          "createdAt": "2018-03-15T14:28:46Z",
          "releaseAssets": [
            {
              "name": "electron-v1.7.13-linux-x64.zip",
              "downloadCount": 348
            },
            {
              "name": "electron-v1.7.13-linux-x64-symbols.zip",
              "downloadCount": 27
            }
          ]
        }
      ]
    }
  }
}
```

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
