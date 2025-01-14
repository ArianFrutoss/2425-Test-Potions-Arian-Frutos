import { PotionFactory } from "../factories/potions/PotionFactory";
import { getDiseases, getIngredients } from "../getIngredientAndDiseases";
import { getSelectedIngredient } from "../getSelectedIngredientsAndDiseases";

describe('Cuando el numero de ingredientes es 2-4', () => {
    describe('Cuando los efectos de ingredientes asociados llevaran los nombres "Boost"', () => {
        describe('Cuando todos los ingredientes tienen el mismo atributo (INT, DEX...)', () => {
            describe('Cuando todos los efectos son del tipo least', () => {
                it('El valor resultante del atributo sera la media de los values de los ingredientes. Una vez calculada la media se redondeara al multiplo de 5 inferior', async () => {

                    const ingredients = await getIngredients();
                    const diseases = await getDiseases();

                    const selectedIngredients = [getSelectedIngredient(ingredients, "Radiant Petal"), getSelectedIngredient(ingredients, "Radiant Petal")];

                    const elixir = PotionFactory.createPotion(selectedIngredients, diseases);

                    expect(elixir.modifiers.charisma).toBe(5);
                });
                it('La duracion sera la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', async () => {

                    const ingredients = await getIngredients();
                    const diseases = await getDiseases();

                    const selectedIngredients = [getSelectedIngredient(ingredients, "Radiant Petal"), getSelectedIngredient(ingredients, "Radiant Petal")];

                    const elixir = PotionFactory.createPotion(selectedIngredients, diseases);

                    expect(elixir.duration).toBe(1);
                });
                describe('Cuando todos los efectos son del tipo lesser', () => {
                    it('El valor resultante del atributo sera la media de los values de los ingredientes. Una vez calculada la media se redondeara al multiplo de 5 inferior', async () => {
    
                        const ingredients = await getIngredients();
                        const diseases = await getDiseases();
    
                        const selectedIngredients = [getSelectedIngredient(ingredients, "Sageleaf"), getSelectedIngredient(ingredients, "Sageleaf")];
    
                        const elixir = PotionFactory.createPotion(selectedIngredients, diseases);
    
                        expect(elixir.modifiers.charisma).toBe(10);
                    });
                    it('La duracion sera la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', async () => {
    
                        const ingredients = await getIngredients();
                        const diseases = await getDiseases();
    
                        const selectedIngredients = [getSelectedIngredient(ingredients, "Sageleaf"), getSelectedIngredient(ingredients, "Sageleaf")];
    
                        const elixir = PotionFactory.createPotion(selectedIngredients, diseases);
    
                        expect(elixir.duration).toBe(1);
                    });
                });
                describe('Cuando todos los efectos son del tipo normal', () => {
                    it('El valor resultante del atributo sera la media de los values de los ingredientes. Una vez calculada la media se redondeara al multiplo de 5 inferior', async () => {
    
                        const ingredients = await getIngredients();
                        const diseases = await getDiseases();
    
                        const selectedIngredients = [getSelectedIngredient(ingredients, "Dreamer's Dew"), getSelectedIngredient(ingredients, "Dreamer's Dew")];
    
                        const elixir = PotionFactory.createPotion(selectedIngredients, diseases);
                        
                        expect(elixir.modifiers.charisma).toBe(15);
                    });
                    it('La duracion sera la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', async () => {
    
                        const ingredients = await getIngredients();
                        const diseases = await getDiseases();
    
                        const selectedIngredients = [getSelectedIngredient(ingredients, "Dreamer's Dew"), getSelectedIngredient(ingredients, "Dreamer's Dew")];
    
                        const elixir = PotionFactory.createPotion(selectedIngredients, diseases);
    
                        expect(elixir.duration).toBe(2);
                    });
                });
            });
        });
    });
});