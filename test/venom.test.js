import { PotionFactory } from "../factories/potions/PotionFactory";
import { getDiseases, getIngredients } from "../getIngredientAndDiseases";
import { getSelectedIngredient } from "../getSelectedIngredientsAndDiseases";

describe('Cuando el numero de ingredientes es 2-4', () => {
    describe('Cuando los efectos de ingredientes asociados llevaran los nombres "Frenzy"', () => {
        describe('Cuando todos los ingredientes tienen el mismo atributo (INT, DEX...)', () => {
            describe('Cuando todos los efectos son del tipo least', () => {
                it('El valor resultante del atributo sera la media de los values de los ingredientes. Una vez calculada la media se redondeara al multiplo de 5 inferior', async () => {

                    const ingredients = await getIngredients();
                    const diseases = await getDiseases();

                    const selectedIngredients = [getSelectedIngredient(ingredients, "Lunatic's Thorn"), getSelectedIngredient(ingredients, "Lunatic's Thorn")];

                    const venom = PotionFactory.createPotion(selectedIngredients, diseases);

                    expect(venom.modifiers.charisma).toBe(5);
                });
                it('La duracion sera la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', async () => {

                    const ingredients = await getIngredients();
                    const diseases = await getDiseases();

                    const selectedIngredients = [getSelectedIngredient(ingredients, "Lunatic's Thorn"), getSelectedIngredient(ingredients, "Lunatic's Thorn")];

                    const venom = PotionFactory.createPotion(selectedIngredients, diseases);

                    expect(venom.duration).toBe(1);
                });
                describe('Cuando todos los efectos son del tipo lesser', () => {
                    it('El valor resultante del atributo sera la media de los values de los ingredientes. Una vez calculada la media se redondeara al multiplo de 5 inferior', async () => {
    
                        const ingredients = await getIngredients();
                        const diseases = await getDiseases();
    
                        const selectedIngredients = [getSelectedIngredient(ingredients, "Whispering Fern"), getSelectedIngredient(ingredients, "Whispering Fern")];
    
                        const venom = PotionFactory.createPotion(selectedIngredients, diseases);
    
                        expect(venom.modifiers.charisma).toBe(10);
                    });
                    it('La duracion sera la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', async () => {
    
                        const ingredients = await getIngredients();
                        const diseases = await getDiseases();
    
                        const selectedIngredients = [getSelectedIngredient(ingredients, "Whispering Fern"), getSelectedIngredient(ingredients, "Whispering Fern")];
    
                        const venom = PotionFactory.createPotion(selectedIngredients, diseases);
    
                        expect(venom.duration).toBe(1);
                    });
                });
                describe('Cuando todos los efectos son del tipo normal', () => {
                    it('El valor resultante del atributo sera la media de los values de los ingredientes. Una vez calculada la media se redondeara al multiplo de 5 inferior', async () => {
    
                        const ingredients = await getIngredients();
                        const diseases = await getDiseases();
    
                        const selectedIngredients = [getSelectedIngredient(ingredients, "Chaos Bloom"), getSelectedIngredient(ingredients, "Chaos Bloom")];
    
                        const venom = PotionFactory.createPotion(selectedIngredients, diseases);

                        expect(venom.modifiers.charisma).toBe(15);
                    });
                    it('La duracion sera la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', async () => {
    
                        const ingredients = await getIngredients();
                        const diseases = await getDiseases();
    
                        const selectedIngredients = [getSelectedIngredient(ingredients, "Chaos Bloom"), getSelectedIngredient(ingredients, "Chaos Bloom")];
    
                        const venom = PotionFactory.createPotion(selectedIngredients, diseases);
    
                        expect(venom.duration).toBe(2);
                    });
                });
                describe('Cuando todos los efectos son del tipo greater', () => {
                    it('El valor resultante del atributo sera la media de los values de los ingredientes. Una vez calculada la media se redondeara al multiplo de 5 inferior', async () => {
    
                        const ingredients = await getIngredients();
                        const diseases = await getDiseases();
    
                        const selectedIngredients = [getSelectedIngredient(ingredients, "Madcap Mushroom"), getSelectedIngredient(ingredients, "Madcap Mushroom")];
    
                        const venom = PotionFactory.createPotion(selectedIngredients, diseases);
                        
                        expect(venom.modifiers.charisma).toBe(20);
                    });
                    it('La duracion sera la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', async () => {
    
                        const ingredients = await getIngredients();
                        const diseases = await getDiseases();
    
                        const selectedIngredients = [getSelectedIngredient(ingredients, "Madcap Mushroom"), getSelectedIngredient(ingredients, "Madcap Mushroom")];
    
                        const venom = PotionFactory.createPotion(selectedIngredients, diseases);
    
                        expect(venom.duration).toBe(3);
                    });
                });
                describe('Cuando todos los efectos son de tipo diferente', () => {
                    it('El valor resultante del atributo sera la media de los values de los ingredientes. Una vez calculada la media se redondeara al multiplo de 5 inferior', async () => {
    
                        const ingredients = await getIngredients();
                        const diseases = await getDiseases();
    
                        const selectedIngredients = [getSelectedIngredient(ingredients, "Chaos Bloom"), getSelectedIngredient(ingredients, "Madcap Mushroom")];
    
                        const venom = PotionFactory.createPotion(selectedIngredients, diseases);
                        
                        expect(venom.modifiers.charisma).toBe(15);
                    });
                    it('La duracion sera la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', async () => {
    
                        const ingredients = await getIngredients();
                        const diseases = await getDiseases();
    
                        const selectedIngredients = [getSelectedIngredient(ingredients, "Chaos Bloom"), getSelectedIngredient(ingredients, "Madcap Mushroom")];
    
                        const venom = PotionFactory.createPotion(selectedIngredients, diseases);
    
                        expect(venom.duration).toBe(2);
                    });
                });
                it('El nombre de la pocion sera: Modifier + Attribute + Venom. El modificador del nombre sera el que corresponda con el value correspondiente segun la tabla', async () => {
    
                    const ingredients = await getIngredients();
                    const diseases = await getDiseases();

                    const selectedIngredients = [getSelectedIngredient(ingredients, "Chaos Bloom"), getSelectedIngredient(ingredients, "Madcap Mushroom")];

                    const venom = PotionFactory.createPotion(selectedIngredients, diseases);

                    expect(venom.name).toBe('Frenzy Venom');
                });
            });
        });
        describe('Cuando no todos los ingredientes tienen el mismo atributo (INT, DEX...)', () => {
            it('No podremos crear el venom. El nombre de la pocion creada no llevara la palabra "Venom"', async () => {
    
                const ingredients = await getIngredients();
                const diseases = await getDiseases();

                const selectedIngredients = [getSelectedIngredient(ingredients, "Chaos Bloom"), getSelectedIngredient(ingredients, "Willow Spark")];

                const venom = PotionFactory.createPotion(selectedIngredients, diseases);

                expect(venom.name).not.toContain('Venom');
            });
        });
    });
});