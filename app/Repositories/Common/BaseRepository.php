<?php
namespace App\Repositories\Common;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Schema;

abstract class BaseRepository
{

    public $model;
    public $articleComment;
    public $articleRead;
    public $tags;
    public $interact;
    public $user;
    public $adminPermission;
    public $admin;
    public $dicts = [];

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    
}
