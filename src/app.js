import angular from 'angular';
import '@uirouter/angularjs';
import 'satellizer';
import 'angular-messages';

import Router from './config/routes';
import Auth from './config/satellizer';

import 'bulma';
import './scss/main.scss';

import BundlesShowCtrl from './controllers/bundles/show';
import BundlesNewCtrl from './controllers/bundles/new';
import AuthRegisterCtrl from './controllers/auth/register';
import AuthLoginCtrl from './controllers/auth/login';
import MainCtrl from './controllers/main';
import UsersShowCtrl from './controllers/users/show';
import UsersEditCtrl from './controllers/users/edit';

angular.module('bundleApi', ['ui.router', 'satellizer', 'ngMessages'])
  .config(Router)
  .config(Auth)
  .controller('BundlesShowCtrl', BundlesShowCtrl)
  .controller('BundlesNewCtrl', BundlesNewCtrl)
  .controller('AuthRegisterCtrl', AuthRegisterCtrl)
  .controller('AuthLoginCtrl', AuthLoginCtrl)
  .controller('MainCtrl', MainCtrl)
  .controller('UsersShowCtrl', UsersShowCtrl)
  .controller('UsersEditCtrl', UsersEditCtrl);
