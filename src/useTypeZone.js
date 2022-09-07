export const handleTypeZone = (libelle) => {
  let text = "";
  switch (libelle) {
    case "UF":
      text = "U";
      break;
    case "UM":
      text = "U";
      break;
    case "UG":
      text = "U";
      break;
    case "UP":
      text = "U";
      break;
    case "UI":
      text = "U";
      break;
    case "UE":
      text = "U";
      break;
    case "UY":
      text = "U";
      break;
    case "UA":
      text = "U";
      break;
    case "UB":
      text = "U";
      break;
    case "UC":
      text = "U";
      break;
    case "UX":
      text = "U";
      break;
    case "1AU":
      text = "AU";
      break;
    case "2AU":
      text = "AU";
      break;
    case "Nl":
      text = "N";
      break;
    case "Nc":
      text = "N";
      break;
    case "N":
      text = "N";
      break;
    case "A":
      text = "A";
      break;
    case "Ah":
      text = "A";
      break;
    case "UD":
      text = "UD";
      break;
    case "UH":
      text = "UH";
      break;
    case "NP":
      text = "N";
      break;
    case "NE":
      text = "N";
      break;
    default:
      text = "U";
  }
  return text;
};
