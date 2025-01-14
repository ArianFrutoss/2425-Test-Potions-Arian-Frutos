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
                describe('Cuando todos los efectos son del tipo greater', () => {
                    it('El valor resultante del atributo sera la media de los values de los ingredientes. Una vez calculada la media se redondeara al multiplo de 5 inferior', async () => {
    
                        const ingredients = await getIngredients();
                        const diseases = await getDiseases();
    
                        const selectedIngredients = [getSelectedIngredient(ingredients, "Astral Herb"), getSelectedIngredient(ingredients, "Astral Herb")];
    
                        const elixir = PotionFactory.createPotion(selectedIngredients, diseases);
                        
                        expect(elixir.modifiers.charisma).toBe(20);
                    });
                    it('La duracion sera la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', async () => {
    
                        const ingredients = await getIngredients();
                        const diseases = await getDiseases();
    
                        const selectedIngredients = [getSelectedIngredient(ingredients, "Astral Herb"), getSelectedIngredient(ingredients, "Astral Herb")];
    
                        const elixir = PotionFactory.createPotion(selectedIngredients, diseases);
    
                        expect(elixir.duration).toBe(3);
                    });
                });
                describe('Cuando todos los efectos son de tipo diferente', () => {
                    it('El valor resultante del atributo sera la media de los values de los ingredientes. Una vez calculada la media se redondeara al multiplo de 5 inferior', async () => {
    
                        const ingredients = await getIngredients();
                        const diseases = await getDiseases();
    
                        const selectedIngredients = [getSelectedIngredient(ingredients, "Moonshade Petal"), getSelectedIngredient(ingredients, "Radiant Petal"), getSelectedIngredient(ingredients, "Celestial Orchid"), getSelectedIngredient(ingredients, "Dreamer's Dew")];
    
                        const elixir = PotionFactory.createPotion(selectedIngredients, diseases);
                        
                        expect(elixir.modifiers.charisma).toBe(10);
                    });
                    it('La duracion sera la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', async () => {
    
                        const ingredients = await getIngredients();
                        const diseases = await getDiseases();
    
                        const selectedIngredients = [getSelectedIngredient(ingredients, "Moonshade Petal"), getSelectedIngredient(ingredients, "Radiant Petal"), getSelectedIngredient(ingredients, "Celestial Orchid"), getSelectedIngredient(ingredients, "Dreamer's Dew")];
    
                        const elixir = PotionFactory.createPotion(selectedIngredients, diseases);
    
                        expect(elixir.duration).toBe(1);
                    });
                });
                it('El nombre de la pocion sera: Modifier + Attribute + Elixir. El modificador del nombre sera el que corresponda con el value correspondiente segun la tabla', async () => {
    
                    const ingredients = await getIngredients();
                    const diseases = await getDiseases();

                    const selectedIngredients = [getSelectedIngredient(ingredients, "Moonshade Petal"), getSelectedIngredient(ingredients, "Radiant Petal"), getSelectedIngredient(ingredients, "Celestial Orchid"), getSelectedIngredient(ingredients, "Dreamer's Dew")];

                    const elixir = PotionFactory.createPotion(selectedIngredients, diseases);

                    expect(elixir.name).toBe('Lesser Calm Elixir');
                });
            });
        });
        describe('Cuando no todos los ingredientes tienen el mismo atributo (INT, DEX...)', () => {
            it('No podremos crear el elixir. El nombre de la pocion creada no llevara la palabra "Elixir"', async () => {
    
                const ingredients = await getIngredients();
                const diseases = await getDiseases();

                const selectedIngredients = [getSelectedIngredient(ingredients, "Amber Bloom"), getSelectedIngredient(ingredients, "Radiant Petal"), getSelectedIngredient(ingredients, "Celestial Orchid"), getSelectedIngredient(ingredients, "Dreamer's Dew")];

                const elixir = PotionFactory.createPotion(selectedIngredients, diseases);

                expect(elixir.name).not.toContain('Elixir');
            });
        });
    });
    describe('Cuando los efectos de ingredientes asociados llevaran los nombres: "Calm"', () => {
        describe('Cuando todos los ingredientes tienen el mismo atributo (INT, DEX...)', () => {
            describe('Cuando todos los efectos son del tipo least', () => {
                it('El valor resultante del atributo sera la media de los values de los ingredientes. Una vez calculada la media se redondeara al multiplo de 5 inferior', async () => {

                    const ingredients = await getIngredients();
                    const diseases = await getDiseases();

                    const selectedIngredients = [getSelectedIngredient(ingredients, "Quieting Root"), getSelectedIngredient(ingredients, "Quieting Root")];

                    const elixir = PotionFactory.createPotion(selectedIngredients, diseases);

                    expect(elixir.modifiers.charisma).toBe(-5);
                });
                it('La duracion sera la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', async () => {

                    const ingredients = await getIngredients();
                    const diseases = await getDiseases();

                    const selectedIngredients = [getSelectedIngredient(ingredients, "Quieting Root"), getSelectedIngredient(ingredients, "Quieting Root")];

                    const elixir = PotionFactory.createPotion(selectedIngredients, diseases);

                    expect(elixir.duration).toBe(1);
                });
                describe('Cuando todos los efectos son del tipo lesser', () => {
                    it('El valor resultante del atributo sera la media de los values de los ingredientes. Una vez calculada la media se redondeara al multiplo de 5 inferior', async () => {
    
                        const ingredients = await getIngredients();
                        const diseases = await getDiseases();
    
                        const selectedIngredients = [getSelectedIngredient(ingredients, "Peaceful Herb"), getSelectedIngredient(ingredients, "Peaceful Herb")];
    
                        const elixir = PotionFactory.createPotion(selectedIngredients, diseases);
    
                        expect(elixir.modifiers.charisma).toBe(-10);
                    });
                    it('La duracion sera la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', async () => {
    
                        const ingredients = await getIngredients();
                        const diseases = await getDiseases();
    
                        const selectedIngredients = [getSelectedIngredient(ingredients, "Peaceful Herb"), getSelectedIngredient(ingredients, "Peaceful Herb")];
    
                        const elixir = PotionFactory.createPotion(selectedIngredients, diseases);
    
                        expect(elixir.duration).toBe(1);
                    });
                });
                describe('Cuando todos los efectos son del tipo normal', () => {
                    it('El valor resultante del atributo sera la media de los values de los ingredientes. Una vez calculada la media se redondeara al multiplo de 5 inferior', async () => {
    
                        const ingredients = await getIngredients();
                        const diseases = await getDiseases();
    
                        const selectedIngredients = [getSelectedIngredient(ingredients, "Tranquil Leaf"), getSelectedIngredient(ingredients, "Tranquil Leaf")];
    
                        const elixir = PotionFactory.createPotion(selectedIngredients, diseases);

                        expect(elixir.modifiers.charisma).toBe(-15);
                    });
                    it('La duracion sera la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', async () => {
    
                        const ingredients = await getIngredients();
                        const diseases = await getDiseases();
    
                        const selectedIngredients = [getSelectedIngredient(ingredients, "Tranquil Leaf"), getSelectedIngredient(ingredients, "Tranquil Leaf")];
    
                        const elixir = PotionFactory.createPotion(selectedIngredients, diseases);
    
                        expect(elixir.duration).toBe(2);
                    });
                });
                describe('Cuando todos los efectos son del tipo greater', () => {
                    it('El valor resultante del atributo sera la media de los values de los ingredientes. Una vez calculada la media se redondeara al multiplo de 5 inferior', async () => {
    
                        const ingredients = await getIngredients();
                        const diseases = await getDiseases();
    
                        const selectedIngredients = [getSelectedIngredient(ingredients, "Serenity Blossom"), getSelectedIngredient(ingredients, "Serenity Blossom")];
    
                        const elixir = PotionFactory.createPotion(selectedIngredients, diseases);
                        
                        expect(elixir.modifiers.charisma).toBe(-20);
                    });
                    it('La duracion sera la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', async () => {
    
                        const ingredients = await getIngredients();
                        const diseases = await getDiseases();
    
                        const selectedIngredients = [getSelectedIngredient(ingredients, "Serenity Blossom"), getSelectedIngredient(ingredients, "Serenity Blossom")];
    
                        const elixir = PotionFactory.createPotion(selectedIngredients, diseases);
    
                        expect(elixir.duration).toBe(3);
                    });
                });
                describe('Cuando todos los efectos son de tipo diferente', () => {
                    it('El valor resultante del atributo sera la media de los values de los ingredientes. Una vez calculada la media se redondeara al multiplo de 5 inferior', async () => {
    
                        const ingredients = await getIngredients();
                        const diseases = await getDiseases();
    
                        const selectedIngredients = [getSelectedIngredient(ingredients, "Serenity Blossom"), getSelectedIngredient(ingredients, "Quieting Root")];
    
                        const elixir = PotionFactory.createPotion(selectedIngredients, diseases);
                        
                        expect(elixir.modifiers.charisma).toBe(-10);
                    });
                    it('La duracion sera la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', async () => {
    
                        const ingredients = await getIngredients();
                        const diseases = await getDiseases();
    
                        const selectedIngredients = [getSelectedIngredient(ingredients, "Serenity Blossom"), getSelectedIngredient(ingredients, "Quieting Root")];
    
                        const elixir = PotionFactory.createPotion(selectedIngredients, diseases);
    
                        expect(elixir.duration).toBe(2);
                    });
                });
                it('El nombre de la pocion sera: Modifier + Attribute + Elixir. El modificador del nombre sera el que corresponda con el value correspondiente segun la tabla', async () => {
    
                    const ingredients = await getIngredients();
                    const diseases = await getDiseases();

                    const selectedIngredients = [getSelectedIngredient(ingredients, "Serenity Blossom"), getSelectedIngredient(ingredients, "Quieting Root")];

                    const elixir = PotionFactory.createPotion(selectedIngredients, diseases);

                    expect(elixir.name).toBe('Lesser Calm Elixir');
                });
            });
        });
    });
    describe('Cuando alguno de los efectos de ingredientes no lleva el nombre "Calm" o "Boost"', () => {
        it('No podremos crear el elixir. (Comprobar nombre)', async () => {
    
            const ingredients = await getIngredients();
            const diseases = await getDiseases();

            const selectedIngredients = [getSelectedIngredient(ingredients, "Guardian's Essence"), getSelectedIngredient(ingredients, "Defenseless Herb")];
            
            const elixir = PotionFactory.createPotion(selectedIngredients, diseases);

            expect(elixir.name).not.toContain('Elixir');
        });
    });
});
describe('Si el numero de ingredientes es menor que 2 o mayor que 4', () => {
    it('No podremos crear el elixir. (Comprobar nombre)', async () => {
    
        const ingredients = await getIngredients();
        const diseases = await getDiseases();

        const selectedIngredients = [getSelectedIngredient(ingredients, "Guardian's Essence")];
        
        const elixir = PotionFactory.createPotion(selectedIngredients, diseases);

        expect(elixir.name).not.toContain('Elixir');
    });
});