const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
  });

  it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
    const { body } = await agent.get("/rickandmorty/character/1");

    expect(body).toHaveProperty("id");
    expect(body).toHaveProperty("name");
    expect(body).toHaveProperty("species");
    expect(body).toHaveProperty("gender");
    expect(body).toHaveProperty("status");
    expect(body).toHaveProperty("origin");
    expect(body).toHaveProperty("image");
  });

  it("Si hay un error responde con status: 500", async () => {
    await agent.get("/rickandmorty/character/9999999").expect(500);
  });

  describe("GET /rickandmorty/login", () => {
    
    it('Si los datos son correctos, retorna access : true', async () => {

        const { body } = await agent.get('/rickandmorty/login?email=pjcastil03@gmail.com&password=senaida19')

        expect(body).toEqual({ access: true })
    })

    it('Si los datos son incorrectos, retorna access : false', async () => {

        const { body } = await agent.get('/rickandmorty/login?email=pjcastil03@gmail.com&password=senaida192')

        expect(body).toEqual({ access: false })
    })

    describe("POST /rickandmorty/fav", () => {

        it('Debe devolver los datos en un array', async () => {

            let charOne = {id: 1, name: "Mauricio"}

            const res = await agent.post('/rickandmorty/fav').send(charOne)
            
            expect(res.body).toBeInstanceOf(Array)
            expect(res.body).toContainEqual(charOne)

        })

        it("Si se vuelve a enviar por body... devuelto en arreglo que incluye elemento antiguo", async () => {
            
            let charOne = {id: 1, name: "Mauricio"}
            let charTwo = {id: 2, name:"Ricardo"}

            const res = await agent.post('/rickandmorty/fav').send(charTwo)

            expect(res.body).toContainEqual(charOne)
            expect(res.body).toContainEqual(charTwo)

        })

    })

    describe("DELETE /rickandmorty/fav/:id", () => {
        
        it("Debe devolver un arreglo con los elementos previos sin modificar si el ID no existe", async () => {

            const { body } = await agent.delete('/rickandmorty/fav/7')

            let charOne = {id: 1, name: "Mauricio"}
            let charTwo = {id: 2, name:"Ricardo"}

            expect(body).toContainEqual(charOne)
            expect(body).toContainEqual(charTwo)

        })

        it("Al ingresar un ID valido, se debe borrar", async () => {

            const { body } = await agent.delete('/rickandmorty/fav/2')

            let charOne = {id: 1, name: "Mauricio"}
            let charTwo = {id: 2, name:"Ricardo"}

            expect(body).toContainEqual(charOne)
            expect(body).not.toContainEqual(charTwo)

        })

    })



  });
});
