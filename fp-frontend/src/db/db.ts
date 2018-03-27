import Dexie from 'dexie';
import { RecordItem } from '../model/IRecordItem';
import { IRecord } from '../model/IRecord';

export class fpDB extends Dexie {

  recordItem: Dexie.Table<RecordItem, number[]>;
  record: Dexie.Table<IRecord, number>;

  constructor() {

    super("fpDB");

    this.version(1).stores({
      recordItem: "[itemId+date], itemId, date"
    });
  }
}
