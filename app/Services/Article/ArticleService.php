<?php

namespace App\Services\Article;

use App\Models\Article\Article;
use App\Models\Article\Localisation\EngArticle;
use App\Models\Article\Localisation\RusArticle;
use App\Models\Article\Localisation\UkrArticle;
use App\User;
use Exception;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

/**
 * Class ArticleService
 * @package App\Services\Article
 */
class ArticleService
{
    /**
     * @var Article
     */
    private $model;

    /**
     * @var string[]
     */
    private $article_services = [
        Article::LANGUAGES[0] => UkrArticleService::class,
        Article::LANGUAGES[1] => RusArticleService::class,
        Article::LANGUAGES[2] => EngArticleService::class
    ];

    /**
     * @var string[]
     */
    private $article_models = [
        Article::LANGUAGES[0] => UkrArticle::class,
        Article::LANGUAGES[1] => RusArticle::class,
        Article::LANGUAGES[2] => EngArticle::class
    ];

    /**
     * ArticleService constructor.
     * @param Article $model
     */
    public function __construct(Article $model)
    {
        $this->model = $model;
    }

    /**
     * @param array $data
     * @param User $user
     * @return Article
     */
    public function create(array $data, User $user): Article
    {
        $article = $user->articles()->firstOrCreate(['id' => $data['article_id']], $data);

        $languageService = $this->prepareLanguageService($data);

        $data['article_id'] = $article->id;

        $languageService->create($data);

        return $article->load(['urkArticle', 'rusArticle', 'engArticle']);
    }

    /**
     * @param int $article_id
     * @param array $data
     * @param User $user
     * @return Article
     */
    public function update(int $article_id, array $data, User $user): Article
    {
        $instance = $this->getById($article_id);
        $instance->update($data);
        $languageModel = $this->prepareLanguageModel($data);
        $languageArticle = $languageModel->where('article_id', $instance->id)->first();
        if ($languageArticle) {
            $languageArticle->update($data);
            return $instance->load(['urkArticle', 'rusArticle', 'engArticle']);
        }
        throw new BadRequestHttpException('The selected language for article does not exist. Please first create');
    }

    /**
     * @param int $article_id
     * @return Article
     */
    public function getById(int $article_id): Article
    {
        return $this->model->findOrFail($article_id);
    }

    /**
     * @param int $limit
     * @param User $user
     * @return LengthAwarePaginator
     */
    public function getList(int $limit, User $user): LengthAwarePaginator
    {
        return $this->model->with(['urkArticle', 'rusArticle', 'engArticle'])->paginate($limit);
    }

    /**
     * @param int $article_id
     * @param array $relations
     * @return Article
     */
    public function show(int $article_id, array $relations): Article
    {
        return $this->model->with($relations)->findOrFail($article_id);
    }

    /**
     * @param int $article_id
     * @return bool
     * @throws Exception
     */
    public function delete(int $article_id): bool
    {
        $instance = $this->getById($article_id);
        $instance->delete();
        return true;
    }

    /**
     * @param array $data
     * @return Application|mixed
     */
    private function prepareLanguageService(array $data)
    {
        $service = app($this->article_services[$data['language']]);
        if ($service) {
            return $service;
        }
        throw new BadRequestHttpException('Service does not exist');
    }


    /**
     * @param array $data
     * @return Application|mixed
     */
    private function prepareLanguageModel(array $data)
    {
        $service = app($this->article_models[$data['language']]);
        if ($service) {
            return $service;
        }
        throw new BadRequestHttpException('Service does not exist');
    }
}
