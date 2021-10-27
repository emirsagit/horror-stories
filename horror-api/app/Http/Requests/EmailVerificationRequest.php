<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class EmailVerificationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if (!hash_equals(
            (string) $this->route('hash'),
            sha1($this->user->getEmailForVerification())
        )) {
            return false;
        }

        return true;
    }


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'user' => User::find($this->route('id'))
        ]);
    }
}
