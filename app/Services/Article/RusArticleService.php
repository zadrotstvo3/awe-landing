<?php

namespace App\Services\Article;

use App\Models\Article\Localisation\RusArticle;

/**
 * Class RusArticleService
 * @package App\Services\Article
 */
class RusArticleService
{
    /**
     * @var RusArticle
     */
    private $model;

    /**
     * EngArticleService constructor.
     * @param RusArticle $model
     */
    public function __construct(RusArticle $model)
    {
        $this->model = $model;
    }

    public function create(array $data)
    {
        return $this->model->create($data);
    }

    /**
     * @param array $data
     * @param RusArticle $instance
     * @return bool
     */
    public function updateInstance(array $data, RusArticle $instance): bool
    {
        return $instance->update($data);
    }
}
