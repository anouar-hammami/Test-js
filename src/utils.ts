import { Country, Person, Animal } from './types';

//Principal filter function
export const filter = (data: Country[], argForFilter: string): Country[] => {
  //for every country
  return data.reduce((filtredData: Country[], country: Country) => {
    //check people's animals
    const peopleWithFiltredAnimals = getPeopleWithFiltredAnimals(country, argForFilter);

    //check filtred peopleWithAnimalFiltred  length to avoid adding null/empty value on people attribute
    if (peopleWithFiltredAnimals.length) {
      const countryWithfiltredData = { name: country.name, people: peopleWithFiltredAnimals };
      filtredData.push(countryWithfiltredData);
    }
    return filtredData;
  }, []);
};
// function for filter, get people with there filtred animals by country
export const getPeopleWithFiltredAnimals = (country: Country, argForFilter: string): Person[] => {
  return country.people.reduce((filterResult: Person[], person: Person) =>
    // get filytred animals by passed argument
    {
      const animalsFiltred: Animal[] = person.animals.filter((animal: Animal) => animal.name.includes(argForFilter));
      //check filtred animals result lenght to avoid adding null/empty value on animals attribute
      if (animalsFiltred.length) {
        const peopleWithAnimalFiltredNotNull = {
          name: person.name,
          animals: animalsFiltred,
        };
        filterResult.push(peopleWithAnimalFiltredNotNull);
      }
      return filterResult;
    }, []);
};

//Principal  count function
export const count = (data: Country[]): Country[] => {
  return data.reduce((sumPersons: Country[], country: Country) => {
    const sumAnimalsPerPerson = totalAnimalsPerPerson(country);

    sumPersons.push({
      name: `${country.name} [${country.people.length}]`,
      people: sumAnimalsPerPerson,
    });

    return sumPersons;
  }, []);
};
//function for count , return sum of animals for a person
export const totalAnimalsPerPerson = (country: Country): Person[] => {
  return country.people.reduce((sumAnimals: Person[], person: Person) => {
    sumAnimals.push({
      name: `${person.name} [${person.animals.length}]`,
      animals: [...person.animals],
    });
    return sumAnimals;
  }, []);
};
