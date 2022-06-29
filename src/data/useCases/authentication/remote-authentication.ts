import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { InvalidCredendialError } from '@/domain/error/invalid-credentials-error'
import { UnexpectedError } from '@/domain/error/unexpected-error'
import { AccountModel } from '@/domain/models/account-model'
import { Authentication, AuthenticationParams } from '@/domain/useCases/authentication'

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
  ) {}

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({ url: this.url, body: params })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.unathorized: throw new InvalidCredendialError()
      default: throw new UnexpectedError()
    }
  }
}
