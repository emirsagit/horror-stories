<?php

namespace App\Http\Controllers\TokenAuth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EmailVerificationNotificationController extends Controller
{
    /**
     * Send a new email verification notification.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        if ($request->user()->hasVerifiedEmail()) {
            return response()->json([
                'status' => 'The user has verified already'
            ]);
        }

        $request->user()->sendEmailVerificationNotification();

        return response()->json([
            'status' => 'verification-link-sent'
        ]);
    }
}
