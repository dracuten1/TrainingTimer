export class TimeConvertter {
    public static TimeStringToInt(str: string): number {
        let result = 0;
        const timeArr = str.split(':');
        timeArr.forEach((t) => {
            result = +t + result * 60;
        });
        return result;
    }
    public static IntToTimeString(time: number): string {
        let result = '';
        let retain = time;
        if (retain / 3600 > 0) {
            result = (retain / 3600).toString();
            retain = retain % 3600;
        }
        if (retain / 3600 > 0) {
            result = (retain / 3600).toString() + ':';
            retain = retain % 3600;
        }
        result = result + (retain / 60).toString() + ':';
        result = (retain % 60).toString();
        return result;
    }
}
