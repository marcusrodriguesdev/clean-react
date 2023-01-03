import { AccountModel } from '../models'

export type AddAccountParams = {
  email: string
  password: string
  passwordConfirmation: string
}
export interface AddAccount {
  add: (params: AddAccountParams) => Promise<AccountModel>
}
