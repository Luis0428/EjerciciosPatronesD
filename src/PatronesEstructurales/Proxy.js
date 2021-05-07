"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The RealSubject contains some core business logic. Usually, RealSubjects are
 * capable of doing some useful work which may also be very slow or sensitive -
 * e.g. correcting input data. A Proxy can solve these issues without any
 * changes to the RealSubject's code.
 */
class RealSubject {
    request() {
        console.log('RealSubject: Solicitud de manipulacion.');
    }
}
/**
 * The Proxy has an interface identical to the RealSubject.
 */
class Proxy {
    /**
     * The Proxy maintains a reference to an object of the RealSubject class. It
     * can be either lazy-loaded or passed to the Proxy by the client.
     */
    constructor(realSubject) {
        this.realSubject = realSubject;
    }
    /**
     * The most common applications of the Proxy pattern are lazy loading,
     * caching, controlling the access, logging, etc. A Proxy can perform one of
     * these things and then, depending on the result, pass the execution to the
     * same method in a linked RealSubject object.
     */
    request() {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }
    checkAccess() {
        // Some real checks should go here.
        console.log('Proxy: Revizando acceso antes de crear una solicitud real.');
        return true;
    }
    logAccess() {
        console.log('Proxy: Se registro tiempo de la solicitud.');
    }
}
/**
 * The client code is supposed to work with all objects (both subjects and
 * proxies) via the Subject interface in order to support both real subjects and
 * proxies. In real life, however, clients mostly work with their real subjects
 * directly. In this case, to implement the pattern more easily, you can extend
 * your proxy from the real subject's class.
 */
function clientCode(subject) {
    // ...
    subject.request();
    // ...
}
function start() {
    console.log('Client: Ejecutando codigo del cliente con subject real:');
    const realSubject = new RealSubject();
    clientCode(realSubject);
    console.log('');
    console.log('Client: Executing the same client code with a proxy:');
    const proxy = new Proxy(realSubject);
    clientCode(proxy);
}
exports.start = start;
