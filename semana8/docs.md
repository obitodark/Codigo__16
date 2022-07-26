# Semana 8 / Dia3

## Arrow function

```js
const arrowFunction = async () => {};
```

## Destructuring

```js
const data = {
  total: 100,
  entries: [],
};
const { total, entries } = data;
```

## Async/Await

```js
async function getMovies() {
  try {
    const response = await fetch(urlMovies);
    // tiene 2 key
    /**
     * data =>
     * total: 100
     * entries: []
     */
    const { entries } = await response.json();
    return entries;
  } catch (error) {
    return error;
  }
}
```
