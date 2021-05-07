"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Originator holds some important state that may change over time. It also
 * defines a method for saving the state inside a memento and another method for
 * restoring the state from it.
 */
class Originator {
    constructor(state) {
        this.state = state;
        console.log(`Originator: My estado inicial es: ${state}`);
    }
    /**
     * The Originator's business logic may affect its internal state. Therefore,
     * the client should backup the state before launching methods of the
     * business logic via the save() method.
     */
    doSomething() {
        console.log('Originator: Estoy haciendo algo importante.');
        this.state = this.generateRandomString(30);
        console.log(`Originator: y mi estado ha cambiado a: ${this.state}`);
    }
    generateRandomString(length = 10) {
        const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return Array
            .apply(null, { length })
            .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
            .join('');
    }
    /**
     * Saves the current state inside a memento.
     */
    save() {
        return new ConcreteMemento(this.state);
    }
    /**
     * Restores the Originator's state from a memento object.
     */
    restore(memento) {
        this.state = memento.getState();
        console.log(`Originator: Mi estado ha cambiado a: ${this.state}`);
    }
}
/**
 * The Concrete Memento contains the infrastructure for storing the Originator's
 * state.
 */
class ConcreteMemento {
    constructor(state) {
        this.state = state;
        this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }
    /**
     * The Originator uses this method when restoring its state.
     */
    getState() {
        return this.state;
    }
    /**
     * The rest of the methods are used by the Caretaker to display metadata.
     */
    getName() {
        return `${this.date} / (${this.state.substr(0, 9)}...)`;
    }
    getDate() {
        return this.date;
    }
}
/**
 * The Caretaker doesn't depend on the Concrete Memento class. Therefore, it
 * doesn't have access to the originator's state, stored inside the memento. It
 * works with all mementos via the base Memento interface.
 */
class Caretaker {
    constructor(originator) {
        this.mementos = [];
        this.originator = originator;
    }
    backup() {
        console.log('\nCaretaker: Salvando originador de estado...');
        this.mementos.push(this.originator.save());
    }
    undo() {
        if (!this.mementos.length) {
            return;
        }
        const memento = this.mementos.pop();
        console.log(`Caretaker: Restaurando estado a: ${memento.getName()}`);
        this.originator.restore(memento);
    }
    showHistory() {
        console.log('Caretaker: Aqui esta la lista de mementos:');
        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }
}
function start() {
    /**
     * Client code.
     */
    const originator = new Originator('Super-duper-super-puper-super.');
    const caretaker = new Caretaker(originator);
    caretaker.backup();
    originator.doSomething();
    caretaker.backup();
    originator.doSomething();
    caretaker.backup();
    originator.doSomething();
    console.log('');
    caretaker.showHistory();
    console.log('\nClient: Now dejamos el rollback!\n');
    caretaker.undo();
    console.log('\nClient: uno mas!\n');
    caretaker.undo();
    console.log('\nClient: uno mas!\n');
    caretaker.undo();
}
exports.start = start;
