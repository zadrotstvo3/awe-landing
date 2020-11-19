<?php


namespace App\Models\Article\Localisation;

use App\Models\Article\Article;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class UkrArticle
 * @package App\Models\Article\Localisation
 */
class UkrArticle extends Model
{
    /**
     * @var string
     */
    protected $table = 'ukr_articles';

    /**
     * @var string[]
     */
    protected $fillable = [
        'article_id',
        'title',
        'description',
    ];

    /**
     * @return BelongsTo
     */
    public function article()
    {
        return $this->belongsTo(Article::class);
    }
}
