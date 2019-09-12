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
        let result: '';
        let retain = time;
        let redudancy = 0;
        do {
            redudancy = retain % 60;
        } while (true)
        {

        }
        return '0';
    }
}