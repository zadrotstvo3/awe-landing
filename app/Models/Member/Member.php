<?php

namespace App\Models\Member;

use App\Models\Member\Media\SocialMedia;
use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Class Member
 * @package App\Models\Member
 */
class Member extends Model
{
    /**
     * @var string
     */
    protected $table = 'members';

    /**
     * @var string[]
     */
    protected $fillable = [
        'user_id',
        'first_name',
        'last_name',
        'position',
        'avatar',
    ];

    /**
     * @var string[]
     */
    protected $appends = [
        'full_avatar_url'
    ];

    /**
     * @return string
     */
    public function getFullAvatarUrlAttribute(): string
    {
        return config('app.url') . DIRECTORY_SEPARATOR . $this->avatar;
    }

    /**
     * @return BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return HasMany
     */
    public function socialMedias(): HasMany
    {
        return $this->hasMany(SocialMedia::class);
    }
}
