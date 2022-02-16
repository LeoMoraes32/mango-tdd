const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const AccountModel = require.model('Account');

module.exports = () => {
  const router = new SignUpRouter();
  router.post('/signup', new ExpressRouterAdapter.adapt(router));
};

class ExpressRouterAdapter {
  static adapt(router) {
    return async (req, res) => {
      const httpRequest = {
        body: req.body
      };
      const httpResponse = router.route(httpRequest);
      res.status(httpResponse.statusCode).json(httpResponse.body);
    };
  }
}

// Presentation
class SignUpRouter {
  async route(httpRequest) {
    const { email, password, repeatPassword } = httpRequest.body;
    const user = new SignUpUseCase().signUp(email, password, repeatPassword);
    return {
      statusCode: 200,
      body: user
    };
  }
}

// Domain
class SignUpUseCase {
  async signUp(email, password, repeatPassword) {
    if (password === repeatPassword) {
      new AddAccountRepository().add(email, senha);
    }
  }
}

// Infra
class AddAccountRepository {
  async add(email, password) {
    const user = await AccountModel.create({ email, password });
    return user;
  }
}
