/**
 * The Target defines the domain-specific interface used by the client code.
 */
 class Target {
    public request(): string {
        return 'Target: Comportamiento predeterminado.';
    }
}

/**
 * The Adaptee contains some useful behavior, but its interface is incompatible
 * with the existing client code. The Adaptee needs some adaptation before the
 * client code can use it.
 */
class Adaptee {
    public specificRequest(): string {
        return '.eetpadA eht fo roivaheb laicepS';
    }
}

/**
 * The Adapter makes the Adaptee's interface compatible with the Target's
 * interface.
 */
class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specificRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }
}

/**
 * The client code supports all classes that follow the Target interface.
 */
function clientCode(target: Target) {
    console.log(target.request());
}

export function Start(){

    console.log('Client: Puedo trabajar solo con objetos de tipo Target:');
    const target = new Target();
    clientCode(target);
    
    console.log('');
    
    const adaptee = new Adaptee();
    console.log('Client: La classe Adaptee tiene algo que no entiendo:');
    console.log(`Adaptee: ${adaptee.specificRequest()}`);
    
    console.log('');
    
    console.log('Client: Pero puedo entenderlo al pasar por el Adapter:');
    const adapter = new Adapter(adaptee);
    clientCode(adapter);
}
