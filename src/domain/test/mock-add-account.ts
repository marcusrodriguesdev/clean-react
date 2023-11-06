import { AddAccountParams } from '@/domain/useCases'
import * as Faker from 'faker'

export const mockAddAccountParams = (): AddAccountParams => {
  const password = Faker.internet.password()
  return {
    name: Faker.name.findName(),
    email: Faker.internet.email(),
    password,
    passwordConfirmation: password
  }
}
