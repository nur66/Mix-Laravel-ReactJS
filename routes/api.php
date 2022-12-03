<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/get-all-product', [ProductController::class, 'get_all_products']);
Route::get('/get-edit-product/{id}', [ProductController::class, 'get_edit_product']);
Route::post('/add_product', [ProductController::class, 'add_product']);
Route::post('/update_product/{id}', [ProductController::class, 'update_product']);
Route::get('/delete_product/{id}', [ProductController::class, 'delete_product']);

