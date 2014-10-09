angular.module('sotos-angular-material-gridview').run(['$templateCache', function($templateCache) {
    $templateCache.put('templates/sotosListTreeItem.html',
        "    <div  class=\"sotos-list-item animlist \" ng-init=\"level=level+1\"\r\n          ng-repeat=\"item in items | orderBy:orderbyitem:reverse  | filter:{parent_id:parent} | filter:search\">\r\n<div  class=\"row-item level-{{ level }}\" layout=\"horizontal\" layout-align=\"start center\" >\r\n    <sotos-list-item  flex=\"{{  header.flex}}\" item=\"item\" ng-repeat=\"header in headers|filter:{show:true}\" name=\"header.id\">\r\n    </sotos-list-item>\r\n\r\n    <div ng-init=\"parent=item.id\" flex=\"20\" class=\" buttons\" layout=\"horizontal\"  layout-align=\"end\">\r\n        <material-button flex=\"50\" ng-show=\"showDelete\" ng-click=\"delete(item)\"  class=\"material-button-raised material-theme-red\"><i class=\"sgv-delete\"></i> Delete</material-button>\r\n        <material-button flex=\"50\" ng-show=\"showEdit\" ng-click=\"edit(item)\" class=\"material-button-raised material-theme-light-blue\"><i class=\"sgv-edit\"></i> Edit</material-button>\r\n    </div>\r\n\r\n\r\n</div >\r\n\r\n        <div class=\"child\" ng-include=\"'templates/sotosListTreeItem.html'\"></div>\r\n\r\n</div>\r\n");
}]);