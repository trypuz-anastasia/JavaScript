
function dane(par1, par2, par3) {
    'use strict';
  var zwracanaWartosc;
  zwracanaWartosc = par1*par2*par3;
  return zwracanaWartosc;
}

var mnoznik1 = 5;
var mnoznik2 = 7;
var mnoznik3 = 10;

var wynik = dane(mnoznik1, mnoznik2, mnoznik3);

console.log(wynik);

var json = {
  "kind": "youtube#searchListResponse",
  "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/PaiEDiVxOyCWelLPuuwa9LKz3Gk\"",
  "nextPageToken": "CAUQAA",
  "regionCode": "KE",
  "pageInfo": {
    "totalResults": 4249,
    "resultsPerPage": 5
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/QpOIr3QKlV5EUlzfFcVvDiJT0hw\"",
      "id": {
        "kind": "youtube#channel",
        "channelId": "UCJowOS1R0FnhipXVqEnYU1A"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/AWutzVOt_5p1iLVifyBdfoSTf9E\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "Eqa2nAAhHN0"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/2dIR9BTfr7QphpBuY3hPU-h5u-4\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "IirngItQuVs"
      }
    }
  ]
};

// console.log(jason);

var itemy = json.items;
// console.log(itemy);

// for (var i=0; i < itemy.length; i++) {
//   console.log(itemy[i]);
// }

itemy.forEach( function (element, index) {
  console.log(element);
});
