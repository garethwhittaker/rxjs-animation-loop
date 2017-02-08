import { animationLoop } from '../'

const gameLoop = animationLoop()

let subscriptionFrameCounter = 0

gameLoop.start()
console.log('game loop started\n')

console.log('- subscription starting\n')

const gameLoopSubscription = gameLoop.subscribe(() => {
    subscriptionFrameCounter++
    console.log(`  - subscription: animation frame ${ subscriptionFrameCounter } ready`)
})

setTimeout(() => {
    gameLoop.stop()
    console.log('\ngame loop paused after 100ms\n')
}, 100)

setTimeout(() => {
    gameLoop.start()
    console.log('game loop re-started after 200ms\n')
}, 200)

setTimeout(() => {
    console.log('\n- subscription stopping\n')
    gameLoopSubscription.unsubscribe()

    gameLoop.stop()
    console.log('game loop stopped after 300ms\n')
}, 300)
