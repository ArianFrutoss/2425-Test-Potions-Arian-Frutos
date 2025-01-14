import { PotionFactory } from "../factories/potions/PotionFactory";
import { getDiseases, getIngredients } from "../getIngredientAndDiseases";

describe('Cuando todos los ingredientes llevan el efecto "Restore"', () => {
    describe('Si los ingredientes contienen los efectos necesarios para combatir una enfermedad concreta, se creara el antidoto asociado a la enfermedad', () => {
        it('El nombre debera ser el correspondiente. Antidote of + "nombre de la enfermedad"', async () => {

            const ingredients = await getIngredients();
            const diseases = await getDiseases();

            const selectedIngredients = [ingredients[20], ingredients[14]];

            const antidote = PotionFactory.createPotion(selectedIngredients, diseases);

            expect(antidote.name).toBe('Antidote of Gravechill');
        });
    });
    describe('Si alguno de los ingredientes no tiene el nombre "Restore"', () => {
        it('No podremos crear un antidoto. El nombre de la pocion creada no llevara la palabra "Antidote"', async () => {

            const ingredients = await getIngredients();
            const diseases = await getDiseases();

            const selectedIngredients = [ingredients[21], ingredients[14]];

            const antidote = PotionFactory.createPotion(selectedIngredients, diseases);

            expect(antidote.name).not.toContain('Antidote');
        });
    });   
});