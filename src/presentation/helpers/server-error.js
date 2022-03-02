module.exports = class ServerError extends Error {
  constructor(paraName) {
    super('Internal error');
    this.name = 'ServerError';
  }
};
