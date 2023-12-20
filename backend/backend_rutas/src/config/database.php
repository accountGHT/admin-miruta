<?php

namespace App\Config;

use PDO;
use PDOException;

class Database
{
    private $host = '23.254.217.21';
    // private $host = '127.0.0.1';
    private $username = 'sa';
    private $password = 'geraISLA123$';
    private $name = 'ChasquiDB';
    function connectDb()
    {
        try {
            $sql = "sqlsrv:Server=$this->host;Database=$this->name";//LOCAL
            $cn = new PDO($sql, $this->username, $this->password);
            $cn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $cn;
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }
};