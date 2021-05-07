"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Concrete Components provide default implementations of the operations. There
 * might be several variations of these classes.
 */
class ConcreteComponent {
    operation() {
        return 'Funcionalidad 1';
    }
}
/**
 * The base Decorator class follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping interface for all
 * concrete decorators. The default implementation of the wrapping code might
 * include a field for storing a wrapped component and the means to initialize
 * it.
 */
class Decorator {
    constructor(component) {
        this.component = component;
    }
    /**
     * The Decorator delegates all work to the wrapped component.
     */
    operation() {
        return this.component.operation();
    }
}
/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 */
class ConcreteDecoratorA extends Decorator {
    /**
     * Decorators may call parent implementation of the operation, instead of
     * calling the wrapped object directly. This approach simplifies extension
     * of decorator classes.
     */
    operation() {
        return `Funcionalidad 2(${super.operation()})`;
    }
}
/**
 * Decorators can execute their behavior either before or after the call to a
 * wrapped object.
 */
class ConcreteDecoratorB extends Decorator {
    operation() {
        return `Funcionalidad 3(${super.operation()})`;
    }
}
/**
 * The client code works with all objects using the Component interface. This
 * way it can stay independent of the concrete classes of components it works
 * with.
 */
function clientCode(component) {
    // ...
    console.log(`RESULTADO: ${component.operation()}`);
    // ...
}
function start() {
    /**
    * This way the client code can support both simple components...
    */
    const simple = new ConcreteComponent();
    console.log('Client: Tengo un simple componente:');
    clientCode(simple);
    console.log('');
    /**
     * ...as well as decorated ones.
     *
     * Note how decorators can wrap not only simple components but the other
     * decorators as well.
     */
    const decorator1 = new ConcreteDecoratorA(simple);
    const decorator2 = new ConcreteDecoratorB(decorator1);
    console.log('Client: Ahora tengo un componente decorator:');
    clientCode(decorator2);
}
exports.start = start;
