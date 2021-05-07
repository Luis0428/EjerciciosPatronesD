"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
class CanalComunicacion {
    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    constructor() { }
    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    static ObtenerEstado() {
        if (!CanalComunicacion.instance) {
            CanalComunicacion.instance = new CanalComunicacion();
        }
        return CanalComunicacion.instance;
    }
    /**
     * Finally, any singleton should define some business logic, which can be
     * executed on its instance.
     */
    someBusinessLogic() {
        // ...
    }
}
/**
 * The client code.
 */
function clientCode() {
    const s1 = CanalComunicacion.ObtenerEstado();
    const s2 = CanalComunicacion.ObtenerEstado();
    if (s1 === s2) {
        console.log('Canal de comunicacion funciona, ambas sesiones tienen la misma conexion.');
    }
    else {
        console.log('Canal de comunicacion fallo, ambas sesiones tienen diferente conexion.');
    }
}
exports.clientCode = clientCode;
