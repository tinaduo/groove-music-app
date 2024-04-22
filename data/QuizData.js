const quizData = {
  start: {
    type: 'decision',
    question: 'How are you feeling today?',
    options: {
      "chill": 'beatsOrLyrics',
      "energized": 'dance'
    }
  },
  beatsOrLyrics: {
    type: 'decision',
    question: 'What aspect of a song usually draws you in?',
    options: {
      "the beats": 'pianoOrGuitar',
      "the lyrics": 'harmonies'
    }
  },
  dance: {
    type: 'decision',
    question: 'Which setting resonates with you the most?',
    options: {
      "dancing by yourself in your room": 'musicClassOrLearnYourself',
      "dancing with friends at a party": 'karaoke'
    }
  },
  pianoOrGuitar: {
    type: 'decision',
    question: 'Which instrument do you find most appealing?',
    options: {
      "piano": 'musicStyle',
      "guitar": 'listenToMusicWith'
    }
  },
  harmonies: {
    type: 'decision',
    question: 'Do prefer to listen to throwbacks or what is trending',
    options: {
      "throwbacks": 'discoverMusic',
      "trending": 'musicClassOrLearnYourself'
    }
  },
  karaoke: {
    type: 'decision',
    question: 'What is your go to karaoke song?',
    options: {
      "a heartfelt ballad": 'liveMusicOrStudio',
      "a fun catchy pop hit": 'howToListenToMusic'
    }
  },
  musicStyle: {
    type: 'decision',
    question: 'Which music style do you enjoy the most?',
    options: {
      "classical": 'listenToMusicWith',
      "jazz": 'whereListenMusic'
    }
  },
  listenToMusicWith: {
    type: 'decision',
    question: 'How do you enjoy listening to music?',
    options: {
      "alone": 'resultAlone',
      "with friends": 'whereListenMusic'
    }
  },
  discoverMusic: {
    type: 'decision',
    question: 'Would you rather discover hidden gems or chart toppers in music?',
    options: {
      "hidden gems": 'pianoOrGuitar',
      "chart toppers": 'musicStyle'
    }
  },
  musicClassOrLearnYourself: {
    type: 'decision',
    question: 'Would you rather attend a music class or learn an instrument by yourself?',
    options: {
      "attend a music class": 'discoverMusic',
      "learn by myself": 'liveMusicOrStudio'
    }
  },
  liveMusicOrStudio: {
      type: 'decision',
      question: 'When listening to music, do you prefer the live or studio version?',
      options: {
        "live": 'whereListenMusic',
        "studio": 'howToListenToMusic'
      }
    },
  howToListenToMusic: {
    type: 'decision',
    question: 'How do you listen to your music?',
    options: {
      "with speaker": 'whereListenMusic',
      "with headphones": 'resultHeadphones'
    } 
  },
  whereListenMusic: {
      type: 'decision',
      question: 'Where do you listen to music?',
      options: {
        "at home": 'weather',
        "in a vehicle": 'composeOrWrite'
      }
    },
  weather: {
    type: 'decision',
    question: 'What was the weather like today?',
    options: {
      "sunny": 'resultSunny',
      "gloomy": 'resultGloomy'
    }
  },
  composeOrWrite: {
      type: 'decision',
      question: 'would you rather compose music or write lyrics',
      options: {
        "compose music": 'resultCompose',
        "write lyrics": 'resultWrite'
      }
    },

  //RESULTS!!!
  resultGloomy: {
    type: 'result',
    result: 'Gloomy Grooves',
    lottiePath: '/characters/sad.json',
    buttonLink: 'https://open.spotify.com/playlist/37x1PQonFuLA9qHn7VpepD?si=319b572250a6401e',
    chip: ['sad', 'gloomy', 'melancholy']
  },
  resultSunny: {
    type: 'result',
    result: 'Getting Groovy',
    lottiePath: '/characters/happy.json',
    buttonLink: 'https://open.spotify.com/playlist/1gXMFf9KmnYbgjvP4ak2gD?si=29917b1e90dc4492',
    chip: ['booster', 'energy', 'happy']
  },
  resultAlone: {
    type: 'result',
    result: 'Mellow Grooves',
    lottiePath: '/characters/lofi.json',
    buttonLink: 'https://open.spotify.com/playlist/0xfm1CymM5CSSCkkbaTSDU?si=f72d53a4a5fd4011',
    chip: ['indie', 'chill', 'LoFi']
  },
  resultWrite: {
    type: 'result',
    result: 'Yeehaw Grooves',
    lottiePath: '/characters/yeehaw.json',
    buttonLink: 'https://open.spotify.com/playlist/2PrcTlnOL8U7anBM7EywQz?si=8f59cd5745f14a28',
    chip: ['country', 'folk', 'blue']
  },
  resultCompose: {
    type: 'result',
    result: 'Groovy Beats',
    lottiePath: '/characters/angry.json',
    buttonLink: 'https://open.spotify.com/playlist/60pptVpv0E036BHc9A0v4n?si=235cf3aae4684465',
    chip: ['upbeat', 'hype', 'rap']
  },
  resultHeadphones: {
    type: 'result',
    result: 'Groovy Throwbacks',
    lottiePath: '/characters/throwback.json',
    buttonLink: 'https://open.spotify.com/playlist/3DupaaoNYhSRR9cCOXven9?si=b532929f25394dbc',
    chip: ['party', 'nostalgic', 'Y2K']
  }
};

export default quizData;
