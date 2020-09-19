import axios from "axios";

export function loadData() {
  return (dispatch) => {
    return (
      axios.get(""),
      then((response) => {
        dispatch(changeColor("#" + response.data));
      })
    );
  };
}
export function changeColor(color) {
  return {
    type: "CHANGE_COLOR",
    color: color,
  };
}
