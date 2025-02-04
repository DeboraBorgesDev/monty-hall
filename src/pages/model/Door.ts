export default class Door {
    #number
    #haveGift
    #selected
    #opened

    constructor(number: number, haveGift = false, seleted = false, opened = false){
        this.#number = number
        this.#haveGift = haveGift
        this.#opened = opened
        this.#selected = seleted
    }

    get number(){
        return this.#number
    }

    get haveGift(){
        return this.#haveGift
    }

    get selected(){
        return this.#selected
    }

    get opened(){
        return this.#opened
    }

    open() {
        const opened = true
        return new Door(this.number, this.#haveGift, this.selected, opened)
    }

    deselect() {
        const selected = false
        return new Door(this.number, this.#haveGift, selected, this.opened)
    }

    togglSelection() {
        const selected = !this.selected
        return new Door(this.number, this.#haveGift, selected, this.opened)
    }
}