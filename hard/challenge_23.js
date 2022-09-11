class Pannel{

    #ELIMINATE = 'ELIMINATE'

    constructor(pods){
        this.pods = []
        pods.map((p, i) => this.pods[i] = {'name': p, 'running': true})
        Array.prototype.move = function(from,to){
            this.splice(to,0,this.splice(from,1)[0]);
            return this;
        };
    }

    executeEvent(event){
        const podToModify = this.#getPodNameFromEvent(event)
        if (!this.#eventIsValid(event)){
            throw new InvalidEvent(`O evento ${event} não é válido`)
        }
        if (!this.pods.find(p => p.name === podToModify)){
            throw new InvalidPod(`O pod ${podToModify} não está na corrida`)
        }
        const currentPodPosition = this.pods.map(p => p.name).indexOf(podToModify)
        if (event.includes(this.#ELIMINATE)){
            this.pods.move(currentPodPosition, this.pods.length -1)
            this.pods[this.pods.length -1].running = false
        }else{
            this.#modifyPosition(event, podToModify, currentPodPosition)
        }
    }

    #modifyPosition(event, podToModify, currentPodPosition){
        const positionChange = this.#getPositionFromEvent(event)
        if (!this.pods.find(p => p.name === podToModify).running){
            throw new InvalidPod(`O pod ${podToModify} foi eliminado da corrida`)
        }
        let newPosition = currentPodPosition + (positionChange * -1)
        if (newPosition < 0){
            newPosition = 0
        }
        const lastPosition = this.#getLastPositionRunning()
        if (newPosition > lastPosition){
            newPosition = lastPosition
        }
        this.pods.move(currentPodPosition, newPosition)
    }

    getClassification(){
        return this.pods.map(p => p.running ? p.name : `${p.name} ELIMINATED`)
    }

    #getLastPositionRunning(){
        return this.pods.filter(p => p.running).length -1
    }

    #getPodNameFromEvent(event){
        if (event.includes(this.#ELIMINATE)){
            return event.replace(` ${this.#ELIMINATE}`, '')
        }else{
            let cutIndex = event.indexOf('-') > 0 ? event.indexOf('-') : event.indexOf('+')
            return event.slice(0, cutIndex - 1)
        }
    }

    #eventIsValid(event){
        return event.includes(this.#ELIMINATE) || 
            (event.includes('-') && typeof this.#getPositionFromEvent(event) === 'number') || 
            (event.includes('+') && typeof this.#getPositionFromEvent(event) === 'number')
    }

    #getPositionFromEvent(event){
        if (event.includes('-')){    
            const splitedEvent = event.split('-')
            return parseInt(splitedEvent[splitedEvent.length - 1]) * -1
        }else{
            const splitedEvent = event.split('+')
            return parseInt(splitedEvent[splitedEvent.length - 1])
        }
    }

}

class InvalidPod extends Error{

    constructor(message){
        super(message)
    }

}

class InvalidEvent extends Error{

    constructor(message){
        super(message)
    }

}

module.exports = { 
    Pannel, 
    InvalidEvent, 
    InvalidPod 
}