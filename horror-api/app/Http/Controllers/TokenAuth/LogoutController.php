<?php

namespace App\Http\Controllers\TokenAuth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LogoutController extends Controller
{
    public function destroy(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json(['success' => true]);
        // $user->tokens()->delete();
    }
}
