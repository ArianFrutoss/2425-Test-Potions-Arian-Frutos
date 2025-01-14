export const getSelectedIngredient = (ingredients, ingredientName) => {
    const ingredient = ingredients.filter((ingredient) => ingredient.name === ingredientName);
    return ingredient[0];
}

export const getSelectedDisease = (diseases, diseaseName) => {
    const disease = diseases.filter((disease) => disease.name === diseaseName);
    return disease[0];
}