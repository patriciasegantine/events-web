import { faker } from "@faker-js/faker";

export const mockData = Array.from({length: 185}).map(() => {
  return {
    id: faker.number.int({min: 100000, max: 150000}),
    name: faker.person.fullName(),
    email: faker.internet.email().toLocaleLowerCase(),
    createdAt: faker.date.recent({days: 30}).toISOString(),
    checkedInAt: faker.date.recent({days: 7}).toISOString(),
  }
})
