import DecodePasswordFromKeyTable from '../../infrastructure/web/DecodePasswordFromKeyTable'

export default class DecodePasswordFromKeyTableUseCase {
  _decodePasswordFromKeyTable: DecodePasswordFromKeyTable
  constructor () {
    this._decodePasswordFromKeyTable = new DecodePasswordFromKeyTable()
  }

  decode ({
    username,
    rawPassword,
    documentFrame
  }: {
    username: string
    rawPassword: string
    documentFrame: Document
  }) {
    return this._decodePasswordFromKeyTable.decode({
      username,
      rawPassword,
      documentFrame
    })
  }
}
