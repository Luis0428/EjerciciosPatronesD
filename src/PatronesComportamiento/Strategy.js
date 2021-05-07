"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Context defines the interface of interest to clients.
 */
class Context {
    /**
     * Usually, the Context accepts a strategy through the constructor, but also
     * provides a setter to change it at runtime.
     */
    constructor(strategy) {
        this.strategy = strategy;
    }
    /**
     * Usually, the Context allows replacing a Strategy object at runtime.
     */
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    /**
     * The Context delegates some work to the Strategy object instead of
     * implementing multiple versions of the algorithm on its own.
     */
    doSomeBusinessLogic() {
        // ...
        console.log('Context: Ordenando datos usando la estrategia');
        const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(','));
        // ...
    }
}
/**
 * Concrete Strategies implement the algorithm while following the base Strategy
 * interface. The interface makes them interchangeable in the Context.
 */
class Estrategia_1 {
    doAlgorithm(data) {
        return data.sort();
    }
}
class Estrategia_2 {
    doAlgorithm(data) {
        return data.reverse();
    }
}
function start() {
    /**
     * The client code picks a concrete strategy and passes it to the context. The
     * client should be aware of the differences between strategies in order to make
     * the right choice.
     */
    const context = new Context(new Estrategia_1());
    console.log('Client: La estrategia esta establecida en clasificacion normal.');
    context.doSomeBusinessLogic();
    console.log('');
    console.log('Client: La estrategia esta para revertir la clasificacion.');
    context.setStrategy(new Estrategia_2());
    context.doSomeBusinessLogic();
}
exports.start = start;
