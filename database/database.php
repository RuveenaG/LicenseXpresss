<?php
class Database {
    private $host = "localhost";
    private $user = "root";
    private $pass = ""; 
    private $dbname = "licensexpress";
    private $conn;

    public function __construct() {
        $this->connect();
    }

    private function connect() {
        
        $this->conn = mysqli_connect($this->host, $this->user, $this->pass, $this->dbname);

        if (!$this->conn) {
            die("❌ Database Connection Failed: " . mysqli_connect_error());
        } else {
            echo "✅ Database Connected Successfully!";
        }
    }

    public function getConnection() {
        return $this->conn;
    }

    public function closeConnection() {
        if ($this->conn) {
            mysqli_close($this->conn);
        }
    }
}
?>
