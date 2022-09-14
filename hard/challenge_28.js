class Rank{
    static NOVICE = new Rank('Novice', (level) => level >= 1 && level <= 9)
    static EXPLORER = new Rank('Explorer', (level) => level >= 10 && level <= 29)
    static VETERAN = new Rank('Veteran', (level) => level >= 30 && level <= 49)
    static ELITE = new Rank('Elite', (level) => level >= 50 && level <= 79)
    static MASTER = new Rank('Master', (level) => level >= 80 && level <= 98)
    static LEGEND = new Rank('Legend', (level) => level === 99)

    static values = [this.NOVICE, this.EXPLORER, this.VETERAN, this.ELITE, this.MASTER, this.LEGEND]

    constructor(name, validatorCallback){
        this.name = name
        this.validatorCallback = validatorCallback
    }

    static getByLevel(level){
        return Rank.values.find(r => r.validatorCallback(level))
    }

}

class Explorer{

    static #experiences = Array.from({length: 99}, (_, i) => i + 1).map(l => 100 + (l * 10) - 1)

    #experience = 0
    #level = 1
    #rank = Rank.NOVICE

    constructor(experience){
        this.#experience = experience
        this.#level = this.#calculateLevel()
        this.#rank = Rank.getByLevel(this.#level)
        this.planetsResultReport = []
        this.dead = false
        this.terrainExperiences = [{terrain: Terrain.DESERTIC, specialist: false}, {terrain: Terrain.FOREST, specialist: false}, 
            {terrain: Terrain.MOUNTAINOUS, specialist: false}, {terrain: Terrain.UNDERWATER, specialist: false}]
    }

    get experience(){
        return this.#experience
    }

    get level(){
        return this.#level
    }

    get rank(){
        return this.#rank
    }

    #calculateLevel(level = 0){
        let calcExp = Explorer.#experiences.filter((_, i) => i <= level).reduce((a, b) => a + b, 0)
        do{
            calcExp += Explorer.#experiences[level] + (level > 1 ? 1 : 0)
            ++ level
        }while(calcExp < this.#experience)
        return level
    }

    explore(planet, points){
        if (this.dead){
            throw new ExplorerDeadError('Um explorador morto não pode explorar planetas')
        }
        this.planetsResultReport.push({planet, points})
        const isSpecialisTerrain = this.terrainExperiences.find(g => g.terrain === planet.terrain).specialist
        const finalPoints = points + (isSpecialisTerrain ? 1 : 0)
        if (finalPoints <= 2 && planet.hostility === Hostility.HOSTILE && !isSpecialisTerrain){
            this.dead = true
        }
        for (let i = 0; i < this.terrainExperiences.length; i++) {
            const maxResults = this.planetsResultReport.filter(p => p.planet.terrain === this.terrainExperiences[i].terrain).length
            if (maxResults === 3){
                this.terrainExperiences[i].specialist = true
            }
        }
        const explorerSuccess = planet.explorerIsSuccess(points)
        this.#experience += explorerSuccess ? planet.getSuccessPoints() : planet.getFailurePoints()
        this.#level = this.#calculateLevel(this.#level)
        this.#rank = Rank.getByLevel(this.#level)
        return explorerSuccess
    }

}

class ExplorerDeadError extends Error{

    constructor(message){
        super(message)
    }

}

const Hostility = {
    PACIFIC : 'Pacific',
    NEUTRAL: 'Neutal',
    HOSTILE: 'Hostile'
}

const Terrain = {
    DESERTIC : 'Desertic',
    FOREST: 'Forest',
    MOUNTAINOUS: 'Mountainous',
    UNDERWATER: 'Underwater'
}

class Planet{

    constructor(id, name, hostility, terrain){
        this.id = id
        this.name = name
        this.hostility = hostility
        this.terrain = terrain
        this.explorerVerificarionCallback = this.#setVerificationExplorer()
    }

    #setVerificationExplorer(){
        switch (this.hostility) {
            case Hostility.PACIFIC:
                return (points) => points>= 5 && points<= 12
            case Hostility.NEUTRAL:
                return (points) => points>= 7 && points<= 12
            default:
                return (points) => points>= 9 && points<= 12
        }
    }

    explorerIsSuccess(points){
        return this.explorerVerificarionCallback(points)
    }

    getSuccessPoints(){
        switch (this.hostility) {
            case Hostility.PACIFIC:
                return 15
            case Hostility.NEUTRAL:
                return 25
            default:
                return 50
        }
    }

    getFailurePoints(){
        return this.hostility === Hostility.HOSTILE ? 10 : 0
    }

}

module.exports = { Rank, Explorer, ExplorerDeadError, Hostility, Terrain, Planet }