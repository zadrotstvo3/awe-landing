<?php


namespace App\Http\Requests\Article;

use App\Models\Article\Article;
use Illuminate\Foundation\Http\FormRequest;

/**
 * Class UpdateArticleRequest
 * @package App\Http\Request\Article
 */
class UpdateArticleRequest extends FormRequest
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
            'description' => ['sometimes', 'string', 'max:255'],
            'title' => ['sometimes', 'string', 'max:255'],
            'image' => ['sometimes', 'string', 'max:255'],
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
