<?php

namespace App\Http\Requests\Member;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class UpdateMemberRequest
 * @package App\Http\Requests\Member
 */
class UpdateMemberRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
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
            'first_name' => ['sometimes', 'string', 'max:255'],
            'last_name' => ['sometimes', 'string', 'max:255'],
            'position' => ['sometimes', 'string', 'max:255'],
            'avatar' => ['nullable', 'string', 'max:255'],
            'social_medias' => ['nullable', 'array'],
            'social_medias.*.title' => ['sometimes', 'string', 'max:255'],
            'social_medias.*.link' => ['sometimes', 'string', 'max:255'],
        ];
    }
}
