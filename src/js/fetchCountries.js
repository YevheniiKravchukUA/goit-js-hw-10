import { makeMarkup } from './markup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DATA_OPTIONS = 'name,capital,population,flags,languages';
const { countryList, coutryInfo } = {
  countryList: document.querySelector('.country-list'),
  coutryInfo: document.querySelector('.country-info'),
};

function fetchCountries(name) {
  countryList.innerHTML = '';
  coutryInfo.innerHTML = '';

  fetch(`https://restcountries.com/v3.1/name/${name}?fields=${DATA_OPTIONS}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(
          Notify.failure('Oops, there is no country with that name')
        );
      }
      return response.json();
    })
    .then(data => {
      if (data.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      }
      if (data.length > 1) {
        return data.forEach(({ name, flags }) => {
          countryList.insertAdjacentHTML(
            'beforeend',
            makeMarkup('countryList', name, flags)
          );
        });
      }
      if (data.length == 1) {
        const { flags, name, capital, population, languages } = data[0];
        coutryInfo.innerHTML = makeMarkup(
          'countryInfo',
          name,
          flags,
          capital,
          population,
          languages
        );
      }
    })
    .catch(err => console.log(err));
}

export { fetchCountries };
