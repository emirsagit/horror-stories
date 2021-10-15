<?php

namespace App\Http\Responses;

use App\Http\Resources\User\UserResource;
use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;

class LoginResponse implements LoginResponseContract
{
    public function toResponse($request)
    {
        return new UserResource($request->user());
    }
}
