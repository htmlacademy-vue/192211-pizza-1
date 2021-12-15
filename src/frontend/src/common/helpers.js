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
  switch (ingredient.name.toLowerCase()) {
    case "грибы":
      return {
        ...ingredient,
        type: "mushrooms",
      };
    case "чеддер":
      return {
        ...ingredient,
        type: "cheddar",
      };
    case "салями":
      return {
        ...ingredient,
        type: "salami",
      };
    case "ветчина":
      return {
        ...ingredient,
        type: "ham",
      };
    case "ананас":
      return {
        ...ingredient,
        type: "ananas",
      };
    case "бекон":
      return {
        ...ingredient,
        type: "bacon",
      };
    case "лук":
      return {
        ...ingredient,
        type: "onion",
      };
    case "чили":
      return {
        ...ingredient,
        type: "chile",
      };
    case "халапеньо":
      return {
        ...ingredient,
        type: "jalapeno",
      };
    case "маслины":
      return {
        ...ingredient,
        type: "olives",
      };
    case "томаты":
      return {
        ...ingredient,
        type: "tomatoes",
      };
    case "лосось":
      return {
        ...ingredient,
        type: "salmon",
      };
    case "моцарелла":
      return {
        ...ingredient,
        type: "mozzarella",
      };
    case "пармезан":
      return {
        ...ingredient,
        type: "parmesan",
      };
    case "блю чиз":
      return {
        ...ingredient,
        type: "blue_cheese",
      };
    default:
      throw new Error(`no ingredient found with name ${ingredient.name}`);
  }
};
