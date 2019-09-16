export class Time {
    public hour: number;
    public minute: number;
    public second: number;
    constructor(
        hour: number,
        minute: number,
        second: number
    ) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    public static NewTime(newTime: Time): Time {
        return new Time(newTime.hour, newTime.minute, newTime.second);
    }
    public static NewZeroTime(): Time {
        return new Time(0, 0, 0);
    }
    descreaseTime(): boolean {
        if (this.second > 0) {
            this.second--;
            return true;
        } else if (this.second === 0) {
            if (this.minute > 0) {
                this.minute--;
                this.second = 59;
                return true;
            } else {
                return false;
            }
        }
    }
    public toString = (): string => {
        return `${this.minute}:${this.second}`;
    }
}
