class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback) {
        if (time === undefined || callback === undefined) {
            throw new Error('Отсутствуют обязательные аргументы')
        }
        for (let i = 0; a < this.alarmCollection.length; i++) {
            if (this.alarmCollection[i].time === time) {
                console.warn('Уже присутствует звонок на это же время')
                let newAlarm = { time, canCall: true, callback };
                this.alarmCollection.push(newAlarm);
            }
        }
    }
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(item => item.time === time)
    }
    getCurrentFormattedTime() {
        let data = new Data;
        return data.toLocaleTimeString().slice(0, -3);
    }
    start() {
        if (this.intervalId != null) {
            return
        }
        this.intervalId = setInterval(() => this.alarmCollection.forEach(element => {
            if (element.canCall === true && element.time === this.getCurrentFormattedTime()) {
                canCall = false;
                callback();
            }
        }), 1000)
    }
    stop() {
        clearInterval(intervalId);
        intervalId = null;
    }
    resetAllCalls() {
        this.alarmCollection.forEach(item => item.canCall = true)
    }
    clearAlarms() {
        stop()
        this.alarmCollection = [];
    }
}