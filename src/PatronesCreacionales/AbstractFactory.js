"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Concrete Factories produce a family of products that belong to a single
 * variant. The factory guarantees that resulting products are compatible. Note
 * that signatures of the Concrete Factory's methods return an abstract product,
 * while inside the method a concrete product is instantiated.
 */
class FarbicaHija1 {
    createProductA() {
        return new Producto1Hijo1();
    }
    createProductB() {
        return new Producto1Hijo2();
    }
}
/**
 * Each Concrete Factory has a corresponding product variant.
 */
class FarbicaHija2 {
    createProductA() {
        return new Producto2Hijo1();
    }
    createProductB() {
        return new Producto2Hijo2();
    }
}
/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */
class Producto1Hijo1 {
    usefulFunctionA() {
        return 'El resultado del producto A1.';
    }
}
class Producto2Hijo1 {
    usefulFunctionA() {
        return 'El resultado del producto A2.';
    }
}
/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */
class Producto1Hijo2 {
    usefulFunctionB() {
        return 'Resultado del producto B1.';
    }
    /**
     * The variant, Product B1, is only able to work correctly with the variant,
     * Product A1. Nevertheless, it accepts any instance of AbstractProductA as
     * an argument.
     */
    anotherUsefulFunctionB(collaborator) {
        const result = collaborator.usefulFunctionA();
        return `El producto B1 Colabora junto con  (${result})`;
    }
}
class Producto2Hijo2 {
    usefulFunctionB() {
        return 'El resultado B2.';
    }
    /**
     * The variant, Product B2, is only able to work correctly with the variant,
     * Product A2. Nevertheless, it accepts any instance of AbstractProductA as
     * an argument.
     */
    anotherUsefulFunctionB(collaborator) {
        const result = collaborator.usefulFunctionA();
        return `El resultado B2 Colabora junto con (${result})`;
    }
}
/**
 * The client code works with factories and products only through abstract
 * types: AbstractFactory and AbstractProduct. This lets you pass any factory or
 * product subclass to the client code without breaking it.
 */
function clientCode(factory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();
    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}
function AF() {
    /**
     * The client code can work with any concrete factory class.
     */
    console.log('Client: Revizando el codigo del cliente con el primer tipo de fabrica');
    clientCode(new FarbicaHija1());
    console.log('');
    console.log('Client: Revizando con el mismo codigo de cliente con el segundo tipo de fabrica');
    clientCode(new FarbicaHija2());
}
exports.AF = AF;
