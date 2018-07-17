var myMap = L.map("map", {
    center: [39.0997, -94.5786],
    zoom: 10
  });
  
  // Add a tile layer
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap);
  
  // An array containing each city's name, location, and population
  var reviews = [
    {
      coordinates: [
        39.0574043,
        -94.5981116
      ],
      cuisine: "BBQ, American",
      name: "Q39"
    },
    {
      coordinates: [
        39.091567,
        -94.556222
      ],
      cuisine: "American, BBQ",
      name: "Arthur Bryant's Barbeque"
    },
    {
      coordinates: [
        39.0878,
        -94.58486
      ],
      cuisine: "Italian, Desserts",
      name: "Lidia’s"
    },
    {
      coordinates: [
        39.091501,
        -94.578667
      ],
      cuisine: "Burger, Pizza",
      name: "Grinders"
    },
    {
      coordinates: [
        38.99322,
        -94.59423
      ],
      cuisine: "Italian, Pizza",
      name: "Waldo Pizza"
    },
    {
      coordinates: [
        39.053016,
        -94.59075
      ],
      cuisine: "Breakfast",
      name: "Beer Kitchen"
    },
    {
      coordinates: [
        39.0878,
        -94.58486
      ],
      cuisine: "BBQ, Seafood, Steak",
      name: "Jack Stack Barbecue - Freight House"
    },
    {
      coordinates: [
        39.05106,
        -94.595739
      ],
      cuisine: "American, Burger",
      name: "Westport Flea Market Bar and Grill"
    },
    {
      coordinates: [
        39.053529,
        -94.591771
      ],
      cuisine: "Burger, Bar Food",
      name: "McCoy's Public House"
    },
    {
      coordinates: [
        39.087907,
        -94.587715
      ],
      cuisine: "Thai",
      name: "Lulu's Thai Noodle Shop & Satay Bar"
    },
    {
      coordinates: [
        39.057199,
        -94.606253
      ],
      cuisine: "Asian, Vegetarian",
      name: "Blue Koi"
    },
    {
      coordinates: [
        39.057011,
        -94.606288
      ],
      cuisine: "Pizza, Sandwich",
      name: "D'Bronx Deli & Pizzeria"
    },
    {
      coordinates: [
        39.042472,
        -94.592138
      ],
      cuisine: "American, Seafood, Steak",
      name: "McCormick & Schmick's"
    },
    {
      coordinates: [
        39.04186,
        -94.58902
      ],
      cuisine: "American, BBQ, Seafood",
      name: "Jack Stack Barbecue"
    },
    {
      coordinates: [
        39.022228,
        -94.647796
      ],
      cuisine: "Sandwich",
      name: "Longboards Wraps & Bowls"
    },
    {
      coordinates: [
        39.042247,
        -94.590407
      ],
      cuisine: "Breakfast",
      name: "The Classic Cup"
    },
    {
      coordinates: [
        39.04229,
        -94.58946
      ],
      cuisine: "Brazilian, Steak",
      name: "Fogo de Chao Brazilian Steakhouse"
    },
    {
      coordinates: [
        39.034556,
        -94.587153
      ],
      cuisine: "Breakfast, Diner, Sandwich",
      name: "Eggtc."
    },
    {
      coordinates: [
        39.07905,
        -94.575995
      ],
      cuisine: "Cafe, Diner, Sandwich",
      name: "Succotash"
    },
    {
      coordinates: [
        39.08538,
        -94.59256
      ],
      cuisine: "Spanish, Tapas",
      name: "La Bodega"
    },
    {
      coordinates: [
        39.109264,
        -94.571982
      ],
      cuisine: "Italian",
      name: "Garozzo's Ristorante"
    },
    {
      coordinates: [
        39.040538,
        -94.592353
      ],
      cuisine: "Asian, Hawaiian, Sushi",
      name: "Kona Grill"
    },
    {
      coordinates: [
        39.05303,
        -94.59072
      ],
      cuisine: "American, Mediterranean, Middle Eastern",
      name: "Jerusalem Café"
    },
    {
      coordinates: [
        38.88351,
        -94.58636
      ],
      cuisine: "BBQ, Seafood, Steak",
      name: "Jack Stack Barbecue - Martin City"
    },
    {
      coordinates: [
        39.1094219,
        -94.5846692
      ],
      cuisine: "American, Vegetarian",
      name: "The Farmhouse"
    },
    {
      coordinates: [
        39.0401557,
        -94.5939376
      ],
      cuisine: "American",
      name: "Gram & Dun"
    },
    {
      coordinates: [
        39.03759,
        -94.587368
      ],
      cuisine: "Pizza, Sandwich",
      name: "Spin Neapolitan Pizza"
    },
    {
      coordinates: [
        39.19124,
        -94.51489
      ],
      cuisine: "American",
      name: "Stroud's Restaurant & Bar"
    },
    {
      coordinates: [
        39.109446,
        -94.570402
      ],
      cuisine: "Breakfast, Sandwich",
      name: "Happy Gillis Café & Hangout"
    },
    {
      coordinates: [
        39.041428,
        -94.59366
      ],
      cuisine: "Italian",
      name: "BRIO Tuscan Grille"
    },
    {
      coordinates: [
        39.09472,
        -94.5932
      ],
      cuisine: "American, Bar Food",
      name: "The Westside Local"
    },
    {
      coordinates: [
        39.057123,
        -94.60523
      ],
      cuisine: "American, Breakfast",
      name: "Room 39"
    },
    {
      coordinates: [
        39.092668,
        -94.593198
      ],
      cuisine: "Cafe, Coffee and Tea, French, Crepes",
      name: "Chez Elle Creperie Coffeehouse"
    },
    {
      coordinates: [
        39.10914,
        -94.57905
      ],
      cuisine: "French",
      name: "Le Fou Frog"
    },
    {
      coordinates: [
        39.097073,
        -94.582749
      ],
      cuisine: "American, Seafood",
      name: "Bristol Seafood Grill"
    },
    {
      coordinates: [
        39.092858,
        -94.593534
      ],
      cuisine: "Breakfast, Diner, Vegetarian",
      name: "Blue Bird Bistro"
    },
    {
      coordinates: [
        39.0425007984,
        -94.5885434747
      ],
      cuisine: "Asian, Chinese, Dim Sum",
      name: "P.F. Chang's"
    },
    {
      coordinates: [
        39.03452,
        -94.51663
      ],
      cuisine: "BBQ",
      name: "LC's Bar-B-Q"
    },
    {
      coordinates: [
        39.109357,
        -94.573261
      ],
      cuisine: "Vietnamese",
      name: "Vietnam Cafe"
    },
    {
      coordinates: [
        39.239603,
        -94.576846
      ],
      cuisine: "American, Breakfast, Sandwich",
      name: "Kate's Kitchen"
    },
    {
      coordinates: [
        39.04141,
        -94.59486
      ],
      cuisine: "American, Seafood, Steak",
      name: "The Capital Grille"
    },
    {
      coordinates: [
        39.075333,
        -94.576209
      ],
      cuisine: "Breakfast, Diner, Sandwich",
      name: "You Say Tomato"
    },
    {
      coordinates: [
        39.057166,
        -94.606445
      ],
      cuisine: "Seafood, Southern, Cajun",
      name: "Jazz, A Louisiana Kitchen"
    },
    {
      coordinates: [
        39.034611,
        -94.58715
      ],
      cuisine: "Italian, Pizza, Sandwich",
      name: "Minsky's Pizza"
    },
    {
      coordinates: [
        39.084073,
        -94.58444
      ],
      cuisine: "American, Seafood, Steak",
      name: "Pierpont's at Union Station"
    },
    {
      coordinates: [
        39.014203,
        -94.592088
      ],
      cuisine: "European",
      name: "Avenues Bistro"
    },
    {
      coordinates: [
        39.044453,
        -94.586958
      ],
      cuisine: "American, Seafood, Steak",
      name: "Cafe Trio Restaurant"
    },
    {
      coordinates: [
        39.094258,
        -94.583288
      ],
      cuisine: "Japanese, Sushi",
      name: "Nara"
    },
    {
      coordinates: [
        39.090265,
        -94.5838
      ],
      cuisine: "Spanish, Tapas",
      name: "Extra Virgin"
    },
    {
      coordinates: [
        39.042165,
        -94.589128
      ],
      cuisine: "American, Desserts, International",
      name: "The Cheesecake Factory"
    },
    {
      coordinates: [
        39.05081,
        -94.59682
      ],
      cuisine: "New American",
      name: "Bluestem"
    },
    {
      coordinates: [
        38.911743,
        -94.376945
      ],
      cuisine: "American",
      name: "Stuey McBrews"
    },
    {
      coordinates: [
        39.075336,
        -94.60305
      ],
      cuisine: "Mexican",
      name: "El Patron"
    },
    {
      coordinates: [
        39.087725,
        -94.584949
      ],
      cuisine: "European, German, Eastern European",
      name: "Grunauer"
    },
    {
      coordinates: [
        39.042268,
        -94.594814
      ],
      cuisine: "Vegetarian",
      name: "Eden Alley Cafe"
    },
    {
      coordinates: [
        39.05255,
        -94.591002
      ],
      cuisine: "Indian",
      name: "Moti Mahal Cusine Of India"
    },
    {
      coordinates: [
        39.051514,
        -94.588942
      ],
      cuisine: "Japanese, Steak",
      name: "Gojo Japanese Steak House"
    },
    {
      coordinates: [
        39.176213,
        -94.612963
      ],
      cuisine: "American, Breakfast, Diner",
      name: "Corner Cafe"
    },
    {
      coordinates: [
        38.973217,
        -94.575191
      ],
      cuisine: "American, BBQ, Southern",
      name: "B.B.'s Lawnside BBQ"
    },
    {
      coordinates: [
        39.03744,
        -94.587375
      ],
      cuisine: "Desserts, Ice Cream",
      name: "Glace Artisan Ice Cream"
    },
    {
      coordinates: [
        39.02747,
        -94.58465
      ],
      cuisine: "Coffee and Tea, French",
      name: "Aixois"
    },
    {
      coordinates: [
        39.08902,
        -94.58682
      ],
      cuisine: "Mexican",
      name: "Manny's Mexican Restaurant"
    },
    {
      coordinates: [
        39.098438,
        -94.58199
      ],
      cuisine: "Bar Food",
      name: "Flying Saucer"
    },
    {
      coordinates: [
        39.034611,
        -94.58715
      ],
      cuisine: "Italian, Pizza",
      name: "Osteria Il Centro"
    },
    {
      coordinates: [
        39.097414,
        -94.58199
      ],
      cuisine: "Bar Food, Sandwich",
      name: "Gordon Biersch Brewery Restaurant"
    },
    {
      coordinates: [
        39.107796,
        -94.581119
      ],
      cuisine: "American, Bar Food",
      name: "Harry's Country Club"
    },
    {
      coordinates: [
        39.251426,
        -94.666021
      ],
      cuisine: "Indian, Pakistani",
      name: "Swagat Fine Indian Cuisine"
    },
    {
      coordinates: [
        39.013697,
        -94.590502
      ],
      cuisine: "European, Italian, Spanish",
      name: "Carmen's Café"
    },
    {
      coordinates: [
        38.941325,
        -94.605731
      ],
      cuisine: "European, Italian, Mediterranean",
      name: "Jasper's"
    },
    {
      coordinates: [
        39.167194,
        -94.521167
      ],
      cuisine: "Japanese, Sushi, Vietnamese",
      name: "Mr. Le's Sushi"
    },
    {
      coordinates: [
        39.387373,
        -94.581482
      ],
      cuisine: "American",
      name: "Justus Drugstore Restaurant"
    },
    {
      coordinates: [
        39.057122,
        -94.605192
      ],
      cuisine: "Chinese",
      name: "Po's Dumpling Bar"
    },
    {
      coordinates: [
        39.0515871,
        -94.5904253
      ],
      cuisine: "Mexican",
      name: "Port Fonda"
    },
    {
      coordinates: [
        39.042544,
        -94.590743
      ],
      cuisine: "Desserts, Italian, Pizza",
      name: "Buca di Beppo Italian Restaurant"
    },
    {
      coordinates: [
        39.050129,
        -94.606604
      ],
      cuisine: "Italian, Sandwich",
      name: "Cupini's"
    },
    {
      coordinates: [
        39.05698,
        -94.606289
      ],
      cuisine: "Asian, Vegetarian, Mongolian",
      name: "Genghis Khan Mongolian Grill"
    },
    {
      coordinates: [
        39.208628,
        -94.576476
      ],
      cuisine: "BBQ, Steak",
      name: "Smokehouse Barbecue - Gladstone Mo"
    },
    {
      coordinates: [
        39.209224,
        -94.651274
      ],
      cuisine: "Brazilian, Southern, Steak",
      name: "Em Chamas Brazilian Grill"
    },
    {
      coordinates: [
        39.131002,
        -94.5776
      ],
      cuisine: "BBQ",
      name: "Smokin' Guns BBQ"
    },
    {
      coordinates: [
        38.926165,
        -94.359455
      ],
      cuisine: "Breakfast, Mediterranean",
      name: "The Fig Tree Cafe & Bakery"
    },
    {
      coordinates: [
        39.108519,
        -94.582564
      ],
      cuisine: "African, Ethiopian",
      name: "Blue Nile Cafe"
    },
    {
      coordinates: [
        39.057417,
        -94.606288
      ],
      cuisine: "Japanese, Sushi",
      name: "Friends Sushi & Bento Place"
    },
    {
      coordinates: [
        39.087685,
        -94.588572
      ],
      cuisine: "Vegetarian",
      name: "Cafe Gratitude"
    },
    {
      coordinates: [
        39.07602,
        -94.60266
      ],
      cuisine: "Mexican, Vegetarian",
      name: "Ponak's Mexican Kitchen"
    },
    {
      coordinates: [
        39.053073,
        -94.590631
      ],
      cuisine: "American, Breakfast, French",
      name: "Westport Cafe & Bar"
    },
    {
      coordinates: [
        39.0534801,
        -94.5926026
      ],
      cuisine: "BBQ, Southern, Bar Food",
      name: "Char Bar"
    },
    {
      coordinates: [
        39.247214,
        -94.66284
      ],
      cuisine: "Mexican",
      name: "Ixtapa Mexican Cuisine"
    },
    {
      coordinates: [
        39.056945,
        -94.603624
      ],
      cuisine: "Middle Eastern, Vegetarian",
      name: "Aladdin Café"
    },
    {
      coordinates: [
        39.097397,
        -94.583132
      ],
      cuisine: "Asian, Japanese, Sushi",
      name: "Drunken Fish Power & Light District"
    },
    {
      coordinates: [
        39.16168,
        -94.57673
      ],
      cuisine: "Desserts, Italian, Seafood",
      name: "Cascone's Italian"
    },
    {
      coordinates: [
        39.04056,
        -94.59205
      ],
      cuisine: "American, French",
      name: "The Melting Pot of Kansas City"
    },
    {
      coordinates: [
        38.94002,
        -94.60919
      ],
      cuisine: "BBQ",
      name: "Gates Bar-B-Q"
    },
    {
      coordinates: [
        39.16869,
        -94.5979
      ],
      cuisine: "Latin American, Southern, Steak",
      name: "Piropos"
    },
    {
      coordinates: [
        39.091677,
        -94.584892
      ],
      cuisine: "Pizza",
      name: "Pizza Bella"
    },
    {
      coordinates: [
        39.042002,
        -94.585581
      ],
      cuisine: "Breakfast, Burger",
      name: "Winstead's"
    },
    {
      coordinates: [
        38.923359,
        -94.401915
      ],
      cuisine: "Japanese, Sushi",
      name: "Siki Japanese Steak House & Sushi Bar‎"
    },
    {
      coordinates: [
        39.040489,
        -94.593806
      ],
      cuisine: "American, Steak",
      name: "Plaza III Steakhouse"
    },
    {
      coordinates: [
        38.992462,
        -94.594036
      ],
      cuisine: "Japanese, Korean, Sushi",
      name: "Kokoro Maki House"
    },
    {
      coordinates: [
        39.050774,
        -94.596796
      ],
      cuisine: "American, European",
      name: "PotPie"
    },
    {
      coordinates: [
        39.042519,
        -94.593706
      ],
      cuisine: "American, Burger, Bar Food",
      name: "Tomfooleries Restaurant & Bar"
    }
  ];
  
  // Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
  for (var i = 0; i < reviews.length; i++) {
    var Food = reviews[i];
    L.marker(Food.coordinates)
      .bindPopup("<h1>" + Food.name + "</h1> <hr> <h3>Cuisine: " + Food.cuisine + "</h3>")
      .addTo(myMap);
  }
  