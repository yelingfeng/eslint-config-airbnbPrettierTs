export function sum(a: number, b: number) {
  return a + b
}

interface Person {
  name: string
  age: number
}

export function greeter(person: Person) {
  return `My name is ${person.name}. I am ${person.age} years old.`
}

greeter({ name: 'toshi-toma', age: 24 })
