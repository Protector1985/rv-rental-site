const settings = {
  "name": "rv-app",
  "state": {
    "frontity": {
      "url": "http://localhost:10003",
      "title": "Valley Wohnmobile",
      "description": "Deutsche Wohmobilvermietung in Los Angeles"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Über uns",
              "/category/ueber-uns/"
            ],
            [
              "Blog",
              "/category/travel/"
            ],
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://localhost:10003/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ]
};

export default settings;
