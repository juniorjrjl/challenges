module.exports = class Person{
    constructor(name, lastName, birthday){
        this.name = name
        this.lastName = lastName
        this.birthday = birthday

    }

    genFlyingLicense(){
        let generator = this.lastName.substring(0, 5).toUpperCase()
        while (generator.length < 5) {
            generator += '9'
        }
        generator += '-'
        let year = this.birthday.getYear().toString()
        generator += year.charAt(0)
        let month = `${this.birthday.getMonth() + 1}`
        generator += month.length < 2 ? `0${month}` : month
        generator += year.charAt(1)
        generator += '.'
        generator += this.name.charAt(0).toLowerCase()
        this.flyingLicense = generator
    }

}
