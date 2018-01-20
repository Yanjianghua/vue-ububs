<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Route::group(['namespace' => 'Auth'], function () {
    Route::get('/', 'LoginController@index');
    Route::get('/backend', 'LoginController@backendIndex');
    Route::post('/backend/login', 'LoginController@backendLogin');
    Route::post('/backend/logout', 'LoginController@backendLogout');
});
Route::group(['namespace' => 'Frontend'], function () {

});
Route::group(['namespace' => 'Backend', 'prefix' => 'backend', 'middleware' => 'auth.admin'], function () {
	Route::resource('admins', 'AdminController');
});