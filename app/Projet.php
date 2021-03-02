<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Projet extends Model
{
    use HasFactory;

    protected $table = "projets";
    public $timestamps = true;

    protected $casts = [
        'cost' => 'float'
    ];

    protected $guarded = [];

}
