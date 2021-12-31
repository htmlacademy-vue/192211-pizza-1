export const normalizeDough = (dough) => {
  const type = dough.name.toLowerCase() === "тонкое" ? "light" : "large";
  return {
    ...dough,
    type,
  };
};

export const normalizeSizes = (size) => {
  switch (size.multiplier) {
    case 1:
      return {
        ...size,
        type: "small",
      };
    case 2:
      return {
        ...size,
        type: "normal",
      };
    default:
      return {
        ...size,
        type: "big",
      };
  }
};

export const normalizeSauces = (sauce) => {
  switch (sauce.name.toLowerCase()) {
    case "томатный":
      return {
        ...sauce,
        type: "tomato",
      };
    case "сливочный":
      return {
        ...sauce,
        type: "creamy",
      };
    default:
      throw new Error(`no sauce found with name ${sauce.name}`);
  }
};

export const normalizeIngredients = (ingredient) => {
  let type = "";
  switch (ingredient.name.toLowerCase()) {
    case "грибы":
      type = "mushrooms";
      break;
    case "чеддер":
      type = "cheddar";
      break;
    case "салями":
      type = "salami";
      break;
    case "ветчина":
      type = "ham";
      break;
    case "ананас":
      type = "ananas";
      break;
    case "бекон":
      type = "bacon";
      break;
    case "лук":
      type = "onion";
      break;
    case "чили":
      type = "chile";
      break;
    case "халапеньо":
      type = "jalapeno";
      break;
    case "маслины":
      type = "olives";
      break;
    case "томаты":
      type = "tomatoes";
      break;
    case "лосось":
      type = "salmon";
      break;
    case "моцарелла":
      type = "mozzarella";
      break;
    case "пармезан":
      type = "parmesan";
      break;
    case "блю чиз":
      type = "blue_cheese";
      break;
    default:
      throw new Error(`no ingredient found with name ${ingredient.name}`);
  }

  return {
    ...ingredient,
    type,
    count: 0,
  };
};
