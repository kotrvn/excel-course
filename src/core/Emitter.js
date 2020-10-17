export class Emitter {
  constructor() {
    this.listeners = {}
  }

  // dispatch, fire, trigger
  //  Уведомляем слушателей если они есть
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    });
  }
  //  on, listen
  // Подсываемся на уведомлениея
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] = 
        this.listeners[event].filter(listener => listener !== fn)
    }
  }
}