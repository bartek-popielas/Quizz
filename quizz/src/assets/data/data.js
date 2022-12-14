export const Data = {
  views: [
    {
      headerTitle: `Pozwól, że poznamy się lepiej.
                        Chciałbym zadać Ci kilka
                        pytań, dzięki którym dowiem
                        się, co uszczęśliwia Cię
                        najbardziej!`,
      imgAlt: 'świeca sojowa w rękach',
      pText: `Poświęć mi zaledwie 2 minuty i
                        odpowiadając na 5 pytań dowiedz się jakie zapachy są dla Ciebie!`,
      buttonTitle: 'Zaczynamy!',
    },
    {
      headerTitle: '1. Powiedz mi kim jesteś i jak masz na imię?',
      buttonTitle: 'Zapytaj jeszcze o coś',
      sexInput: [
        {
          id: 1,
          type: 'radio',
          num: 1,
          name: 'sex',
          value: 'female',
          title: 'Kobieta',
          image: `${process.env.PUBLIC_URL}/woman.png`,
        },
        {
          id: 2,
          type: 'radio',
          num: 2,
          name: 'sex',
          value: 'male',
          title: 'Mężczyzna',
          image: `${process.env.PUBLIC_URL}/men.png`,
        },
      ],
    },
    {
      headerTitle: `2. Jeśli możesz wyruszyć w podróż 
                        gdziekolwiek zechcesz. Jakie miejsce
                        wybierzesz?`,
      buttonTitle: 'Jeszcze coś?',
      qInput: [
        {
          id: 240,
          answer: true,
          type: 'radio',
          num: 1,
          name: 'city',
          value: 20,
          image: `${process.env.PUBLIC_URL}/paris.png`,
          title: 'Paryż',
        },
        {
          id: 241,
          answer: true,
          type: 'radio',
          num: 2,
          name: 'city',
          value: 20,
          image: `${process.env.PUBLIC_URL}/ny.png`,
          title: 'New York',
        },
        {
          id: 244,
          answer: true,
          type: 'radio',
          num: 3,
          name: 'city',
          value: 20,
          image: `${process.env.PUBLIC_URL}/bahamy.png`,
          title: 'Bahama',
        },
        {
          id: 242,
          answer: true,
          type: 'radio',
          num: 4,
          name: 'city',
          value: 20,
          image: `${process.env.PUBLIC_URL}/bali.png`,
          title: 'Bali',
        },
        {
          id: 243,
          answer: true,
          type: 'radio',
          num: 5,
          name: 'city',
          value: 20,
          image: `${process.env.PUBLIC_URL}/londyn.png`,
          title: 'Londyn',
        },
      ],
    },
    {
      headerTitle: `3. Powiedz mi jaka cecha charakteru najlepiej Cię opisuję?`,
      buttonTitle: 'Jeszcze coś?',
      qInput: [
        {
          id: 240,
          answer: true,
          type: 'radio',
          num: 1,
          name: 'character',
          value: 10,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Romantyk',
        },
        {
          id: 241,
          answer: true,
          type: 'radio',
          num: 2,
          name: 'character',
          value: 10,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Ekstrawertyk',
        },
        {
          id: 244,
          answer: true,
          type: 'radio',
          num: 3,
          name: 'character',
          value: 3,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Optymista',
        },
        {
          id: 242,
          answer: true,
          type: 'radio',
          num: 4,
          name: 'character',
          value: 10,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Myśliciel',
        },
        {
          id: 243,
          answer: true,
          type: 'radio',
          num: 5,
          name: 'character',
          value: 10,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Wrażliwy',
        },
      ],
    },
    {
      headerTitle: `4. Jaka jest Twoja ulubiona forma spędzania wolnego czasu?`,
      buttonTitle: 'Jeszcze coś?',
      qInput: [
        {
          id: 240,
          answer: true,
          type: 'radio',
          num: 1,
          name: 'hobby',
          value: 5,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Książka',
        },
        {
          id: 241,
          answer: true,
          type: 'radio',
          num: 2,
          name: 'hobby',
          value: 5,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Spotkanie na mieście',
        },
        {
          id: 244,
          answer: true,
          type: 'radio',
          num: 3,
          name: 'hobby',
          value: 5,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Spacery',
        },
        {
          id: 242,
          answer: true,
          type: 'radio',
          num: 4,
          name: 'hobby',
          value: 5,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Joga',
        },
        {
          id: 243,
          answer: true,
          type: 'radio',
          num: 5,
          name: 'hobby',
          value: 5,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Praca w ogrodzie',
        },
      ],
    },
    {
      headerTitle: `5. Jaki styl najlepiej do Ciebie pasuje?`,
      buttonTitle: 'Jeszcze coś?',
      qInput: [
        {
          id: 240,
          answer: true,
          type: 'radio',
          num: 1,
          name: 'style',
          value: 5,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Trendy',
        },
        {
          id: 241,
          answer: true,
          type: 'radio',
          num: 2,
          name: 'style',
          value: 5,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Glam',
        },
        {
          id: 244,
          answer: true,
          type: 'radio',
          num: 3,
          name: 'style',
          value: 5,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Sportowiec',
        },
        {
          id: 242,
          answer: true,
          type: 'radio',
          num: 4,
          name: 'style',
          value: 5,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Boho',
        },
        {
          id: 243,
          answer: true,
          type: 'radio',
          num: 5,
          name: 'style',
          value: 5,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Minimalistyczny',
        },
      ],
    },
    {
      headerTitle: `6. Jaką porę roku lubisz najbardziej?`,
      buttonTitle: 'Jeszcze coś?',
      qInput: [
        {
          id: 240,
          answer: true,
          type: 'radio',
          num: 1,
          name: 'style',
          value: 5,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Wiosna',
        },
        {
          id: 241,
          answer: true,
          type: 'radio',
          num: 2,
          name: 'style',
          value: 5,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Lato',
        },
        {
          id: 244,
          answer: true,
          type: 'radio',
          num: 3,
          name: 'style',
          value: 5,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Jesień',
        },
        {
          id: 242,
          answer: true,
          type: 'radio',
          num: 4,
          name: 'style',
          value: 5,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Zima',
        },
        {
          id: 243,
          answer: true,
          type: 'radio',
          num: 5,
          name: 'style',
          value: 5,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Obojętnie',
        },
      ],
    },
    {
      headerTitle: `7. Jaką atmosferę najbardziej lubisz w swoim domu?`,
      buttonTitle: 'Hmm...',
      sumUp: true,
      qInput: [
        {
          id: 240,
          answer: true,
          type: 'radio',
          num: 1,
          name: 'vibe',
          value: 5,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Przytulnie',
        },
        {
          id: 241,
          answer: true,
          type: 'radio',
          num: 2,
          name: 'vibe',
          value: 5,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Energicznie',
        },
        {
          id: 244,
          answer: true,
          type: 'radio',
          num: 3,
          name: 'vibe',
          value: 5,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Harmonijnie',
        },
        {
          id: 242,
          answer: true,
          type: 'radio',
          num: 4,
          name: 'vibe',
          value: 5,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Odprężająco',
        },
        {
          id: 243,
          answer: true,
          type: 'radio',
          num: 5,
          name: 'vibe',
          value: 5,
          image: `${process.env.PUBLIC_URL}/female_icon.png`,
          title: 'Spokojnie',
        },
      ],
    },
    {
      headerTitle: `Zaraz coś dla Ciebie wybiorę...`,
    },
  ],
}
