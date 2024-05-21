console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);

  console.log("response", response);

  const data = await response.json();

  console.log("data", data);
  console.log(data.results[2].name);
}

fetchData();
