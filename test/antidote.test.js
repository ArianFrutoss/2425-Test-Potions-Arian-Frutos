import { PotionFactory } from "../factories/potions/PotionFactory";
import { getDiseases, getIngredients } from "../getIngredientAndDiseases";

describe('Cuando todos los ingredientes llevan el efecto "Restore"', () => {
    describe('Si los ingredientes contienen los efectos necesarios para combatir una enfermedad concreta, se creara el antidoto asociado a la enfermedad', ()=> {
        it('El nombre debera ser el correspondiente. Antidote of + "nombre de la enfermedad"', async () => {

            const ingredients = await getIngredients();
            const diseases = await getDiseases();

            const selectedIngredients = [ingredients[20], ingredients[14]];

            const antidote = PotionFactory.createPotion(selectedIngredients, diseases);

            expect(antidote.name).toBe('Antidote of Gravechill');
        });
    });
});