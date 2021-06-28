import { filter, getPeopleWithFiltredAnimals, count, totalAnimalsPerPerson } from './utils';
import { Country, Person } from './types';

describe('suite de tests pour function filter', () => {
  test('function filter renvoie un array non vide', () => {
    const data: Country[] = [
      {
        name: 'France',
        people: [
          {
            name: 'François Hollande',
            animals: [
              {
                name: 'Sam Toye',
              },
            ],
          },
        ],
      },
      {
        name: 'Italie',
        people: [
          {
            name: 'Anthony Bruno',
            animals: [
              {
                name: 'Booda',
              },
            ],
          },
          {
            name: 'Samuel Daisy',
            animals: [
              {
                name: 'Roxy',
              },
            ],
          },
        ],
      },
    ];

    const expectedResult: Country[] = [
      {
        name: 'Italie',
        people: [
          {
            name: 'Anthony Bruno',
            animals: [
              {
                name: 'Booda',
              },
            ],
          },
        ],
      },
    ];

    const argsFilter = 'da';
    expect(filter(data, argsFilter)).toEqual(expectedResult);
  });

  test('function filter renvoie un array vide', () => {
    const data: Country[] = [
      {
        name: 'France',
        people: [
          {
            name: 'François Hollande',
            animals: [
              {
                name: 'Sam Toye',
              },
            ],
          },
        ],
      },
      {
        name: 'Italie',
        people: [
          {
            name: 'Anthony Bruno',
            animals: [
              {
                name: 'Booda',
              },
            ],
          },
          {
            name: 'Samuel Daisy',
            animals: [
              {
                name: 'Roxy',
              },
            ],
          },
        ],
      },
    ];

    const expectedResult: Country[] = [];

    const argsFilter = 'xyz';
    expect(filter(data, argsFilter)).toEqual(expectedResult);
  });
});

describe('suite de tests pour function count', () => {
  test('function count renvoie array avec somme de personnes et somme des animaux si existantes sinon 0', () => {
    const data: Country[] = [
      {
        name: 'France',
        people: [
          {
            name: 'Alexis Urati',
            animals: [
              {
                name: 'Lisa',
              },
              {
                name: 'Duck',
              },
              {
                name: 'Narwhal',
              },
            ],
          },
          {
            name: 'Benli Viciani',
            animals: [],
          },
          {
            name: 'Philip Murray',
            animals: [
              {
                name: 'Sandox',
              },
              {
                name: 'Buzzard',
              },
              {
                name: 'Yujr',
              },
              {
                name: 'Xenops',
              },
              {
                name: 'Dormouse',
              },
              {
                name: 'Olijia',
              },
              {
                name: 'Dinosaur',
              },
            ],
          },
        ],
      },
      {
        name: 'Italie',
        people: [],
      },
    ];
    const expectedResult: Country[] = [
      {
        name: 'France [3]',
        people: [
          {
            name: 'Alexis Urati [3]',
            animals: [
              {
                name: 'Lisa',
              },
              {
                name: 'Duck',
              },
              {
                name: 'Narwhal',
              },
            ],
          },
          {
            name: 'Benli Viciani [0]',
            animals: [],
          },
          {
            name: 'Philip Murray [7]',
            animals: [
              {
                name: 'Sandox',
              },
              {
                name: 'Buzzard',
              },
              {
                name: 'Yujr',
              },
              {
                name: 'Xenops',
              },
              {
                name: 'Dormouse',
              },
              {
                name: 'Olijia',
              },
              {
                name: 'Dinosaur',
              },
            ],
          },
        ],
      },
      {
        name: 'Italie [0]',
        people: [],
      },
    ];
    expect(count(data)).toEqual(expectedResult);
  });
});

