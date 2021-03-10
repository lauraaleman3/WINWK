// ...
{   // type and id are included//
    "type": "articles", // type member is a string//
    "id": "1", // id member is a string//
    "attributes": { //attribute is an object//
      "title": "Rails is Omakase"
    },
    "relationships": { //relationships is an object//
      "author": {
        "links": { // links is an object//
          "self": "/articles/1/relationships/author",
          "related": "/articles/1/author"
        },
        "data": { "type": "people", "id": "9" }
      }
    }
  }
  // ...