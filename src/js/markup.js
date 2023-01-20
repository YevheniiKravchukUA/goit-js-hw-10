function makeMarkup(markupName, name, flags, capital, population, languages) {
  let langsArr;
  let langs;

  if (languages) {
    langsArr = Object.values(languages);
    langs = langsArr.join(', ');
  }

  const markup = {
    countryList: `<li class="country-list__item">
        <img src=${flags.svg} alt='Flag of '${name.official} width="50" height="40" class="item__image">
        <strong class="item__name">${name.official}</strong>
      </li>`,
    countryInfo: `<img src=${flags.svg} alt='Flag of '${name.official} width="50" height="40" class="item__image">
      <strong class="item__name">${name.official}</strong>
      <ul class="country-info-list">
        <li class="country-info-list__item">
          <span class="item__bold-text">Capital: </span>${capital}
        </li>
        <li class="country-info-list__item">
          <span class="item__bold-text">Population: </span>${population}
        </li>
        <li class="country-info-list__item">
          <span class="item__bold-text">Languages: </span>${langs}
        </li>
      </ul>`,
  };

  return markup[markupName];
}

export { makeMarkup };
