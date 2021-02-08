export const createSagaInjector = (runSaga, rootSaga) => {
  const injectedSagas = new Map();
  const isInjected = (key) => injectedSagas.has(key);
  const injectSaga = (key, saga) => {
    if (isInjected(key)) {
      return;
    }
    const task = runSaga(saga);
    injectedSagas.set(key, task);
  };
  const ejectSaga = (key) => {
    const task = injectedSagas.get(key);
    if (task.isRunning()) {
      task.cancel();
    }
    injectedSagas.delete(key);
  };
  injectSaga("root", rootSaga);
  return { injectSaga, ejectSaga };
};
