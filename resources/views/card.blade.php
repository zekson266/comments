<div class="mb-2 w-100">
    <div class="title d-flex p-2 gap-3 bg-light">
        <div class="name flex-grow-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
            </svg>
            @php
                if($comment?->home_page)
                    echo '<a href="' . $comment->user_name . '">'. $comment->user_name .'</a>';
                else
                    echo "$comment->user_name";
            @endphp
        </div>
        <div class="date">
            {{ $comment->created_at->diffForHumans() }}
        </div>
    </div>
    <div class="content p-1">
        {{ $comment->body }}
    </div>
    <div class="id" style="font-size: 10px; margin-left: 1ch;">
        {{ $comment->id }} | {{ $comment->parent_id }}
    </div>
</div>