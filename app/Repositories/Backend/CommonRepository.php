<?php
namespace App\Repositories\Backend;

use App\Repositories\Common\BaseRepository;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CommonRepository extends BaseRepository
{

    public function __construct(Model $model)
    {
        parent::__construct($model);
    }
}
