"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Context defines the interface of interest to clients. It also maintains a
 * reference to an instance of a State subclass, which represents the current
 * state of the Context.
 */
class Context {
    constructor(state) {
        this.transitionTo(state);
    }
    /**
     * The Context allows changing the State object at runtime.
     */
    transitionTo(state) {
        console.log(`Context: Trancendiendo a ${state.constructor.name}.`);
        this.state = state;
        this.state.setContext(this);
    }
    /**
     * The Context delegates part of its behavior to the current State object.
     */
    Pedido1() {
        this.state.handle1();
    }
    Pedido2() {
        this.state.handle2();
    }
}
/**
 * The base State class declares methods that all Concrete State should
 * implement and also provides a backreference to the Context object, associated
 * with the State. This backreference can be used by States to transition the
 * Context to another State.
 */
class State {
    setContext(context) {
        this.context = context;
    }
}
/**
 * Concrete States implement various behaviors, associated with a state of the
 * Context.
 */
class EstadoTipo1 extends State {
    handle1() {
        console.log('Estado tipo 1 handles Pedido 1.');
        console.log('Estado tipo 1 Quiere cambiar el estado del contexto.');
        this.context.transitionTo(new EstadoTipo2());
    }
    handle2() {
        console.log('ConcreteStateA handles Pedido2.');
    }
}
class EstadoTipo2 extends State {
    handle1() {
        console.log('Estado tipo B handles Pedido1.');
    }
    handle2() {
        console.log('Estado tipo 2 handles Pedido2.');
        console.log('Estado tipo 2 Quiere cambiar el estado del contexto.');
        this.context.transitionTo(new EstadoTipo1());
    }
}
function start() {
    /**
 * The client code.
 */
    const context = new Context(new EstadoTipo1());
    context.Pedido1();
    context.Pedido2();
}
exports.start = start;
