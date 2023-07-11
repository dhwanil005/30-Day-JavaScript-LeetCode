class EventEmitter {
  constructor() {
    this.subscriptions = new Map();
    this.order = 0;
  }

  subscribe(eventName, callback) {
    if (!this.subscriptions.has(eventName)) {
      this.subscriptions.set(eventName, []);
    }
    const eventSubscriptions = this.subscriptions.get(eventName);
    const subscription = {
      callback,
      order: this.order++
    };
    eventSubscriptions.push(subscription);

    const unsubscribe = () => {
      const index = eventSubscriptions.indexOf(subscription);
      if (index !== -1) {
        eventSubscriptions.splice(index, 1);
      }
    };

    return { unsubscribe };
  }

  emit(eventName, args = []) {
    if (!this.subscriptions.has(eventName)) {
      return [];
    }
    const eventSubscriptions = this.subscriptions.get(eventName);
    const results = [];
    for (const subscription of eventSubscriptions) {
      results.push(subscription.callback(...args));
    }
    return results;
  }
}
