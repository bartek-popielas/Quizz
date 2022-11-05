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
        { id: 1, type: 'radio', name: 'sex', value: 'female', title: 'Kobieta' },
        { id: 2, type: 'radio', name: 'sex', value: 'male', title: 'Mężczyzna' },
      ],
    },
    {
      headerTitle: `2. Jeśli możesz wyruszyć w podróż 
                        gdziekolwiek zechcesz. Jakie miejsce
                        wybierzesz?`,
      buttonTitle: 'Jeszcze coś?',
      qInput: [
        { id: 1, type: 'radio', name: 'city', value: 20, title: 'Paryż' },
        { id: 2, type: 'radio', name: 'city', value: 19, title: 'New York' },
        { id: 3, type: 'radio', name: 'city', value: 18, title: 'Bahama' },
        { id: 4, type: 'radio', name: 'city', value: 17, title: 'Bali' },
        { id: 5, type: 'radio', name: 'city', value: 16, title: 'Dom w lesie' },
      ],
    },
    {
      headerTitle: `3. Powiedz mi jaka cecha charakteru najlepiej Cię opisuję?`,
      buttonTitle: 'Jeszcze coś?',
      qInput: [
        { id: 1, type: 'radio', name: 'character', value: 3, title: 'Romantyk' },
        { id: 2, type: 'radio', name: 'character', value: 3, title: 'Ekstrawertyk' },
        { id: 3, type: 'radio', name: 'character', value: 3, title: 'Optymista' },
        { id: 4, type: 'radio', name: 'character', value: 3, title: 'Myśliciel' },
        { id: 5, type: 'radio', name: 'character', value: 3, title: 'Wrażliwy' },
      ],
    },
    {
      headerTitle: `4. Jaka jest Twoja ulubiona forma spędzania wolnego czasu?`,
      buttonTitle: 'Jeszcze coś?',
      qInput: [
        { id: 1, type: 'radio', name: 'hobby', value: 2, title: 'Książka' },
        { id: 2, type: 'radio', name: 'hobby', value: 2, title: 'Spotkanie na mieście' },
        { id: 3, type: 'radio', name: 'hobby', value: 2, title: 'Spacery' },
        { id: 4, type: 'radio', name: 'hobby', value: 2, title: 'Joga' },
        { id: 5, type: 'radio', name: 'hobby', value: 2, title: 'Praca w ogrodzie' },
      ],
    },
    {
      headerTitle: `5. Jaki styl najlepiej do Ciebie pasuje?`,
      buttonTitle: 'Jeszcze coś?',
      qInput: [
        { id: 1, type: 'radio', name: 'style', value: 2, title: 'Trendy' },
        { id: 2, type: 'radio', name: 'style', value: 2, title: 'Glam' },
        { id: 3, type: 'radio', name: 'style', value: 2, title: 'Sportowiec' },
        { id: 4, type: 'radio', name: 'style', value: 2, title: 'Boho' },
        { id: 5, type: 'radio', name: 'style', value: 2, title: 'Minimalistyczny' },
      ],
    },
    {
      headerTitle: `6. Jaką atmosferę najbardziej lubisz w swoim domu?`,
      buttonTitle: 'Jeszcze coś?',
      qInput: [
        { id: 1, type: 'radio', name: 'vibe', value: 1, title: 'Przytulnie' },
        { id: 2, type: 'radio', name: 'vibe', value: 1, title: 'Energicznie' },
        { id: 3, type: 'radio', name: 'vibe', value: 1, title: 'Harmonijnie' },
        { id: 4, type: 'radio', name: 'vibe', value: 1, title: 'Odprężająco' },
        { id: 5, type: 'radio', name: 'vibe', value: 1, title: 'Spokojnie' },
      ],
    },
  ],
}
