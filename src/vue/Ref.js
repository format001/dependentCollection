import { update } from './render'

export default class Ref {
    constructor (initialValue) {
        this.dependent = new Set();
        this._defaulValue = initialValue;
        this._value = initialValue;
    }

    get value () {
        return this._value;
    }

    set value (newValue) {
        this._value = newValue;

        update(this)
    }

    $reset () {
        this.value = this._defaulValue;
    }
}