/**
 * The Context defines the interface of interest to clients. It also maintains a
 * reference to an instance of a State subclass, which represents the current
 * state of the Context.
 */
class Context {
    /**
     * @type {State} A reference to the current state of the Context.
     */
    private state: State;

    constructor(state: State) {
        this.transitionTo(state);
    }

    /**
     * The Context allows changing the State object at runtime.
     */
    public transitionTo(state: State): void {
        console.log(`Context: Trancendiendo a ${(<any>state).constructor.name}.`);
        this.state = state;
        this.state.setContext(this);
    }

    /**
     * The Context delegates part of its behavior to the current State object.
     */
    public Pedido1(): void {
        this.state.handle1();
    }

    public Pedido2(): void {
        this.state.handle2();
    }
}

/**
 * The base State class declares methods that all Concrete State should
 * implement and also provides a backreference to the Context object, associated
 * with the State. This backreference can be used by States to transition the
 * Context to another State.
 */
abstract class State {
    protected context: Context;

    public setContext(context: Context) {
        this.context = context;
    }

    public abstract handle1(): void;

    public abstract handle2(): void;
}

/**
 * Concrete States implement various behaviors, associated with a state of the
 * Context.
 */
class EstadoTipo1 extends State {
    public handle1(): void {
        console.log('Estado tipo 1 handles Pedido 1.');
        console.log('Estado tipo 1 Quiere cambiar el estado del contexto.');
        this.context.transitionTo(new EstadoTipo2());
    }

    public handle2(): void {
        console.log('ConcreteStateA handles Pedido2.');
    }
}

class EstadoTipo2 extends State {
    public handle1(): void {
        console.log('Estado tipo B handles Pedido1.');
    }

    public handle2(): void {
        console.log('Estado tipo 2 handles Pedido2.');
        console.log('Estado tipo 2 Quiere cambiar el estado del contexto.');
        this.context.transitionTo(new EstadoTipo1());
    }
}

export function start(){
    /**
 * The client code.
 */
const context = new Context(new EstadoTipo1());
context.Pedido1();
context.Pedido2();
}