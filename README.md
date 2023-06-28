# useBodyDirection

## Usage

```tsx
import useBodyDirection from "use-body-direction";
import { useEffect } from "react";

export default function App() {
  const direction = useBodyDirection();

  useEffect(() => {
    console.log(`The current body direction is '${directoin}'`);
  }, [direction]);
} 
```

## Use Body Direction Hook for React

An example to introduce the MutationObserver class, the original code is available in the src folder as a React Hook
which allows the user to detect any change in style property of the body element, especially when change is related to
direction style property.

## Listen to a DOM attribute change!

A method which introduces how to observe changes on an HTML DOM Element attribute.
Sometimes you need to Observe the change of an HTML DOM Element attribute, such as style.

## MutationObserver class

MutationObserver class handles a callback which called after a specific moment, the object which created by that is an
observer and receives an HTML Element and an attribute to listen.

```js
const observer = new MutationObserver(handleStyleChanged);
observer.observe(document.body, {
  attributeFilter: ["style"],
});
```

Here the point is detecting body style property changes.

## Callback

A callback is triggered when change is detected on filtered attribute, the first argument owns the target DOM element
here there is a need to check if the change was being repeated or a new in case of avoid from update UI or do a task
twice but useless!

```ts
let prevDirection;

function handleStyleChanged(mutations: MutationRecord[]) {
  const newDirection = (mutations[0].target as HTMLBodyElement).style.direction;

  if (newDirection !== prevDirection) {
    prevDirection = document.body.style.direction;
    // Update UI or do somthing!
  }
}
```

## Disconnecting Observer

Be aware of disconnecting created observer!
To prevent from the memory leak, disconnect the observer at the end of the work.

```js
observer.disconnect();
```