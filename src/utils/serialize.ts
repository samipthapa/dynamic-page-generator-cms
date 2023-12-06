/**
 * Serialize React element to JSON string
 *
 * @param {ReactNode} element
 * @returns {string}
 */
export function serialize(element) {
    const replacer = (key, value) => {
        switch (key) {
            case "_owner":
            case "_store":
            case "ref":
            case "key":
                return
            case "type":
                return typeof value === 'function' ? value.name : value;
            default:
                return value
        }
    }

    return JSON.stringify(element, replacer)
}