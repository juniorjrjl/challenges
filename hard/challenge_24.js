class MainSystem{

    constructor(...users){
        this.users = users
    }

    register(name){
        return this.#hasValidLenght(name) && this.#hasNoAccents(name) && this.#onlyLettersNumbersAndUnderscore(name) && this.#startsWithLetter(name) && 
            this.#NotEndsWithUnderScore(name) && this.#containsAtLeastOneLetterOneNumberAndOneUnderscore(name) && this.#isUnique(name)
    }

    #hasValidLenght(name){
        return name.length > 4 && name.length < 32
    }

    #hasNoAccents(name){
        return name === name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    }

    #onlyLettersNumbersAndUnderscore(name) {
        return /[A-za-z0-9_]/.test(name)
    }

    #startsWithLetter(name){
        return /^[A-Za-z]/.test(name)
    }

    #NotEndsWithUnderScore(name){
        return /[a-zA-Z0-9]$/.test(name)
    }

    #containsAtLeastOneLetterOneNumberAndOneUnderscore(name){
        return /[A-za-z]/.test(name) && /[0-9]/.test(name) && /_/.test(name)
    }

    #isUnique(name){
        return !this.users.includes(name)
    }

}

module.exports = { MainSystem }