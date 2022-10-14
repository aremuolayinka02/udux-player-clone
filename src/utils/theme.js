//I am saving most-used colors here, so that it can easily to be changed
//when needed, it will be easy to use a light/dark mode also.

export const theme = {
  color: {
    background: "#000000",
    secondaryBG: "#0f0f0f",
    textColor: "#d9d9d9",
  },
  font: {
    primary: "Bw Modelica",
  },
};

//Media Queries - I am creating just two screen sizes because of the UI that was provided
const sizes = {
  mobile: "999px",
  desktop: "1000px",

  //This refers to smaller mobile screen
  mobileS: "750px",
};

export const devices = {
  mobile: `(max-width: ${sizes.mobile})`,
  mobileS: `(max-width: ${sizes.mobileS})`,
  desktop: `(min-width: ${sizes.desktop})`,
};