class EventEmitter {
  constructor() {
    this.subscriptions = new Map();
    this.order = 0;
  }

  subscribe(eventName, callback) {
    let eventSubscriptions = this.subscriptions.get(eventName);
    if (!eventSubscriptions) {
      eventSubscriptions = new Set();
      this.subscriptions.set(eventName, eventSubscriptions);
    }
    const subscription = {
      callback,
      order: this.order++
    };
    eventSubscriptions.add(subscription);

    const unsubscribe = () => {
      eventSubscriptions.delete(subscription);
    };

    return { unsubscribe };
  }

  emit(eventName, args = []) {
    const eventSubscriptions = this.subscriptions.get(eventName);
    if (!eventSubscriptions) {
      return [];
    }
    const results = [];
    for (const subscription of eventSubscriptions) {
      results.push(subscription.callback(...args));
    }
    return results;
  }
}
