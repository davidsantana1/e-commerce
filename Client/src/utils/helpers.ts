export function camelize(str: string) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

export function uncamelize(str: string, separator: string = " "): string {
  return str
    .replace(/([a-z\d])([A-Z])/g, "$1" + separator + "$2") // camelCase
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1" + separator + "$2") // PascalCase
    .toLowerCase();
}
