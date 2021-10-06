<?php

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

Route::middleware('auth:sanctum')->group(function () {
    // Authentication...
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
    // Password Reset...

    // $twoFactorLimiter = config('fortify.limiters.two-factor');
    // $verificationLimiter = config('fortify.limiters.verification', '6,1');
    // if (Features::enabled(Features::resetPasswords())) {
    //     if ($enableViews) {
    //         Route::get('/forgot-password', [PasswordResetLinkController::class, 'create'])
    //             ->middleware(['guest:' . config('fortify.guard')])
    //             ->name('password.request');

    //         Route::get('/reset-password/{token}', [NewPasswordController::class, 'create'])
    //             ->middleware(['guest:' . config('fortify.guard')])
    //             ->name('password.reset');
    //     }

    //     Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
    //         ->middleware(['guest:' . config('fortify.guard')])
    //         ->name('password.email');

    //     Route::post('/reset-password', [NewPasswordController::class, 'store'])
    //         ->middleware(['guest:' . config('fortify.guard')])
    //         ->name('password.update');
    // }

    // // Registration...
    // if (Features::enabled(Features::registration())) {
    //     if ($enableViews) {
    //         Route::get('/register', [RegisteredUserController::class, 'create'])
    //             ->middleware(['guest:' . config('fortify.guard')])
    //             ->name('register');
    //     }

    //     Route::post('/register', [RegisteredUserController::class, 'store'])
    //         ->middleware(['guest:' . config('fortify.guard')]);
    // }

    // // Email Verification...
    // if (Features::enabled(Features::emailVerification())) {
    //     if ($enableViews) {
    //         Route::get('/email/verify', [EmailVerificationPromptController::class, '__invoke'])
    //             ->middleware(['auth:' . config('fortify.guard')])
    //             ->name('verification.notice');
    //     }

    //     Route::get('/email/verify/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
    //         ->middleware(['auth:' . config('fortify.guard'), 'signed', 'throttle:' . $verificationLimiter])
    //         ->name('verification.verify');

    //     Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
    //         ->middleware(['auth:' . config('fortify.guard'), 'throttle:' . $verificationLimiter])
    //         ->name('verification.send');
    // }

    // // Profile Information...
    // if (Features::enabled(Features::updateProfileInformation())) {
    //     Route::put('/user/profile-information', [ProfileInformationController::class, 'update'])
    //         ->middleware(['auth:' . config('fortify.guard')])
    //         ->name('user-profile-information.update');
    // }

    // // Passwords...
    // if (Features::enabled(Features::updatePasswords())) {
    //     Route::put('/user/password', [PasswordController::class, 'update'])
    //         ->middleware(['auth:' . config('fortify.guard')])
    //         ->name('user-password.update');
    // }

    // // Password Confirmation...
    // if ($enableViews) {
    //     Route::get('/user/confirm-password', [ConfirmablePasswordController::class, 'show'])
    //         ->middleware(['auth:' . config('fortify.guard')])
    //         ->name('password.confirm');
    // }

    // Route::get('/user/confirmed-password-status', [ConfirmedPasswordStatusController::class, 'show'])
    //     ->middleware(['auth:' . config('fortify.guard')])
    //     ->name('password.confirmation');

    // Route::post('/user/confirm-password', [ConfirmablePasswordController::class, 'store'])
    //     ->middleware(['auth:' . config('fortify.guard')]);

    // // Two Factor Authentication...
    // if (Features::enabled(Features::twoFactorAuthentication())) {
    //     if ($enableViews) {
    //         Route::get('/two-factor-challenge', [TwoFactorAuthenticatedSessionController::class, 'create'])
    //             ->middleware(['guest:' . config('fortify.guard')])
    //             ->name('two-factor.login');
    //     }

    //     Route::post('/two-factor-challenge', [TwoFactorAuthenticatedSessionController::class, 'store'])
    //         ->middleware(array_filter([
    //             'guest:' . config('fortify.guard'),
    //             $twoFactorLimiter ? 'throttle:' . $twoFactorLimiter : null,
    //         ]));

    //     $twoFactorMiddleware = Features::optionEnabled(Features::twoFactorAuthentication(), 'confirmPassword')
    //         ? ['auth:' . config('fortify.guard'), 'password.confirm']
    //         : ['auth:' . config('fortify.guard')];

    //     Route::post('/user/two-factor-authentication', [TwoFactorAuthenticationController::class, 'store'])
    //         ->middleware($twoFactorMiddleware)
    //         ->name('two-factor.enable');

    //     Route::delete('/user/two-factor-authentication', [TwoFactorAuthenticationController::class, 'destroy'])
    //         ->middleware($twoFactorMiddleware)
    //         ->name('two-factor.disable');

    //     Route::get('/user/two-factor-qr-code', [TwoFactorQrCodeController::class, 'show'])
    //         ->middleware($twoFactorMiddleware)
    //         ->name('two-factor.qr-code');

    //     Route::get('/user/two-factor-recovery-codes', [RecoveryCodeController::class, 'index'])
    //         ->middleware($twoFactorMiddleware)
    //         ->name('two-factor.recovery-codes');

    //     Route::post('/user/two-factor-recovery-codes', [RecoveryCodeController::class, 'store'])
    //         ->middleware($twoFactorMiddleware);
    // }