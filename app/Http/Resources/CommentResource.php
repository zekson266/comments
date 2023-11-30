<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'parent_id' => $this->parent_id,
            'user_name' => $this->user_name,
            'email' => $this->email,
            'body' => $this->body,
            'home_page' => $this->home_page,
            'created_at' => $this->created_at->diffForHumans(),
            'children' => CommentResource::collection($this->whenLoaded('children')),
        ];
    }
}
