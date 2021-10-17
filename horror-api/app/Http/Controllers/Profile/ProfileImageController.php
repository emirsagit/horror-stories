<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProfileImageController extends Controller
{
    public function store(Request $request)
    {
        $image = $request->user()->addMediaFromRequest('image')->toMediaCollection('avatars', 'avatars_folder');

        return ['original_image' => $image->getFullUrl(), 'thumbnail' => $image->getFullUrl('thumb')];
    }
}
