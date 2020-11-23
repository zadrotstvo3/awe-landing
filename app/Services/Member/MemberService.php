<?php

namespace App\Services\Member;

use App\Models\Member\Member;
use App\User;
use Exception;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

/**
 * Class MemberService
 * @package App\Services\Member
 */
class MemberService
{
    /**
     * @var Member
     */
    private $model;

    /**
     * MemberService constructor.
     * @param Member $model
     */
    public function __construct(Member $model)
    {
        $this->model = $model;
    }

    /**
     * @param array $data
     * @param User $user
     * @return Member
     */
    public function create(array $data, User $user): Member
    {
        $member = $user->members()->create($data);

        $member->socialMedias()->createMany($data['social_medias']);

        return $member->load('socialMedias');
    }

    /**
     * @param int $limit
     * @return LengthAwarePaginator
     */
    public function getList(int $limit): LengthAwarePaginator
    {
        return $this->model->with('socialMedias')->paginate($limit);
    }

    /**
     * @param int $member_id
     * @return Member
     */
    public function show(int $member_id): Member
    {
        return $this->getById($member_id, ['socialMedias']);
    }

    /**
     * @param array $data
     * @param int $member_id
     * @return Member
     */
    public function update(array $data, int $member_id): Member
    {
        $instance = $this->getById($member_id);

        $instance->update($data);

        if ($data['social_medias']) {
            $this->updateSocialMedias($data['social_medias'], $instance);
        }
        return $instance->load('socialMedias');
    }

    /**
     * @param array $data
     * @param Member $member
     */
    public function updateSocialMedias(array $data, Member $member)
    {
        array_walk($data, function (array $attributes) use ($member) {
            $media = $member->socialMedias()->findOrFail($attributes['id']);
            if ($media) {
                return $media->update($attributes);
            }
            throw new BadRequestHttpException('Social media was not found by  provided id');
        });
    }

    /**
     * @param int $member_id
     * @return bool|null
     * @throws Exception
     */
    public function delete(int $member_id): bool
    {
        $instance = $this->getById($member_id);

        return $instance->delete();
    }

    /**
     * @param int $member_id
     * @param array $relations
     * @return Member
     */
    public function getById(int $member_id, array $relations = []): Member
    {
        return $this->model->with($relations)->findOrFail($member_id);
    }
}
