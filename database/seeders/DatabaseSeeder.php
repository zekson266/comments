<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Comment;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $faker = \Faker\Factory::create();
        
        for($i = 0; $i < 150; $i++) {
            Comment::create([
                'parent_id' => null, 
                'user_name' => $faker->name,
                'email' => $faker->email,
                'body' => $faker->text
            ]); 
        }
    }
}
