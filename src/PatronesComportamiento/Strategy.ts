/**
 * The Context defines the interface of interest to clients.
 */
 class Context {
    /**
     * @type {Strategy} The Context maintains a reference to one of the Strategy
     * objects. The Context does not know the concrete class of a strategy. It
     * should work with all strategies via the Strategy interface.
     */
    private strategy: Strategy;

    /**
     * Usually, the Context accepts a strategy through the constructor, but also
     * provides a setter to change it at runtime.
     */
    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    /**
     * Usually, the Context allows replacing a Strategy object at runtime.
     */
    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    /**
     * The Context delegates some work to the Strategy object instead of
     * implementing multiple versions of the algorithm on its own.
     */
    public doSomeBusinessLogic(): void {
        // ...

        console.log('Context: Ordenando datos usando la estrategia');
        const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(','));

        // ...
    }
}

/**
 * The Strategy interface declares operations common to all supported versions
 * of some algorithm.
 *
 * The Context uses this interface to call the algorithm defined by Concrete
 * Strategies.
 */
interface Strategy {
    doAlgorithm(data: string[]): string[];
}

/**
 * Concrete Strategies implement the algorithm while following the base Strategy
 * interface. The interface makes them interchangeable in the Context.
 */
class Estrategia_1 implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.sort();
    }
}

class Estrategia_2 implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.reverse();
    }
}

export function start(){
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