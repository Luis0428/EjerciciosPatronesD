"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Abstraction defines the interface for the "control" part of the two class
 * hierarchies. It maintains a reference to an object of the Implementation
 * hierarchy and delegates all of the real work to this object.
 */
class Abstraction {
    constructor(implementation) {
        this.implementation = implementation;
    }
    operation() {
        const result = this.implementation.operationImplementation();
        return `Abstraction: Operacion base con:\n${result}`;
    }
}
/**
 * You can extend the Abstraction without changing the Implementation classes.
 */
class ExtendedAbstraction extends Abstraction {
    operation() {
        const result = this.implementation.operationImplementation();
        return `ExtendedAbstraction: Operacion extendida con:\n${result}`;
    }
}
/**
 * Each Concrete Implementation corresponds to a specific platform and
 * implements the Implementation interface using that platform's API.
 */
class ConcreteImplementationA {
    operationImplementation() {
        return 'ConcreteImplementationA: Este es el resultado de la plataforma 1.';
    }
}
class ConcreteImplementationB {
    operationImplementation() {
        return 'ConcreteImplementationB: Este es el resultado de la plataforma 2.';
    }
}
/**
 * Except for the initialization phase, where an Abstraction object gets linked
 * with a specific Implementation object, the client code should only depend on
 * the Abstraction class. This way the client code can support any abstraction-
 * implementation combination.
 */
function clientCode(abstraction) {
    // ..
    console.log(abstraction.operation());
    // ..
}
function Puente() {
    /**
     * The client code should be able to work with any pre-configured abstraction-
     * implementation combination.
     */
    let implementation = new ConcreteImplementationA();
    let abstraction = new Abstraction(implementation);
    clientCode(abstraction);
    console.log('');
    implementation = new ConcreteImplementationB();
    abstraction = new ExtendedAbstraction(implementation);
    clientCode(abstraction);
}
exports.Puente = Puente;
