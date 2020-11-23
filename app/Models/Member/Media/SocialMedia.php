<?php

namespace App\Models\Member\Media;

use App\Models\Member\Member;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class SocialMedia
 * @package App\Models\Member\Media
 */
class SocialMedia extends Model
{
    /**
     * @var string
     */
    protected $table = 'social_medias';

    /**
     * @var array
     */
    protected $fillable = [
        'member_id',
        'title',
        'link'
    ];

    /**
     * @return BelongsTo
     */
    public function member(): BelongsTo
    {
        return $this->belongsTo(Member::class);
    }
}
