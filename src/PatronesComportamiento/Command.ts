/**
 * The Command interface declares a method for executing a command.
 */
 interface Command {
    execute(): void;
}

/**
 * Some commands can implement simple operations on their own.
 */
class SimpleCommand implements Command {
    private payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }

    public execute(): void {
        console.log(`SimpleCommand: Observa, puedo hacer cosas simple como imprimir este mensaje (${this.payload})`);
    }
}

/**
 * However, some commands can delegate more complex operations to other objects,
 * called "receivers."
 */
class ComplexCommand implements Command {
    private receiver: Receiver;

    /**
     * Context data, required for launching the receiver's methods.
     */
    private a: string;

    private b: string;

    /**
     * Complex commands can accept one or several receiver objects along with
     * any context data via the constructor.
     */
    constructor(receiver: Receiver, a: string, b: string) {
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }

    /**
     * Commands can delegate to any methods of a receiver.
     */
    public execute(): void {
        console.log('ComplexCommand: Las cosas complejas son realizadas por el objeto receptor.');
        this.receiver.doSomething(this.a);
        this.receiver.doSomethingElse(this.b);
    }
}

/**
 * The Receiver classes contain some important business logic. They know how to
 * perform all kinds of operations, associated with carrying out a request. In
 * fact, any class may serve as a Receiver.
 */
class Receiver {
    public doSomething(a: string): void {
        console.log(`Receiver: Trabajando en (${a}.)`);
    }

    public doSomethingElse(b: string): void {
        console.log(`Receiver: Tambien trabajo en (${b}.)`);
    }
}

/**
 * The Invoker is associated with one or several commands. It sends a request to
 * the command.
 */
class Invoker {
    private onStart: Command;

    private onFinish: Command;

    /**
     * Initialize commands.
     */
    public setOnStart(command: Command): void {
        this.onStart = command;
    }

    public setOnFinish(command: Command): void {
        this.onFinish = command;
    }

    /**
     * The Invoker does not depend on concrete command or receiver classes. The
     * Invoker passes a request to a receiver indirectly, by executing a
     * command.
     */
    public doSomethingImportant(): void {
        console.log('Invoker: ??Alguien quiere que haga algo antes de empezar?');
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }

        console.log('Invoker: ...Haciendo algo realmente importante...');

        console.log('Invoker: Alguien quiere algo antes de terminar?');
        if (this.isCommand(this.onFinish)) {
            this.onFinish.execute();
        }
    }

    private isCommand(object): object is Command {
        return object.execute !== undefined;
    }
}

export function start(){
    /**
     * The client code can parameterize an invoker with any commands.
     */
    const invoker = new Invoker();
    invoker.setOnStart(new SimpleCommand('Decir Hola!'));
    const receiver = new Receiver();
    invoker.setOnFinish(new ComplexCommand(receiver, 'Enviar email', 'Resguardar un reporte'));

    invoker.doSomethingImportant();
}