<?php


namespace App\Models\Article;

use App\Models\Article\Localisation\EngArticle;
use App\Models\Article\Localisation\RusArticle;
use App\Models\Article\Localisation\UkrArticle;
use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * Class Article
 * @package App\Models\Article
 */
class Article extends Model
{

    const LANGUAGES = ['uk', 'ru', 'en'];

    /**
     * @var string
     */
    protected $table = 'articles';

    /**
     * @var string[]
     */
    protected $appends = [
        'full_image_url'
    ];

    /**
     * @var string[]
     */
    protected $fillable = [
        'user_id',
        'image'
    ];

    /**
     * @return string
     */
    public function getFullImageUrlAttribute(): string
    {
        return config('app.url') . DIRECTORY_SEPARATOR . $this->image;
    }

    /**
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return HasOne
     */
    public function urkArticle(): HasOne
    {
        return $this->hasOne(UkrArticle::class);
    }

    /**
     * @return HasOne
     */
    public function rusArticle(): HasOne
    {
        return $this->hasOne(RusArticle::class);
    }

    /**
     * @return HasOne
     */
    public function engArticle(): HasOne
    {
        return $this->hasOne(EngArticle::class);
    }
}
