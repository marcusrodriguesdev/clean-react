import { HttpPostClientSpy } from '@/data/test'
import { AccountModel } from '@/domain/models'
import { AddAccountParams } from '@/domain/useCases'
import { RemoteAddAccount } from './remote-add-account'
import { mockAddAccountParams } from '@/domain/test'
import * as Faker from 'faker'

type SutTypes = {
  sut: RemoteAddAccount
  httpPostClientSpy: HttpPostClientSpy<AddAccountParams, AccountModel>
}

const makeSUT = (url: string = Faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<AddAccountParams, AccountModel>()
  const sut = new RemoteAddAccount(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAddAccount', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = Faker.internet.url()
    const { sut, httpPostClientSpy } = makeSUT(url)
    await sut.add(mockAddAccountParams())
    expect(httpPostClientSpy.url).toBe(url)
  })

  test('Should call HttpPostClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSUT()
    const AddAccountParams = mockAddAccountParams()
    await sut.add(AddAccountParams)
    expect(httpPostClientSpy.body).toEqual(AddAccountParams)
  })
})
