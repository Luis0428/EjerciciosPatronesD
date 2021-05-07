"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Abstract Class defines a template method that contains a skeleton of some
 * algorithm, composed of calls to (usually) abstract primitive operations.
 *
 * Concrete subclasses should implement these operations, but leave the template
 * method itself intact.
 */
class AbstractClass {
    /**
     * The template method defines the skeleton of an algorithm.
     */
    templateMethod() {
        this.Operacion1();
        this.Operacion_Solicitud_1();
        this.Operacion2();
        this.Gancho1();
        this.Operacion_Solicitud_2();
        this.Operacion3();
        this.Gancho2();
    }
    /**
     * These operations already have implementations.
     */
    Operacion1() {
        console.log('AbstractClass dice: Estoy haciendo la mayor parte del trabajo');
    }
    Operacion2() {
        console.log('AbstractClass Dice: Pero dejo que algunas subclases anulen algunas operaciones');
    }
    Operacion3() {
        console.log('AbstractClass Dice: Pero de todas maneras estoy haciendo la mayor parte del trabajo');
    }
    /**
     * These are "hooks." Subclasses may override them, but it's not mandatory
     * since the hooks already have default (but empty) implementation. Hooks
     * provide additional extension points in some crucial places of the
     * algorithm.
     */
    Gancho1() { }
    Gancho2() { }
}
/**
 * Concrete classes have to implement all abstract operations of the base class.
 * They can also override some operations with a default implementation.
 */
class Subclase_1 extends AbstractClass {
    Operacion_Solicitud_1() {
        console.log('Subclase1 dice: Implementando operacion 1');
    }
    Operacion_Solicitud_2() {
        console.log('Subclase1 dice: Implementando operacion 2');
    }
}
/**
 * Usually, concrete classes override only a fraction of base class' operations.
 */
class Subclase_2 extends AbstractClass {
    Operacion_Solicitud_1() {
        console.log('Subclase 2 dice: Implementando operacion 2');
    }
    Operacion_Solicitud_2() {
        console.log('Subclase 2 dice: Implementando operacion 2');
    }
    Gancho1() {
        console.log('Subclase 2 dice: Ganch1 anulado');
    }
}
/**
 * The client code calls the template method to execute the algorithm. Client
 * code does not have to know the concrete class of an object it works with, as
 * long as it works with objects through the interface of their base class.
 */
function clientCode(abstractClass) {
    // ...
    abstractClass.templateMethod();
    // ...
}
function Start() {
    console.log('Mismo codigo de cliente puede trabajar con diferentes subclases:');
    clientCode(new Subclase_1());
    console.log('');
    console.log('Mismo codigo de cliente puede trabajar con diferentes subclases:');
    clientCode(new Subclase_2());
}
exports.Start = Start;