describe('suite de tests pour function totalAnimalsPerPerson qui prend un objet country:Country en param et renvoie un array de type Person', () => {
  test('function totalAnimalsPerPerson renvoie un array de type Person avec la somme des animaux pour chaque personne ', () => {
    const data: Country = {
      name: 'Canada',
      people: [
        {
          name: 'Alice Davoti',
          animals: [
            {
              name: 'Anoa',
            },
            {
              name: 'Duck',
            },
            {
              name: 'Artibo',
            },
            {
              name: 'Badger',
            },
            {
              name: 'Cobra',
            },
            {
              name: 'Crow',
            },
          ],
        },
        {
          name: 'Sam Davidson',
          animals: [
            {
              name: 'Crow',
            },
            {
              name: 'Guinea Polik',
            },
            {
              name: 'Emma Mousy',
            },
          ],
        },
        {
          name: 'Philipo Adilson',
          animals: [
            {
              name: 'Elephant',
            },
            {
              name: 'Xenops',
            },
            {
              name: 'Dormouse',
            },
            {
              name: 'Anchovy',
            },
            {
              name: 'Dinosaur',
            },
          ],
        },

        {
          name: 'Louise Pinzauti',
          animals: [
            {
              name: 'Mantati',
            },
            {
              name: 'Ibex',
            },
            {
              name: 'Warbler',
            },
            {
              name: 'Duck',
            },
          ],
        },
      ],
    };
    const expectedResult: Person[] = [
      {
        name: 'Alice Davoti [6]',
        animals: [
          {
            name: 'Anoa',
          },
          {
            name: 'Duck',
          },
          {
            name: 'Artibo',
          },
          {
            name: 'Badger',
          },
          {
            name: 'Cobra',
          },
          {
            name: 'Crow',
          },
        ],
      },
      {
        name: 'Sam Davidson [3]',
        animals: [
          {
            name: 'Crow',
          },
          {
            name: 'Guinea Polik',
          },
          {
            name: 'Emma Mousy',
          },
        ],
      },
      {
        name: 'Philipo Adilson [5]',
        animals: [
          {
            name: 'Elephant',
          },
          {
            name: 'Xenops',
          },
          {
            name: 'Dormouse',
          },
          {
            name: 'Anchovy',
          },
          {
            name: 'Dinosaur',
          },
        ],
      },

      {
        name: 'Louise Pinzauti [4]',
        animals: [
          {
            name: 'Mantati',
          },
          {
            name: 'Ibex',
          },
          {
            name: 'Warbler',
          },
          {
            name: 'Duck',
          },
        ],
      },
    ];
    expect(totalAnimalsPerPerson(data)).toEqual(expectedResult);
  });
});

describe('suite de tests pour la function getPeopleWithFiltredAnimals qui prend en param un objet country:Country et le filterAgr pour filtrage et renvoie un array de type Person avec des animaux filtrés selon le filterAgr param', () => {
  test('function getPeopleWithFiltredAnimals renvoie un array de type Person avec la liste des animaux filtrée selon le filterAgr  pour chaque personne ', () => {
    const data: Country = {
      name: 'France',
      people: [
        {
          name: 'Jhon Bigboy',
          animals: [
            {
              name: 'aladin',
            },
            {
              name: 'Duckduck',
            },
          ],
        },
        {
          name: 'Bruno lapino',
          animals: [
            {
              name: 'Turax',
            },
            {
              name: 'Ria',
            },
            {
              name: 'Crazy',
            },
            {
              name: 'Goolax',
            },
          ],
        },
        {
          name: 'Philipo Nani',
          animals: [
            {
              name: 'Sandor',
            },
            {
              name: 'Buzzard',
            },
          ],
        },
        {
          name: 'Bobby Ristori',
          animals: [
            {
              name: 'Lolita',
            },
          ],
        },
      ],
    };
    const expectedResult: Person[] = [
      {
        name: 'Jhon Bigboy',
        animals: [
          {
            name: 'Duckduck',
          },
        ],
      },
    ];
    const filterAgr = 'uck';
    expect(getPeopleWithFiltredAnimals(data, filterAgr)).toEqual(expectedResult);
  });
});
