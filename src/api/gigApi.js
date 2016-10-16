import delay from './delay';

const gigs = [
  {
    title: "Design Logo",
    category: "Graphics"
  },
  {
    title: "Draw pencil sketch of a photo",
    category: "Graphics"
  },
  {
    title: "Rewrite resume",
    category: "Writing"
  },
  {
    title: "Translate english text to french",
    category: "Writing"
  },
  {
    title: "Design greeting card",
    category: "Graphics"
  }
];

function fetchGigs(){
    return fetch('https://tangong-api.herokuapp.com/api/gigs');
}

class GigApi {
  static getAllGigs() {
    return new Promise((resolve, reject) => {
        // resolve(Object.assign([], gigs));
    });
  }
}

export default GigApi;
