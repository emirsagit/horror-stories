<?php

namespace App\Http\Controllers\TokenAuth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Resources\User\UserResource;

class LoginController extends Controller
{

    public function store(LoginRequest $request)
    {
        $user = $request->authenticate();

        $user->tokens() && $user->tokens()->delete();

        return $user->loginDetailsWithToken();
    }
}
