<?php


namespace App\Services\Article;

use App\Models\Article\Localisation\UkrArticle;

/**
 * Class UkrArticleService
 * @package App\Services\Article
 */
class UkrArticleService
{
    /**
     * @var UkrArticle
     */
    private $model;

    /**
     * EngArticleService constructor.
     * @param UkrArticle $model
     */
    public function __construct(UkrArticle $model)
    {
        $this->model = $model;
    }

    public function create(array $data)
    {
        return $this->model->updateOrCreate(['article_id' => $data['article_id']], $data);
    }

    /**
     * @param array $data
     * @param UkrArticle $instance
     * @return bool
     */
    public function updateInstance(array $data, UkrArticle $instance): bool
    {
        return $instance->update($data);
    }
}
