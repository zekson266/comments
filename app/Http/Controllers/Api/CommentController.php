<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CommentResource;
use App\Http\Requests\StoreCommentRequest;
use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    //
    public function index(Request $request){

        $this->validate($request, [
            'column' => 'required|in:user_name,email,created_at',
            'order' => 'required|in:asc,desc'
        ]);

        $sortBy = [
            'order' => $request->input('order', 'desc'),
            'column' => $request->input('column', 'created_at'),
        ];

        $comments = Comment::with('children')->whereNull('parent_id')
            ->orderBy($sortBy['column'], $sortBy['order'])
            ->paginate(25);


        return CommentResource::collection($comments);
    }

    public function store(StoreCommentRequest $request)
    {
        Comment::create($request->validated());

        return response('success',200);
    }
}
