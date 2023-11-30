<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCommentRequest;
use App\Http\Requests\UpdateCommentRequest;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // $this->validate($request, [
        //     'column' => 'required|in:user_name,email,created_at',
        //     'order' => 'required|in:asc,desc'
        //   ]);

        $sortBy = [
            'order' => $request->input('order', 'desc'),
            'column' => $request->input('column', 'id'),
        ];

        $comments = Comment::with('children')->whereNull('parent_id')
            ->orderBy($sortBy['column'], $sortBy['order'])
            ->paginate(25);


        return view('index', [
            'comments' => $comments,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCommentRequest $request)
    {
        //
        // Comment::create($request->validated());

        // return redirect('/');
    }

    /**
     * Display the specified resource.
     */
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCommentRequest $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {
        //
    }
}
