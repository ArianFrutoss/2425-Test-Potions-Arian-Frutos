import { PotionFactory } from "../factories/potions/PotionFactory";
import { getDiseases, getIngredients } from "../getIngredientAndDiseases";
import { getSelectedIngredient } from "../getSelectedIngredientsAndDiseases";

describe('Cuando todos los ingredientes llevan el efecto "Restore"', () => {
    describe('Si los ingredientes contienen los efectos necesarios para combatir una enfermedad concreta, se creara el antidoto asociado a la enfermedad', () => {
        it('El nombre debera ser el correspondiente. Antidote of + "nombre de la enfermedad"', async () => {

            const ingredients = await getIngredients();
            const diseases = await getDiseases();

            const selectedIngredients = [getSelectedIngredient(ingredients, "Guardian's Essence"), getSelectedIngredient(ingredients, "Enduring Root")];

            const antidote = PotionFactory.createPotion(selectedIngredients, diseases);

            expect(antidote.name).toBe('Antidote of Gravechill');
        });
        it('Los atributos tendran el valor que aparece en la enfermedad pero cambiado de signo o, en su defecto, el rango de valores que se muestra en la tabla de creacion de pociones (si se ha empleado)', async () => {

            const ingredients = await getIngredients();
            const diseases = await getDiseases();

            const selectedIngredients = [getSelectedIngredient(ingredients, "Guardian's Essence"), getSelectedIngredient(ingredients, "Enduring Root")];

            const antidote = PotionFactory.createPotion(selectedIngredients, diseases);

            expect(antidote.modifiers.hit_points).toBeLessThanOrEqual(50);
            expect(antidote.modifiers.hit_points).toBeGreaterThanOrEqual(40);
            expect(antidote.modifiers.constitution).toBeLessThanOrEqual(9);
            expect(antidote.modifiers.constitution).toBeGreaterThanOrEqual(6);
        });
    });
    describe('Si alguno de los ingredientes no tiene el nombre "Restore"', () => {
        it('No podremos crear un antidoto. El nombre de la pocion creada no llevara la palabra "Antidote"', async () => {

            const ingredients = await getIngredients();
            const diseases = await getDiseases();

            const selectedIngredients = [getSelectedIngredient(ingredients, "Amber Bloom"), getSelectedIngredient(ingredients, "Enduring Root")];

            const antidote = PotionFactory.createPotion(selectedIngredients, diseases);

            expect(antidote.name).not.toContain('Antidote');
        });
    });
});