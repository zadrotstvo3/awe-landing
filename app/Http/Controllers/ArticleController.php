<?php

namespace App\Http\Controllers;

use App\Http\Request\Article\CreateArticleRequest;
use App\Http\Request\Article\UpdateArticleRequest;
use App\Services\Article\ArticleService;
use App\User;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Class ArticleController
 * @package App\Http\Controllers
 */
class ArticleController extends Controller
{
    /**
     * @var ArticleService
     */
    private $articleService;

    /**
     * ArticleController constructor.
     * @param ArticleService $articleService
     */
    public function __construct(ArticleService $articleService)
    {
        $this->articleService = $articleService;
    }

    public function index(Request $request)
    {
        $limit = $request->get('limit', 5);
        $result = $this->articleService->getList(intval($limit));

        return response()->json($result);
    }

    /**
     * @param CreateArticleRequest $request
     * @return JsonResponse
     */
    public function store(CreateArticleRequest $request)
    {
        $result = $this->articleService->create($request->all(), $request->user());

        return response()->json($result);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function show(Request $request)
    {
        $result = $this->articleService->show(
            intval($request->route('article')),
            ['urkArticle', 'rusArticle', 'engArticle']
        );
        return response()->json($result);
    }

    /**
     * @param UpdateArticleRequest $request
     * @return JsonResponse
     */
    public function update(UpdateArticleRequest $request)
    {
        $result = $this->articleService->update(
            intval($request->route('article')),
            $request->all(),
            User::first()
        );
        return response()->json($result);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     * @throws Exception
     */
    public function delete(Request $request)
    {
        $result = $this->articleService->delete(intval($request->route('article')));

        return response()->json(['result' => $result]);
    }
}
