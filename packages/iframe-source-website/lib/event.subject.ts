// todo: move to app-shell
export class EventSubject<T, F extends (event: T) => void = (event: T) => void> {
  private subscribers = new Set<F>();

  emit(event: T): void {
    for (const fn of this.subscribers) {
      if (fn.call) {
        fn(event);
      }
    }
  }

  subscribe(fn: F): void {
    if (!this.subscribers.has(fn)) {
      this.subscribers.add(fn);
    }
  }

  unsubscribe(fn: F): void {
    if (this.subscribers.has(fn)) {
      this.subscribers.delete(fn);
    }
  }
}
