<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{    
    //use HasFactory;

    protected $table = "projects";
    public $timestamps = true;

    protected $casts = [
        'cost' => 'float'
    ];

    protected $guarded = [];
}
