"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The default chaining behavior can be implemented inside a base handler class.
 */
class AbstractHandler {
    setNext(handler) {
        this.nextHandler = handler;
        // Returning a handler from here will let us link handlers in a
        // convenient way like this:
        // monkey.setNext(squirrel).setNext(dog);
        return handler;
    }
    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}
/**
 * All Concrete Handlers either handle a request or pass it to the next handler
 * in the chain.
 */
class MonkeyHandler extends AbstractHandler {
    handle(request) {
        if (request === 'Platano') {
            return `Mono: Me comere la ${request}.`;
        }
        return super.handle(request);
    }
}
class SquirrelHandler extends AbstractHandler {
    handle(request) {
        if (request === 'Nuez') {
            return `Ardilla: Me comere la ${request}.`;
        }
        return super.handle(request);
    }
}
class DogHandler extends AbstractHandler {
    handle(request) {
        if (request === 'Albondiga') {
            return `Perro: Me comere la ${request}.`;
        }
        return super.handle(request);
    }
}
/**
 * The client code is usually suited to work with a single handler. In most
 * cases, it is not even aware that the handler is part of a chain.
 */
function clientCode(handler) {
    const foods = ['Nuez', 'Platano', 'Taza de cafe'];
    for (const food of foods) {
        console.log(`Client: Quien quiere un(a) ${food}?`);
        const result = handler.handle(food);
        if (result) {
            console.log(`  ${result}`);
        }
        else {
            console.log(`  ${food} Nadie la quiso.`);
        }
    }
}
function start() {
    /**
    * The other part of the client code constructs the actual chain.
    */
    const Mono = new MonkeyHandler();
    const Ardilla = new SquirrelHandler();
    const Perro = new DogHandler();
    Mono.setNext(Ardilla).setNext(Perro);
    /**
     * The client should be able to send a request to any handler, not just the
     * first one in the chain.
     */
    console.log('Cadena: Mono > Ardilla > Perro\n');
    clientCode(Mono);
    console.log('');
    console.log('SubCadena: Ardilla > Perro\n');
    clientCode(Ardilla);
}
exports.start = start;
