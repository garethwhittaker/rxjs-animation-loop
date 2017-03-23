import test from 'ava'
import sinon from 'sinon'
import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { animationLoop } from '../dist'

let nextSpy
let gameLoop

test.beforeEach(t => {
    nextSpy = sinon.spy(BehaviorSubject.prototype, 'next')

    gameLoop = animationLoop()
})

test.afterEach(t => {
    nextSpy.restore()
})

test('start', t => {
    gameLoop.start()

    t.true(nextSpy.calledOnce)
    t.true(nextSpy.calledWithExactly(true))
})

test('stop', t => {
    gameLoop.stop()

    t.true(nextSpy.calledOnce)
    t.true(nextSpy.calledWithExactly(false))
})

test('subscribe', t => {
    const observerStub = sinon.stub()
    const subscriptionStub = sinon.stub()

    const subscribeStub = sinon.stub(Observable.prototype, 'subscribe').returns(subscriptionStub)

    const gameLoopSubscription = gameLoop.subscribe(observerStub)

    t.true(subscribeStub.calledOnce)
    t.true(subscribeStub.calledWithExactly(observerStub))

    t.is(gameLoopSubscription, subscriptionStub)

    subscribeStub.restore()
})
