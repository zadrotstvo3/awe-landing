<?php


namespace App\Http\Controllers;

use App\Http\Requests\Upload\UploadFileRequest;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

/**
 * Class FileController
 * @package App\Http\Controllers\API\V1\File
 */
class FileController extends Controller
{
    /**
     * @param UploadFileRequest $request
     * @return Application|ResponseFactory|\Illuminate\Http\Response
     */
    public function upload(UploadFileRequest $request)
    {
        $image = $request->input('image');
        @list($type, $image) = explode(';', $image);
        @list(, $type) = explode('/', $type);
        @list(, $image) = explode(',', $image);
        $fileName = uniqid() . '.' . $type;
        try {
            Storage::disk('public')->put('articles' . '/' . $fileName, base64_decode($image));
            $url = 'storage/' . 'articles' . '/' . $fileName;
            return response(['url' => $url, 'full_url' => config('app.url') . DIRECTORY_SEPARATOR . $url], Response::HTTP_CREATED);
        } catch (\Exception $exception) {
            throw new BadRequestHttpException('We can not upload file');
        }
    }
}
