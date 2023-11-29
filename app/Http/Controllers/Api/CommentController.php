<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    //
    public function index(Request $request){

        // $this->validate($request, [
        //     'column' => 'required|in:user_name,email,created_at',
        //     'order' => 'required|in:asc,desc'
        //   ]);

        $sortBy = [
            'order' => $request->input('order', 'asc'),
            'column' => $request->input('column', 'user_name'),
        ];

        $comments = Comment::with('children')->where('parent_id', null)
            ->orderBy($sortBy['column'], $sortBy['order'])
            ->paginate(25);


        return response($comments,200);
    }
}
