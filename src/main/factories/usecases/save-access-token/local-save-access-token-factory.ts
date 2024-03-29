import { LocalSaveAccessToken } from '@/data/useCases/save-access-token/local-save-access-token'
import { SaveAccessToken } from '@/domain/useCases'
import { makeLocalStorageAdapter } from '../../cache/local-storage-adapter-factory'

export const makeLocalSaveAccessToken = (): SaveAccessToken => {
  return new LocalSaveAccessToken(makeLocalStorageAdapter())
}
