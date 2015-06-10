# baditicker-api
Using the public pool open data from Stadt Zürich as a JSON-API, CORS-enabled!

# API
This is a simple, stupid API with a single endpoint: `GET /`.

Sending a GET request to [https://baditicker.herokuapp.com/](https://baditicker.herokuapp.com/) you'll receive a response like this:

```json
{
  "pools": [{
    "name": "Flussbad Au-Höngg",
    "temperature": "17",
    "updatedAt": "Mi, 10.06.2015 11:02",
    "open": false
  },
  {
    "name": "Flussbad Oberer Letten",
    "temperature": "17",
    "updatedAt": "Mi, 10.06.2015 08:20",
    "open": true
  }] 
}
```

Here's what each field means:

| Field name | Description | Type |
| === | === | === |
| name | A human-readable name of the pool | String |
| temperature | The water temperature | Float |
| updatedAt | A datetime containing the last update of the record for this pool | DateTime |
| open | Indicates if this pool is currently open or closed | Boolean |

## Contributing

If you find a bug or want to change the data that the API exposes, please open an issue or a pull request.
The codebase follows the [NPM Coding Style Standard](http://npmjs.org/standard).

## License

* The code is MIT licensed.
* The [original data source](https://www.stadt-zuerich.ch/portal/de/index/ogd/daten/wassertemperaturen_freibaeder.html#description1) is licensed under the [CC-0 license](http://creativecommons.org/publicdomain/zero/1.0/)
