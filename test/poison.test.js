import { PotionFactory } from "../factories/potions/PotionFactory";
import { getDiseases, getIngredients } from "../getIngredientAndDiseases";

describe('Cuando todos los ingredientes llevan el efecto "Damage"', () => {
    describe('Si los ingredientes contienen los efectos necesarios para combatir una enfermedad concreta, se creara el poison asociado a la enfermedad', () => {
        it('El nombre debera ser el correspondiente. Poison of + "nombre de la enfermedad"', async () => {

            const ingredients = await getIngredients();
            const diseases = await getDiseases();

            const selectedIngredients = [ingredients[59], ingredients[45]];
            
            const poison = PotionFactory.createPotion(selectedIngredients, diseases);

            expect(poison.name).toBe('Poison of Ethereal Consumption');
        });
        it('Los atributos tendran el valor que aparece en la enfermedad, en su defecto, el rango de valores que se muestra en la tabla de creacion de pociones (si se ha empleado)', async () => {
            
            const ingredients = await getIngredients();
            const diseases = await getDiseases();

            const selectedIngredients = [ingredients[59], ingredients[45]];
            const selectedDisease = diseases[1];

            const poison = PotionFactory.createPotion(selectedIngredients, diseases);
            
            expect(poison.modifiers).toBe(selectedDisease.modifiers);
        });
    });
    describe('Si alguno de los ingredientes no tiene el nombre "Damage"', () => {
        it('No podremos crear un poison. El nombre de la pocion creada no llevara la palabra "Poison"', async () => {

            const ingredients = await getIngredients();
            const diseases = await getDiseases();

            const selectedIngredients = [ingredients[59], ingredients[10]];

            const poison = PotionFactory.createPotion(selectedIngredients, diseases);

            expect(poison.name).not.toContain('Poison');
        });
    });
});