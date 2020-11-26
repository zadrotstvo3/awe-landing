<?php

namespace App\Http\Controllers;

use App\Http\Requests\Article\CreateArticleRequest;
use App\Http\Requests\Article\UpdateArticleRequest;
use App\Services\Article\ArticleService;
use Exception;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

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

    /**
     * @param Request $request
     * @return Application|Factory|JsonResponse|View
     */
    public function index(Request $request)
    {
        if ($request->isXmlHttpRequest()) {
            $limit = $request->get('limit', 5);
            $result = $this->articleService->getList(intval($limit));

            return response()->json($result);
        }
        return view("welcome");
    }

    /**
     * @param CreateArticleRequest $request
     * @return Application|Factory|JsonResponse|View
     */
    public function store(CreateArticleRequest $request)
    {
        if ($request->isXmlHttpRequest()) {
            $result = $this->articleService->create($request->all(), $request->user());

            return response()->json($result);
        }
        return view("welcome");
    }

    /**
     * @param Request $request
     * @return Application|Factory|JsonResponse|View
     */
    public function show(Request $request)
    {
        if ($request->isXmlHttpRequest()) {
            $result = $this->articleService->show(
                intval($request->route('article')),
                ['urkArticle', 'rusArticle', 'engArticle']
            );
            return response()->json($result);
        }
        return view("welcome");
    }

    /**
     * @param UpdateArticleRequest $request
     * @return Application|Factory|JsonResponse|View
     */
    public function update(UpdateArticleRequest $request)
    {
        if ($request->isXmlHttpRequest()) {

            $result = $this->articleService->update(
                intval($request->route('article')),
                $request->all(),
                $request->user()
            );
            return response()->json($result);
        }
        return view("welcome");
    }

    /**
     * @param Request $request
     * @return Application|Factory|JsonResponse|View
     * @throws Exception
     */
    public function delete(Request $request)
    {
        if ($request->isXmlHttpRequest()) {

            $result = $this->articleService->delete(intval($request->route('article')));

            return response()->json(['result' => $result]);
        }
        return view("welcome");
    }
}
