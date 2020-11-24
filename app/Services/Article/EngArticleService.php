<?php

namespace App\Services\Article;

use App\Models\Article\Localisation\EngArticle;

/**
 * Class EngArticleService
 * @package App\Services\Article
 */
class EngArticleService
{
    /**
     * @var EngArticle
     */
    private $model;

    /**
     * EngArticleService constructor.
     * @param EngArticle $model
     */
    public function __construct(EngArticle $model)
    {
        $this->model = $model;
    }

    public function create(array $data)
    {
        return $this->model->create($data);
    }

    /**
     * @param array $data
     * @param EngArticle $instance
     * @return bool
     */
    public function updateInstance(array $data, EngArticle $instance): bool
    {
        return $instance->update($data);
    }
}
