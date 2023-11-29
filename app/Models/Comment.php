<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'parent_id',
        'user_name',
        'email',
        'body',
        'home_page'
    ];

    public function children(){
        return $this->hasMany(Comment::class,'parent_id');
    }
}
