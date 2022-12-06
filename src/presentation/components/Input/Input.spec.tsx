import React from 'react'
import { render } from '@testing-library/react'
import Input from './Input'
import Context from '@/presentation/context/form/FormContext'

const makeSut = (fieldName: string): any => {
  const sut = render(
    <Context.Provider value={{ state: {} }}>
      <Input name={fieldName} />
    </Context.Provider>
  )
  return sut
}

describe('Input Component', () => {
  test('Should begin with readOnly', () => {
    const sut = makeSut('field')
    const input = sut.getByTestId('field') as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })
})
