<?php


namespace App\Http\Controllers;

use App\Http\Requests\Member\StoreMemberRequest;
use App\Http\Requests\Member\UpdateMemberRequest;
use App\Services\Member\MemberService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Class MemberController
 * @package App\Http\Controllers
 */
class MemberController extends Controller
{
    /**
     * @var MemberService
     */
    private $memberService;

    /**
     * MemberController constructor.
     * @param MemberService $memberService
     */
    public function __construct(MemberService $memberService)
    {
        $this->memberService = $memberService;
    }

    /**
     * @param StoreMemberRequest $request
     * @return JsonResponse
     */
    public function store(StoreMemberRequest $request)
    {
        $result = $this->memberService->create($request->all(), $request->user());

        return response()->json($result);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        $limit = $request->get('limit', 5);

        $result = $this->memberService->getList(intval($limit));

        return response()->json($result);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function show(Request $request)
    {
        $result = $this->memberService->show(intval($request->route('member')));

        return response()->json($result);
    }

    /**
     * @param UpdateMemberRequest $request
     * @return JsonResponse
     */
    public function update(UpdateMemberRequest $request)
    {
        $result = $this->memberService->update($request->all(), intval($request->route('member')));

        return response()->json($result);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     * @throws Exception
     */
    public function delete(Request $request)
    {
        $result = $this->memberService->delete(intval($request->route('member')));

        return response()->json($result);
    }
}
