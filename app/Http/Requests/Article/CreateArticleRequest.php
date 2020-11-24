<?php

namespace App\Http\Requests\Article;

use App\Models\Article\Article;
use Illuminate\Foundation\Http\FormRequest;

/**
 * Class CreateArticleRequest
 * @package App\Http\Request\Article
 */
class CreateArticleRequest extends FormRequest
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
            'description' => ['required', 'string', 'max:2555'],
            'title' => ['required', 'string', 'max:255'],
            'image' => ['nullable', 'string', 'max:255'],
            'article_id' => ['nullable', 'integer', 'exists:articles,id'],
            'language' => [
                'required',
                'string',
                'max:255',
                function ($attribute, $value, callable $fail) {
                    if (!in_array($value, Article::LANGUAGES)) {
                        $fail('The Language should be ' . implode(' ', Article::LANGUAGES));
                    }
                }],
        ];
    }
}
