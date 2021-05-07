"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The example class that has cloning ability. We'll see how the values of field
 * with different types will be cloned.
 */
class Prototype {
    clone() {
        const clone = Object.create(this);
        clone.component = Object.create(this.Fecha);
        // Cloning an object that has a nested object with backreference
        // requires special treatment. After the cloning is completed, the
        // nested object should point to the cloned object, instead of the
        // original object. Spread operator can be handy for this case.
        clone.circularReference = Object.assign(Object.assign({}, this.Referencia), { prototype: Object.assign({}, this) });
        return clone;
    }
}
class ComponentWithBackReference {
    constructor(prototype) {
        this.prototype = prototype;
    }
}
/**
 * The client code.
 */
function clientCode() {
    const p1 = new Prototype();
    p1.Numeros = 245;
    p1.Fecha = new Date();
    p1.Referencia = new ComponentWithBackReference(p1);
    const p2 = p1.clone();
    if (p1.Numeros === p2.Numeros) {
        console.log('Algun numero ha sido clonado. Yay!');
    }
    else {
        console.log('Algun numero no ha sido clonado. Booo!');
    }
    if (p1.Fecha === p2.Fecha) {
        console.log('Una fecha no ha sido clonado. Booo!');
    }
    else {
        console.log('Una fecha ha sido clonado. Yay!');
    }
    if (p1.Referencia === p2.Referencia) {
        console.log('Componente de referencia no clonada. Booo!');
    }
    else {
        console.log('Componente de referencia clonada. Yay!');
    }
    if (p1.Referencia.prototype === p2.Referencia.prototype) {
        console.log('Componente con referencia a objeto fuente no clonada. Booo!');
    }
    else {
        console.log('Componente con referencia a objeto fuente clonada. Yay!');
    }
}
exports.clientCode = clientCode;
