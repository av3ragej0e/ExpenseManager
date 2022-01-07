<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers;


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

Route::get('/', function () {
    // return view('welcome');
    return view('auth.login');
});





Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('auth_check','App\Http\Controllers\HomeController@authCheck');
Route::get('roles','App\Http\Controllers\RoleController@index');
Route::get('user','App\Http\Controllers\UserController@index');
Route::get('expense','App\Http\Controllers\ExpenseController@index');
Route::get('expense_category','App\Http\Controllers\ExpenseCategoryController@index');
Route::post('add_user','App\Http\Controllers\UserController@addUser');
Route::post('add_role','App\Http\Controllers\RoleController@addRole');
Route::put('update_role','App\Http\Controllers\RoleController@updateRole');
Route::put('update_user','App\Http\Controllers\UserController@updateUser');
Route::post('delete_role','App\Http\Controllers\RoleController@deleteRole');
Route::post('delete_user','App\Http\Controllers\UserController@deleteUser');
Route::post('add_expense','App\Http\Controllers\ExpenseController@addExpense');
Route::put('update_expense','App\Http\Controllers\ExpenseController@updateExpense');
Route::post('delete_expense','App\Http\Controllers\ExpenseController@deleteExpense');
Route::post('add_expenseCategory','App\Http\Controllers\ExpenseCategoryController@addExpenseCategory');
Route::put('update_expenseCategory','App\Http\Controllers\ExpenseCategoryController@updateExpenseCategory');
Route::post('delete_expenseCategory','App\Http\Controllers\ExpenseCategoryController@deleteExpenseCategory');
// Route::get('chart','App\Http\Controllers\ExpenseController@chart');
Route::get('/{any}', [App\Http\Controllers\HomeController::class, 'index'])->name('base')->where('any', '.*');






