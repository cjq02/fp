export class DateTimeUtil {

  static convertToMinutes(totalTime: number) {
    let totalMinutes = 0;
    let restSeconds = 0;

    if (totalTime >0) {
      totalMinutes = Math.floor(totalTime / 60);
      restSeconds = totalTime - totalMinutes * 60;
    }

    return `${totalMinutes} m ${restSeconds} s`
  }
}