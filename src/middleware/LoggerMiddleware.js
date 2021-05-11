export const LoggerMiddleWare = store => {
  return next => {
    return action => {
      console.log('middleware ran.');
      return next(action);
    };
  };
};
