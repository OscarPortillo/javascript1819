<?php
class App(){
    function __construct(){
    }
    public function inicio(){
        if ( isset($_REQUEST['nombre']) && !empty($_REQUEST['nombre']) ){
            $nombre = $_REQUEST['nombre'];
            echo "Bienvenido $nombre";
        }
    }
}

    
