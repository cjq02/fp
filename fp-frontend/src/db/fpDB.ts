import Dexie from 'dexie';
import { RecordItem } from '../model/IRecordItem';
import { IRecord } from '../model/IRecord';

export class fpDB extends Dexie {

  recordItem: Dexie.Table<RecordItem, any[]>;

  constructor() {

    super("fpDB");

    this.version(1).stores({
      recordItem: "[itemId+date], itemId, date"
    });
  }

  public async generateTestData() {
    let count = await this.recordItem.count();
    // console.log(count)
    if (count > 0) {
      return;
    }
    let json = [{"itemId":3001,"date":"2018-03-25","sync":false,"summary":{"averageWeight":12,"averageRep":11,"totalWeight":12,"totalReps":11,"totalTime":4},"records":[{"set":1,"time":4,"weight":12,"rep":11},{"set":2,"time":1,"weight":12,"rep":11},{"set":3,"time":2,"weight":12,"rep":11},{"set":4,"time":2,"weight":12,"rep":11}]},{"itemId":3002,"date":"2018-03-25","sync":false,"summary":{"averageWeight":10,"averageRep":10,"totalWeight":10,"totalReps":10,"totalTime":3},"records":[{"set":1,"time":3,"weight":10,"rep":10},{"set":2,"time":0,"weight":10,"rep":10},{"set":3,"time":1,"weight":10,"rep":10},{"set":4,"time":0,"weight":10,"rep":10},{"set":5,"time":1,"weight":10,"rep":10},{"set":6,"time":8,"weight":12,"rep":10}]},{"itemId":3003,"date":"2018-03-25","sync":false,"summary":{"averageWeight":14,"averageRep":12,"totalWeight":14,"totalReps":12,"totalTime":3},"records":[{"set":1,"time":3,"weight":14,"rep":12},{"set":2,"time":2,"weight":14,"rep":12},{"set":3,"time":2,"weight":14,"rep":12},{"set":4,"time":1,"weight":14,"rep":12}]},{"itemId":3007,"date":"2018-03-25","sync":false,"summary":{"averageWeight":11,"averageRep":8,"totalWeight":11,"totalReps":8,"totalTime":4},"records":[{"set":1,"time":4,"weight":11,"rep":8},{"set":2,"time":0,"weight":11,"rep":8},{"set":3,"time":0,"weight":11,"rep":8},{"set":4,"time":0,"weight":11,"rep":8}]},{"itemId":3008,"date":"2018-03-25","sync":false,"summary":{"averageWeight":11,"averageRep":11,"totalWeight":11,"totalReps":11,"totalTime":3},"records":[{"set":1,"time":3,"weight":11,"rep":11},{"set":2,"time":0,"weight":11,"rep":11},{"set":3,"time":0,"weight":11,"rep":11}]},{"itemId":3001,"date":"2018-03-27","sync":false,"summary":{"averageWeight":12,"averageRep":8,"totalWeight":12,"totalReps":8,"totalTime":2},"records":[{"set":1,"time":2,"weight":12,"rep":8},{"set":2,"time":0,"weight":12,"rep":8},{"set":3,"time":1,"weight":12,"rep":8},{"set":4,"time":0,"weight":12,"rep":8}]},{"itemId":3002,"date":"2018-03-27","sync":false,"summary":{"averageWeight":12,"averageRep":10,"totalWeight":12,"totalReps":10,"totalTime":3},"records":[{"set":1,"time":3,"weight":12,"rep":10},{"set":2,"time":0,"weight":12,"rep":10},{"set":3,"time":0,"weight":12,"rep":10},{"set":4,"time":0,"weight":12,"rep":10}]},{"itemId":3004,"date":"2018-03-27","sync":false,"summary":{"averageWeight":0,"averageRep":12,"totalWeight":0,"totalReps":12,"totalTime":4},"records":[{"set":1,"time":4,"weight":0,"rep":12},{"set":2,"time":0,"weight":0,"rep":12},{"set":3,"time":1,"weight":0,"rep":12},{"set":4,"time":0,"weight":0,"rep":12},{"set":5,"time":0,"weight":0,"rep":12}]},{"itemId":3006,"date":"2018-03-27","sync":false,"summary":{"averageWeight":12,"averageRep":10,"totalWeight":12,"totalReps":10,"totalTime":3},"records":[{"set":1,"time":3,"weight":12,"rep":10},{"set":2,"time":0,"weight":12,"rep":10},{"set":3,"time":0,"weight":12,"rep":10},{"set":4,"time":0,"weight":12,"rep":10}]},{"itemId":3001,"date":"2018-03-29","sync":false,"summary":{"averageWeight":10,"averageRep":10,"totalWeight":10,"totalReps":10,"totalTime":2},"records":[{"set":1,"time":2,"weight":10,"rep":10},{"set":2,"time":0,"weight":10,"rep":10},{"set":3,"time":1,"weight":10,"rep":10},{"set":4,"time":0,"weight":10,"rep":10}]},{"itemId":3003,"date":"2018-03-29","sync":false,"summary":{"averageWeight":10,"averageRep":10,"totalWeight":10,"totalReps":10,"totalTime":1},"records":[{"set":1,"time":1,"weight":10,"rep":10},{"set":2,"time":1,"weight":10,"rep":10},{"set":3,"time":0,"weight":10,"rep":10},{"set":4,"time":0,"weight":10,"rep":10}]},{"itemId":3005,"date":"2018-03-29","sync":false,"summary":{"averageWeight":10,"averageRep":10,"totalWeight":10,"totalReps":10,"totalTime":1},"records":[{"set":1,"time":1,"weight":10,"rep":10},{"set":2,"time":1,"weight":10,"rep":10},{"set":3,"time":0,"weight":10,"rep":10},{"set":4,"time":0,"weight":10,"rep":10}]},{"itemId":3008,"date":"2018-03-29","sync":false,"summary":{"averageWeight":10,"averageRep":10,"totalWeight":10,"totalReps":10,"totalTime":2},"records":[{"set":1,"time":2,"weight":10,"rep":10},{"set":2,"time":0,"weight":10,"rep":10},{"set":3,"time":0,"weight":10,"rep":10},{"set":4,"time":0,"weight":10,"rep":10}]},{"itemId":3001,"date":"2018-03-31","sync":false,"summary":{"averageWeight":10,"averageRep":10,"totalWeight":10,"totalReps":10,"totalTime":2},"records":[{"set":1,"time":2,"weight":10,"rep":10},{"set":2,"time":0,"weight":10,"rep":10},{"set":3,"time":0,"weight":10,"rep":10},{"set":4,"time":1,"weight":10,"rep":10}]},{"itemId":3002,"date":"2018-03-31","sync":false,"summary":{"averageWeight":8,"averageRep":8,"totalWeight":8,"totalReps":8,"totalTime":1},"records":[{"set":1,"time":1,"weight":8,"rep":8},{"set":2,"time":1,"weight":8,"rep":8},{"set":3,"time":0,"weight":8,"rep":8},{"set":4,"time":0,"weight":8,"rep":8}]},{"itemId":3003,"date":"2018-03-31","sync":false,"summary":{"averageWeight":10,"averageRep":10,"totalWeight":10,"totalReps":10,"totalTime":2},"records":[{"set":1,"time":2,"weight":10,"rep":10},{"set":2,"time":0,"weight":10,"rep":10},{"set":3,"time":0,"weight":10,"rep":10},{"set":4,"time":0,"weight":10,"rep":10},{"set":5,"time":0,"weight":10,"rep":10},{"set":6,"time":1,"weight":10,"rep":10}]},{"itemId":3001,"date":"2018-04-01","sync":false,"summary":{"averageWeight":50,"averageRep":12,"totalWeight":50,"totalReps":12,"totalTime":4},"records":[{"set":1,"time":4,"weight":50,"rep":12},{"set":2,"time":2,"weight":50,"rep":12},{"set":3,"time":1,"weight":50,"rep":12},{"set":4,"time":5,"weight":60,"rep":8},{"set":5,"time":3,"weight":60,"rep":8}]},{"itemId":3002,"date":"2018-04-01","sync":false,"summary":{"averageWeight":20,"averageRep":8,"totalWeight":20,"totalReps":8,"totalTime":3},"records":[{"set":1,"time":3,"weight":20,"rep":8},{"set":2,"time":1,"weight":20,"rep":8},{"set":3,"time":2,"weight":20,"rep":12},{"set":4,"time":1,"weight":20,"rep":12},{"set":5,"time":13,"weight":18,"rep":8}]},{"itemId":3004,"date":"2018-04-01","sync":false,"summary":{"averageWeight":0,"averageRep":12,"totalWeight":0,"totalReps":12,"totalTime":4},"records":[{"set":1,"time":4,"weight":0,"rep":12},{"set":2,"time":1,"weight":0,"rep":12},{"set":3,"time":1,"weight":0,"rep":12},{"set":4,"time":3,"weight":0,"rep":8},{"set":5,"time":3,"weight":0,"rep":8}]}]
    
    let lastKey = await this.recordItem.bulkAdd(json);
    console.log(lastKey)
  }
}