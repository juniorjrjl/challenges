const { Rank, Explorer, ExplorerDeadError, Hostility, Terrain, Planet } = require('./challenge_28')

describe("Let's play a game", () => 
{
    test('Explorer with bonus', () =>{
        const initialExp = 1340
        let explorer = new Explorer(initialExp)
        expect(explorer.rank).toEqual(Rank.NOVICE)
        expect(explorer.level).toBe(9)
        const planetsResultReport = [{planet: {id: 3, name: 'Big Forest', hostility: Hostility.NEUTRAL, terrain: Terrain.FOREST}, points: 12}, 
            {planet: { id: 2, name: 'Large Forest', hostility: Hostility.NEUTRAL, terrain: Terrain.FOREST}, points: 12}]
        explorer.planetsResultReport = planetsResultReport
        const planet = new Planet(1, 'Planeta 1', Hostility.NEUTRAL, Terrain.FOREST)
        explorer.explore(planet, 12)
        expect(explorer.experience).toBe(initialExp + 25)
        expect(explorer.level).toBe(10)
        expect(explorer.rank).toEqual(Rank.EXPLORER)
        expect(explorer.terrainExperiences.find(t => t.terrain === Terrain.FOREST).specialist).toBe(true)
        expect(explorer.planetsResultReport.map(p => p.planet).includes(planet)).toBe(true)
    }),

    test('when explorer die then can not explorer again', () =>{
        let explorer = new Explorer(0)
        let planet = new Planet(2, 'Planeta 2', Hostility.HOSTILE, Terrain.DESERTIC)
        explorer.explore(planet, 1)
        expect(explorer.dead).toBe(true)
        expect(explorer.planetsResultReport.map(p => p.planet).includes(planet)).toBe(true)
        expect(() => explorer.explore(planet)).toThrowError(ExplorerDeadError)
        expect(explorer.experience).toBe(10)
    }),

    it.each([
        [Hostility.HOSTILE, 50],
        [Hostility.PACIFIC, 15]
    ])
    ('When planet explored with success is %s then get %s exp points', (hostility, experience) =>{
        let explorer = new Explorer(0)
        let planet = new Planet(2, 'Planeta 2', hostility, Terrain.DESERTIC)
        explorer.explore(planet, 10)
        expect(explorer.experience).toBe(experience)
    }),

    test('when failure explore hostile planet and is specialist in terrain then explorer do not die', ()=>{
        const initialExp = 9999
        let explorer = new Explorer(initialExp)
        explorer.explore(new Planet(1, 'Big Forest', Hostility.NEUTRAL, Terrain.FOREST), 12)
        explorer.explore(new Planet(2, 'Large Forest', Hostility.NEUTRAL, Terrain.FOREST), 12)
        explorer.explore(new Planet(3, 'Large Forest II', Hostility.NEUTRAL, Terrain.FOREST), 12)
        explorer.terrainExperiences.find(t => t.terrain === Terrain.FOREST).specialist = true
        let planet = new Planet(2, 'Planeta 2', Hostility.HOSTILE, Terrain.FOREST)
        explorer.explore(planet, 1)
        expect(explorer.dead).toBe(false)
    }),

    test('when failure explore non hostile planet then no get experience', ()=>{
        const initialExp = 99999
        let explorer = new Explorer(initialExp)
        explorer.terrainExperiences.find(t => t.terrain === Terrain.FOREST).specialist = true
        let planet = new Planet(2, 'Planeta 2', Hostility.PACIFIC, Terrain.FOREST)
        explorer.explore(planet, 1)
        expect(explorer.dead).toBe(false)
        expect(explorer.experience).toBe(initialExp)
    })
})
