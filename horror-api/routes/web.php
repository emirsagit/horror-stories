<?php

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

$limiter = config('fortify.limiters.login');

Route::post('/login', [AuthenticatedSessionController::class, 'store'])
    ->middleware(array_filter([
        'guest:' . config('fortify.guard'),
        $limiter ? 'throttle:' . $limiter : null,
    ]));

Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout');


require __DIR__ . '/auth.php';
