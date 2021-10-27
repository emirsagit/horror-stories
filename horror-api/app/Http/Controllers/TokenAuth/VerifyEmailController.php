<?php

namespace App\Http\Controllers\TokenAuth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\EmailVerificationRequest;

class VerifyEmailController extends Controller
{
    /**
     * Mark the authenticated user's email address as verified.
     *
     * @param  \Illuminate\Foundation\Auth\EmailVerificationRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function __invoke(EmailVerificationRequest $request)
    {
        if ($request->user->hasVerifiedEmail()) {
            return $this->redirect($request, 'verified');
        }

        if ($request->user->markEmailAsVerified()) {
            return $this->redirect($request, 'verified');
        }

        return $this->redirect($request, 'failed');
    }

    public function redirect($request, $status)
    {
        return Redirect::to($request->redirect_url . '?status=' . $status);
    }
}
