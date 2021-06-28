import { filter, count } from './utils';
import data from './data';
import { Country } from './types';

const args: string[] = process.argv.slice(2);

//we can use minimalist library to manage --args format but using libraries is not permited for this test like mentioned in readme file
export const getActionFromArgs = (data: Country[], args: string[]): void => {
  const functionToExcute = args[0];
  // return  [''] when args='--' or args is empty to avoid exception on split func, because in those cases args[0] return undefined
  const funcitonWithParam = functionToExcute ? functionToExcute.split('=') : [''];
  // .substring(2) used for removing '--'
  switch (funcitonWithParam[0].substring(2).toLowerCase()) {
    case 'filter': {
      const paramForFilter = funcitonWithParam[1];
      paramForFilter
        ? console.log(JSON.stringify(filter(data, paramForFilter), null, ' '))
        : console.log('Enter valid args for filter function');
      break;
    }
    case 'count': {
      const paramForCount = funcitonWithParam[1];
      // avoid --count=  and  --count=xxx
      !paramForCount && !functionToExcute.includes('=')
        ? console.log(JSON.stringify(count(data), null, ' '))
        : console.log('No needed args for count function ');
      break;
    }
    default: {
      console.log('Enter valid arguments');
      break;
    }
  }
};
getActionFromArgs(data, args);
