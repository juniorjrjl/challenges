class Coordinates{
    constructor(x, y, z){
        this.coords = [x, y, z]
    }

    static sectors = {
        '+++': 'Alfa',
        '++-': 'Beta',
        '+-+': 'Gama',
        '+--': 'Delta',
        '-++': 'Épsilon',
        '-+-': 'Zeta',
        '--+': 'Sigma',
        '---': 'Ômega'
    }

    getSector = () => Coordinates.sectors[this.coords.map(c => c >= 0 ? '+' : '-').join('')]

    getDistance = () => Math.sqrt((this.coords[0] ** 2 + this.coords[1] ** 2 + this.coords[2] ** 2))

}

module.exports = { Coordinates }