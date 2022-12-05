import { FieldValidationSpy } from '@/validation/test'
import { ValidationComposite } from './validation-composite'
import faker from 'faker'

type SutTypes = {
  sut: ValidationComposite
  fieldValidationSpies: FieldValidationSpy[]
}

const makeSut = (): SutTypes => {
  const fieldValidationSpies = [
    new FieldValidationSpy('any_field'),
    new FieldValidationSpy('any_field')
  ]
  const sut = ValidationComposite.build(fieldValidationSpies)

  return {
    sut,
    fieldValidationSpies
  }
}

describe('ValidationComposite', () => {
  it('Should return error if any validation fails', () => {
    const { sut, fieldValidationSpies } = makeSut()
    const errorMessage = faker.random.words()
    fieldValidationSpies[0].error = new Error(errorMessage)
    fieldValidationSpies[1].error = new Error(faker.random.words())
    const error = sut.validate('any_field', faker.random.words())
    expect(error).toBe(errorMessage)
  })

  it('Should return error if any validation fails', () => {
    const { sut } = makeSut()
    const error = sut.validate('any_field', faker.random.words())
    expect(error).toBeFalsy()
  })
})
