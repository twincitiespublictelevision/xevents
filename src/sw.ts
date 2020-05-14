import createSys from './server';

// @ts-ignore - Assigning to the SW Global
self.createXEventSystem = function createXEventSystem(name: string) {
  return createSys(name);
}

// @ts-ignore - Assigning to the SW Global
self.createXEventSystem.VERSION = VERSION;