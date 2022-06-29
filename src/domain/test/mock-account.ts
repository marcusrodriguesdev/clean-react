import { AuthenticationParams } from '@/domain/useCases'
import { AccountModel } from '@/domain/models'
import * as Faker from 'faker'

export const mockAuthentication = (): AuthenticationParams => ({
  email: Faker.internet.email(),
  password: Faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: Faker.random.uuid(),
})
