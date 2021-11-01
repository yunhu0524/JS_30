const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

// 데이터를 가공하기 쉽게 cities에 넣어 준다.
const cities = [];
fetch(endpoint)
  .then((blob) => blob.json()) // reponse.json 도 가능 blob는 이미지, 파일, 오디오에도 쓰인다.
  .then((data) => cities.push(...data)); // ... 로 data 를 cities에 넣어준다.
console.log(cities);
function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    // g : 텍스트 전체에서 일치하는 문자를 찾을 때, 지정하지 않으면 첫번째 일치하는 문자만 검색
    // i : 대소문자를 구분하지 않는다.
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  // 정규표현식 자릿수 구분 ex) 30,000
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
    })

    .join("");
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
