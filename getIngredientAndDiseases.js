export const getIngredients = async () => {
    try {
        const response = await fetch(`https://kaotika-server.fly.dev/ingredients`);
        const json = await response.json();

        return json.data;
    } catch (error) {
        console.error('Unexpected error while trying to retrieve the Ingredients on fetch: ', error);
    }
}

export const getDiseases = async () => {
    try {
        const response = await fetch(`https://kaotika-server.fly.dev/diseases`);
        const json = await response.json();

        return json.data;
    } catch (error) {
        console.error('Unexpected error while trying to retrieve the Diseases on fetch: ', error);
    }
}