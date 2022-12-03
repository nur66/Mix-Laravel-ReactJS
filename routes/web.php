<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});

// Route::post('product/api/add_product', [ProductController::class, 'add_product']);
// Route::get('product/api/get-all-product', [ProductController::class, 'get_all_products']);
// Route::get('product/editproduct/api/get-edit-product/{id}', [ProductController::class, 'get_edit_product']);

Route::get('/phpinfo', function() {
    return phpinfo();
});

