import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { animationFrame } from 'rxjs/scheduler/animationFrame'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/never'
import 'rxjs/add/operator/repeat'
import 'rxjs/add/operator/switchMap'

const animationLoop = () => {
    const frame = Observable
        .of(null, animationFrame)
        .repeat()

    const noop = Observable.never()

    const loop = new BehaviorSubject(false)
        .switchMap((active) => active ? frame : noop)

    return {
        start() {
            loop.next(true)
        },

        stop() {
            loop.next(false)
        },

        subscribe(observer) {
            return loop.subscribe(observer)
        }
    }
}

export { animationLoop }
