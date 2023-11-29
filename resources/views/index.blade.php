<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Test Jevgenij</title>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    </head>

    <body class="mx-auto col-5">

        <a href="{{ route('index', ['column' => 'user_name', 'order' => (request()->input('column') === 'user_name' && request()->input('order') === 'asc') ? 'desc' : 'asc']) }}">Sort by Name</a>
        <a href="{{ route('index', ['column' => 'email', 'order' => (request()->input('column') === 'email' && request()->input('order') === 'asc') ? 'desc' : 'asc']) }}">Sort by Email</a>
        <a href="{{ route('index', ['column' => 'created_at', 'order' => (request()->input('column') === 'created_at' && request()->input('order') === 'asc') ? 'desc' : 'asc']) }}">Sort by Date</a>

        @foreach ($comments as $comment)

            <div class="comment ">
                @include('card', ['comment' => $comment])

                <!-- <form method="POST" action="/">@csrf<input name="parent_id" value="{{$comment->id}}"><input name="user_name"><input name="body"><input name="email"><button>ok</button></form> -->
                @foreach ($comment->children as $child)
                <div class="d-flex">
                    <div class="m-3"></div>
                    @include('card', ['comment' => $child]) 
                </div>
                        
                @endforeach
            </div>
            
        @endforeach

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

    </body>
</html>