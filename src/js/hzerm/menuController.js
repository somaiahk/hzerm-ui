'use strict';

angular.module('hzerm')

    .controller('MenuCtrl', ['$scope',
        function($scope, gridService) {

            $scope.menuItems = [{
                "id": 1,
                "name": "Person"
            }, {
                "id": 2,
                "name": "ROI"
            }, {
                "id": 3,
                "name": "Medication"
            }, {
                "id": 4,
                "name": "Admin"
            }];

            $scope.contentURL = 'templates';

            $scope.selectMenuItem = function(item) {
                switch (item.id) {
                    case '1':
                        $scope.contentURL = 'templates/hzerm/person.html';
                        break;
                    case '2':
                        $scope.contentURL = 'templates/hzerm/person.html';
                        break;
                    case '3':
                        $scope.contentURL = 'templates/hzerm/person.html';
                        break;
                    case '4':
                        $scope.contentURL = 'templates/hzerm/person.html';
                        break;
                    default:
                }

            };


        }
    ]);
