<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/login', 'UserController@login');
Route::post('/register', 'UserController@register');
Route::get('/logout', 'UserController@logout');
Route::get('me', 'UserController@me')->name('me');
Route::get('article/', 'ArticleController@index')->name('article.index');

//Articles Routes
Route::group(['prefix' => 'article', 'as' => 'article.', 'middleware' => 'auth:airlock'], function () {
    Route::post('/', 'ArticleController@store')->name('store');
    Route::get('/{article}', 'ArticleController@show')->name('show');
    Route::put('/{article}', 'ArticleController@update')->name('update');
    Route::delete('/{article}', 'ArticleController@delete')->name('delete');
});

Route::group(['prefix' => 'file', 'as' => 'file.', 'middleware' => 'auth:airlock'], function () {
    Route::post('/upload', 'FileController@upload')->name('upload');
});
