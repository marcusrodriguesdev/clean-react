export class InvalidCredendialError extends Error {
  constructor () {
    super('Crendenciais Inválidas')
    this.name = 'InvalidCredendialError'
  }
}
