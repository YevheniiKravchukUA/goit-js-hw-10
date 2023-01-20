import debounce from 'lodash.debounce';
import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';

const { countryList, coutryInfo, input } = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  coutryInfo: document.querySelector('.country-info'),
};
const DEBOUNCE_DELAY = 300;

input.addEventListener(
  'input',
  debounce(() => {
    if (input.value.trim() === '') {
      countryList.innerHTML = '';
      coutryInfo.innerHTML = '';
      return;
    }
    fetchCountries(input.value.trim());
  }, DEBOUNCE_DELAY)
);
