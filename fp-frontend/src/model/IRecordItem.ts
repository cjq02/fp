import { IRecord } from './IRecord'
import { ISummary } from './ISummary'

export interface IRecordItem {
  itemId: number,
  date: number,
  sync?: boolean,
  summary?: ISummary,
  records?: Array<IRecord>
}

export class RecordItem implements IRecordItem {
  itemId: number
  date: number
  sync?: boolean 
  summary?: ISummary
  records?: Array<IRecord>

  constructor() {

  }
}