# RxJS Animation Loop

This module provides a game / animation loop based upon [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame).

## Installation and Usage

```sh
npm install rxjs-animation-loop
```

```javascript
import { animationLoop } from 'rxjs-animation-loop'

const gameLoop = animationLoop()

gameLoop.start()

const gameLoopSubscription = gameLoop.subscribe(() => {
    // code to perform each animation frame
})

// ... several levels later ...

gameLoopSubscription.unsubscribe()

gameLoop.stop()
```
