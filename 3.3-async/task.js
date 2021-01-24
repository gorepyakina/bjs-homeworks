class AlarmClock {
    constructor(alarmCollection, timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Параметр id не передан');
        }
        if (this.alarmCollection.some(actualAlarm => actualAlarm.id === id)) {
            console.error('Ошибка. Будильник с таким id уже существует');
            return;
        }
        this.alarmCollection.push({id, time, callback});
    }

    removeClock(id) {
        if (this.alarmCollection.findIndex(currentAlarm => currentAlarm.id === id) !== -1) {
            this.alarmCollection = this.alarmCollection.filter(currentAlarm => currentAlarm.id !== id);
            return true;
        }
        return false;
    }

    getCurrentFormattedTime() {
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        return `${hours}:${minutes}`;
    }

    start() {
        let checkClock = (actualAlarm) => {
            if (this.getCurrentFormattedTime() === actualAlarm.time) {
                actualAlarm.callback();
            }   
            if (!this.timerId) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(checkClock), 1000);
            }
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(actualAlarm => console.log(`Будильник № ${actualAlarm.id} заведен на ${actualAlarm.time}`));
    }

    clearAlarms() {
        clearInterval(this.timerId);
        this.timerId = null;
        this.alarmCollection = [];
    }
}

let phoneAlarm = new AlarmClock();
phoneAlarm.addClock('09:00', () => console.log('Пора вставать'), 1);
phoneAlarm.addClock('09:01', () => { console.log('Давай, вставай уже!'); phoneAlarm.removeClock(2)}, 2);
// phoneAlarm.addClock('09:01', () => console.log('Иди умываться!'));
phoneAlarm.addClock('09:02', () => {
    console.log('Вставай, а то проспишь!');
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms();
},3);
phoneAlarm.addClock('09:05', () => console.log('Вставай, а то проспишь!'), 1);
phoneAlarm.printAlarms();
phoneAlarm.start();
