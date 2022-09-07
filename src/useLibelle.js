export const handleLibelle = (libelle) => {
  let text = "";
  switch (libelle) {
    case "UF":
      text = "zone des activités artisanales et industrielles";
      break;
    case "UM":
      text = "zone à vocation mixte";
      break;
    case "UG":
      text = "zone à vocation résidentielle de faible densité";
      break;
    case "UP":
      text = "zone des batiments patrimonial";
      break;
    case "UI":
      text = "Zone à vocation dactivités artisanales";
      break;
    case "UE":
      text = "zone dequipement";
      break;
    case "UY":
      text = "zone dactivite industrielle";
      break;
    case "UA":
      text = "secteur de bâti dense et ancien";
      break;
    case "UB":
      text =
        "secteur de bâti récent marqué par une mixité des fonctions urbaines";
      break;
    case "UC":
      text =
        "zone urbaine mixte de densité élevée dhabitat assurant la transition entre les quartiers centraux et les quartiers de faible densité";
      break;
    case "UX":
      text = "réservée à limplantation dactivites economiques";
      break;
    case "1AU":
      text =
        "zone durbanisation future constructible sous forme dopération densemble";
      break;
    case "2AU":
      text = "zone durbanisation future inconstructible à vocation dactivité";
      break;
    case "Nl":
      text = "secteur naturelle de loisirs";
      break;
    case "Nc":
      text = "secteur de carrière";
      break;
    case "N":
      text = "zone naturelle";
      break;
    case "A":
      text = "zone agricole";
      break;
    case "Ah":
      text = "zone agricole";
      break;
    case "UD":
      text = "zone dhabitat mixte";
      break;
    case "UH":
      text = "zone des hameaux ou les constructions nouvelles sont autorisées";
      break;
    case "NP":
      text =
        "zone naturelle pouvant accueillir des constructions respectan la preservation des sites et des paysages";
      break;
    case "NE":
      text =
        "zone naturelle de protection des milieux ecologiquement sensibles";
      break;
    default:
      text = "zone urbaine";
  }
  return text;
};
