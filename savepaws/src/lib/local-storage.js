class Storage {
  key = "savePaws";

  getInitialState() {
    const value = window.localStorage(this.key);

    if (!value) {
      window.localStorage.setItem(this.key, {});
      return {};
    }

    return JSON.parse(value);
  }

  getItem(key) {
    const initialState = this.getInitialState();
    return initialState[key] || null;
  }

  setItem(payload) {
    const initialState = this.getInitialState();

    window.localStorage.setItem(this.key, {
      ...initialState,
      ...payload,
    });
  }

  removeItem(key) {
    const initialState = this.getInitialState();

    if (!initialState[key]) {
      return false;
    }

    const {[key]: _, ...state} = initialState;
    window.localStorage.removeItem(this.key, state);

    return true;
  }
}

const LocalStorage = new Storage();

export {
  LocalStorage,
};
