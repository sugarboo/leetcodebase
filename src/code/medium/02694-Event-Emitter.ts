type Callback = (...args: any[]) => any
interface Subscription {
  unsubscribe: () => void
}

export class EventEmitter {
  events: Record<string, Callback[]> = {}

  subscribe(eventName: string, callback: Callback): Subscription {
    if (!this.events[eventName]) {
      this.events[eventName] = [callback]
    } else {
      this.events[eventName].push(callback)
    }
    return {
      unsubscribe: () => {
        this.events[eventName] = this.events[eventName].filter(cb => cb !== callback)
      },
    }
  }

  emit(eventName: string, args: any[] = []): any[] {
    if (!this.events[eventName]) {
      return []
    }
    return this.events[eventName].map(callback => callback(...args))
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
