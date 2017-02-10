import { animationLoop } from '../'

let firstSubscription
let firstSubscriptionFrameCounter = 0

let secondSubscription
let secondSubscriptionFrameCounter = 0

const gameLoop = animationLoop()

gameLoop.start()
console.log('\ngame loop started\n')

setTimeout(() => {
    console.log('- first subscription starting\n')

    firstSubscription = gameLoop.subscribe(() => {
        firstSubscriptionFrameCounter++
        console.log(`  - first subscription: animation frame ${ firstSubscriptionFrameCounter } ready`)
    })
}, 50)

setTimeout(() => {
    console.log('\n- second subscription starting\n')

    secondSubscription = gameLoop.subscribe(() => {
        secondSubscriptionFrameCounter++
        console.log(`  - second subscription: animation frame ${ secondSubscriptionFrameCounter } ready`)
    })
}, 100)

setTimeout(() => {
    console.log('\n- first subscription stopping\n')
    firstSubscription.unsubscribe()
}, 150)

setTimeout(() => {
    console.log('\n- second subscription stopping\n')
    secondSubscription.unsubscribe()

    gameLoop.stop()
    console.log('game loop stopped\n')
}, 200)
