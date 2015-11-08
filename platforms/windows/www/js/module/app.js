"use strict";

var app = angular.module('MyApp', ['MyCtrls']);

app.run(function($document){

    $document.on('deviceready', function(){

        console. log("\n\ndeviceready");

    });
});