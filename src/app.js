import angular from 'angular';
import '@uirouter/angularjs';
import 'satellizer';
import 'angular-messages';
import 'filepicker-js';
import 'angular-filepicker/dist/angular_filepicker';

import Router from './config/routes';
import Auth from './config/satellizer';
import Upload from './config/filePicker';

import 'bulma';
import './scss/main.scss';

import BundlesShowCtrl from './controllers/bundles/show';
import BundlesNewCtrl from './controllers/bundles/new';
import AuthRegisterCtrl from './controllers/auth/register';
import AuthLoginCtrl from './controllers/auth/login';
import MainCtrl from './controllers/main';
import UsersShowCtrl from './controllers/users/show';
import UsersEditCtrl from './controllers/users/edit';
import filePicker from './directives/filePicker';
import googleMap from './directives/googleMap';
import bundleCard from './directives/bundleCard';

angular.module('bundleApi', [
  'ui.router',
  'satellizer',
  'ngMessages',
  'angular-filepicker'
])
  .config(Router)
  .config(Auth)
  .config(Upload)

  .controller('BundlesShowCtrl', BundlesShowCtrl)
  .controller('BundlesNewCtrl', BundlesNewCtrl)
  .controller('AuthRegisterCtrl', AuthRegisterCtrl)
  .controller('AuthLoginCtrl', AuthLoginCtrl)
  .controller('MainCtrl', MainCtrl)
  .controller('UsersShowCtrl', UsersShowCtrl)
  .controller('UsersEditCtrl', UsersEditCtrl)

  .directive('filePicker', filePicker)
  .directive('googleMap', googleMap)
  .directive('bundleCard', bundleCard);
