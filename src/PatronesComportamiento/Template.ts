/**
 * The Abstract Class defines a template method that contains a skeleton of some
 * algorithm, composed of calls to (usually) abstract primitive operations.
 *
 * Concrete subclasses should implement these operations, but leave the template
 * method itself intact.
 */
 abstract class AbstractClass {
    /**
     * The template method defines the skeleton of an algorithm.
     */
    public templateMethod(): void {
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
    protected Operacion1(): void {
        console.log('AbstractClass dice: Estoy haciendo la mayor parte del trabajo');
    }

    protected Operacion2(): void {
        console.log('AbstractClass Dice: Pero dejo que algunas subclases anulen algunas operaciones');
    }

    protected Operacion3(): void {
        console.log('AbstractClass Dice: Pero de todas maneras estoy haciendo la mayor parte del trabajo');
    }

    /**
     * These operations have to be implemented in subclasses.
     */
    protected abstract Operacion_Solicitud_1(): void;

    protected abstract Operacion_Solicitud_2(): void;

    /**
     * These are "hooks." Subclasses may override them, but it's not mandatory
     * since the hooks already have default (but empty) implementation. Hooks
     * provide additional extension points in some crucial places of the
     * algorithm.
     */
    protected Gancho1(): void { }

    protected Gancho2(): void { }
}

/**
 * Concrete classes have to implement all abstract operations of the base class.
 * They can also override some operations with a default implementation.
 */
class Subclase_1 extends AbstractClass {
    protected Operacion_Solicitud_1(): void {
        console.log('Subclase1 dice: Implementando operacion 1');
    }

    protected Operacion_Solicitud_2(): void {
        console.log('Subclase1 dice: Implementando operacion 2');
    }
}

/**
 * Usually, concrete classes override only a fraction of base class' operations.
 */
class Subclase_2 extends AbstractClass {
    protected Operacion_Solicitud_1(): void {
        console.log('Subclase 2 dice: Implementando operacion 2');
    }

    protected Operacion_Solicitud_2(): void {
        console.log('Subclase 2 dice: Implementando operacion 2');
    }

    protected Gancho1(): void {
        console.log('Subclase 2 dice: Ganch1 anulado');
    }
}

/**
 * The client code calls the template method to execute the algorithm. Client
 * code does not have to know the concrete class of an object it works with, as
 * long as it works with objects through the interface of their base class.
 */
function clientCode(abstractClass: AbstractClass) {
    // ...
    abstractClass.templateMethod();
    // ...
}

export function Start(){

    console.log('Mismo codigo de cliente puede trabajar con diferentes subclases:');
    clientCode(new Subclase_1());
    console.log('');

    console.log('Mismo codigo de cliente puede trabajar con diferentes subclases:');
    clientCode(new Subclase_2());
}