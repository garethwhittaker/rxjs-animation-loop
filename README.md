# RxJS Animation Loop

This module provides a game / animation loop based upon [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame).

## Installation and Usage

```sh
npm install rxjs-animation-loop
```

*Note: [rxjs](https://github.com/ReactiveX/rxjs) (5.x) is a [peer dependency](https://nodejs.org/en/blog/npm/peer-dependencies) of this package.*

```javascript
import animationLoop from 'rxjs-animation-loop'

const gameLoop = animationLoop()

gameLoop.start()

const gameLoopSubscription = gameLoop.subscribe(() => {
    // code to perform each animation frame
})

// several levels later ...

gameLoopSubscription.unsubscribe()

gameLoop.stop()
```

Further examples are provided within the `src` directory. View the output of these with:

```sh
npm run example-multiple-subscribers
npm run example-pausing-game-loop
```
