export function getData() {
  return function(dispatch) {
    return fetch("http://localhost:4030/product/all")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}
