<?php

namespace App\Models;

use App\Config\Database;
use PDO;
use PDOException;
use Slim\Http\Request as Request;

class Choferes
{
    function getChoferesP()
    {
        try {
            $db = new Database();
            $db = $db->connectDb();
            $r = $db->query("
                SELECT 
                    c.iMarcaVehiculo, 
                    c.iModeloVehiculo, 
                    c.nuevaMarca, 
                    c.nuevoModelo, 
                    c.vchPlaca as placa, 
                    ma.vchMarca as marca, 
                    mo.vchModelo as modelo, 
                    c.nLicencia as licencia,
                    c.dFecReg as fechaResgistro, 
                    c.iIdChofer as idChofer, 
                    u.iIdUsuario as idUsuario, 
                    c.observaciones, 
                    p.vchDni as id, 
                    p.vchNombres as nombre, 
                    concat(p.vchApellidoP,' ', p.vchApellidoM) as apellidos,
                    p.vchDireccion as direccion,
                    p.vchCelular as celular, 
                    u.vchCorreo as correoElectronico, 
                    C.iTotalViajes as vTotal, 
                    C.iViajesAceptados as vAceptados, 
                    C.iViajesCancelados as vCancelados, 
                    C.iViajesCompletados as vCompletados, 
                    C.mGananciaTotal as ganaciaTotal, 
                    C.iEstado as estado   
                from Chofer c 
                inner join Usuario u 
                    on c.iIdUsuario=u.iIdUsuario 
                inner join Persona p 
                    on u.iIdPersona=p.iIdPersona 
                inner join Marca ma
                    on ma.iIdMarca=c.iMarcaVehiculo 
                inner join modelo mo
                    on mo.iIdModelo=c.iModeloVehiculo
                WHERE c.iEstado=0 
                order by c.dFecReg DESC
            ");
            // p.vchDirección as direccion,
            $data = [];
            $row_count = ($r->rowCount() * -1);
            if ($row_count > 0) {
                $choferes = $r->fetchAll(PDO::FETCH_OBJ);
                $data = array("choferesPendientes" => $choferes, "codigo" => "200");
            } else $data = array("message" => "No hay datos", "codigo" => "204");

            return $data;
        } catch (PDOException $e) {
            return array("message" => $e->getMessage(), "codigo" => "404");
        }
    }




    function getChoferesO()
    {
        try {
            $db = new Database();
            $db = $db->connectDb();
            $r = $db->query("SELECT  c.iIdChofer as idChofer, c.fechaEstado, u.iIdUsuario as idUsuario, c.observaciones, p.vchDni as id, concat(p.vchNombres,' ',p.vchApellidoP,' ', p.vchApellidoM) as nombreCompleto,p.vchDirección as direccion,p.vchCelular as celular, u.vchCorreo as correoElectronico, C.iTotalViajes as vTotal, C.iViajesAceptados as vAceptados, C.iViajesCancelados as vCancelados, C.iViajesCompletados as vCompletados, C.mGananciaTotal as ganaciaTotal, C.iEstado as estado   from Chofer c inner join Usuario u on c.iIdUsuario=u.iIdUsuario inner join Persona p on u.iIdPersona=p.iIdPersona WHERE c.iEstado=3 order by c.fechaEstado DESC ");
            $data = [];
            $row_count = ($r->rowCount() * -1);
            if ($row_count > 0) {
                $choferes = $r->fetchAll(PDO::FETCH_OBJ);
                $data = array("choferesObservados" => $choferes, "codigo" => "200");
            } else $data = array("message" => "No hay datos", "codigo" => "204");

            return $data;
        } catch (PDOException $e) {
            return array("message" => $e->getMessage(), "codigo" => "404");
        }
    }

    function getChoferesC()
    {
        try {
            $db = new Database();
            $db = $db->connectDb();
            $r = $db->query("SELECT  c.iIdChofer  as idChofer, c.fechaEstado, c.iIdUsuario as idUsuario, c.observaciones, p.vchDni as id, concat(p.vchNombres,' ',p.vchApellidoP,' ', p.vchApellidoM) as nombreCompleto,p.vchDirección as direccion,p.vchCelular as celular, u.vchCorreo as correoElectronico, C.iTotalViajes as vTotal, C.iViajesAceptados as vAceptados, C.iViajesCancelados as vCancelados, C.iViajesCompletados as vCompletados, C.mGananciaTotal as ganaciaTotal, C.iEstado as estado   from Chofer c inner join Usuario u on c.iIdUsuario=u.iIdUsuario inner join Persona p on u.iIdPersona=p.iIdPersona WHERE c.iEstado=5 order by c.fechaEstado DESC ");
            $data = [];
            $row_count = ($r->rowCount() * -1);
            if ($row_count > 0) {
                $choferes = $r->fetchAll(PDO::FETCH_OBJ);
                $data = array("choferesCorregidos" => $choferes, "codigo" => "200");
            } else $data = array("message" => "No hay datos", "codigo" => "204");

            return $data;
        } catch (PDOException $e) {
            return array("message" => $e->getMessage(), "codigo" => "404");
        }
    }

    function getChoferesA()
    {
        try {
            $db = new Database();
            $db = $db->connectDb();
            $r = $db->query("SELECT  c.fechaEstado, c.iIdChofer as idChofer,u.iIdUsuario as idUsuario, p.dFecNac as fechaNacimiento,  c.observaciones, p.vchDni as id, concat( p.vchNombres,' ',p.vchApellidoP,' ', p.vchApellidoM) as nombreCompleto,p.vchDirección as direccion,p.vchCelular as celular, u.vchCorreo as correoElectronico, C.iTotalViajes as vTotal, C.iViajesAceptados as vAceptados, C.iViajesCancelados as vCancelados, C.iViajesCompletados as vCompletados, C.mGananciaTotal as ganaciaTotal, C.iEstado as estado   from Chofer c inner join Usuario u on c.iIdUsuario=u.iIdUsuario inner join Persona p on u.iIdPersona=p.iIdPersona WHERE c.iEstado=2 order by c.fechaEstado DESC ");
            $data = [];
            $row_count = ($r->rowCount() * -1);
            if ($row_count > 0) {
                $choferes = $r->fetchAll(PDO::FETCH_OBJ);
                $data = array("choferesActivos" => $choferes, "codigo" => "200");
            } else $data = array("message" => "No hay datos", "codigo" => "204");

            return $data;
        } catch (PDOException $e) {
            return array("message" => $e->getMessage(), "codigo" => "404");
        }
    }

    function getChoferesR()
    {
        try {
            $db = new Database();
            $db = $db->connectDb();
            $r = $db->query("SELECT c.iIdChofer as idChofer, c.observaciones, c.fechaEstado, c.fechaEstado, c.observaciones, p.vchDni as id, p.vchNombres as nombre, concat(p.vchApellidoP,' ', p.vchApellidoM) as apellidos,p.vchDirección as direccion,p.vchCelular as celular, u.vchCorreo as correoElectronico, C.iTotalViajes as vTotal, C.iViajesAceptados as vAceptados, C.iViajesCancelados as vCancelados, C.iViajesCompletados as vCompletados, C.mGananciaTotal as ganaciaTotal, C.iEstado as estado   from Chofer c inner join Usuario u on c.iIdUsuario=u.iIdUsuario inner join Persona p on u.iIdPersona=p.iIdPersona WHERE c.iEstado=4 order by c.fechaEstado DESC");
            $data = [];
            $row_count = ($r->rowCount() * -1);
            if ($row_count > 0) {
                $choferes = $r->fetchAll(PDO::FETCH_OBJ);
                $data = array("choferesRechazados" => $choferes, "codigo" => "200");
            } else $data = array("message" => "No hay datos", "codigo" => "204");

            return $data;
        } catch (PDOException $e) {
            return array("message" => $e->getMessage(), "codigo" => "404");
        }
    }
    function getChoferesD()
    {
        try {
            $db = new Database();
            $db = $db->connectDb();
            $r = $db->query("SELECT  c.fechaEstado, c.iIdChofer as idChofer, p.dFecNac as fechaNacimiento,  c.observaciones, p.vchDni as id, concat( p.vchNombres,' ',p.vchApellidoP,' ', p.vchApellidoM) as nombreCompleto,p.vchDirección as direccion,p.vchCelular as celular, u.vchCorreo as correoElectronico, C.iTotalViajes as vTotal, C.iViajesAceptados as vAceptados, C.iViajesCancelados as vCancelados, C.iViajesCompletados as vCompletados, C.mGananciaTotal as ganaciaTotal, C.iEstado as estado   from Chofer c inner join Usuario u on c.iIdUsuario=u.iIdUsuario inner join Persona p on u.iIdPersona=p.iIdPersona WHERE c.iEstado=0 order by c.fechaEstado DESC ");
            $data = [];
            $row_count = ($r->rowCount() * -1);
            if ($row_count > 0) {
                $choferes = $r->fetchAll(PDO::FETCH_OBJ);
                $data = array("choferesInactivos" => $choferes, "codigo" => "200");
            } else $data = array("message" => "No hay datos", "codigo" => "204");

            return $data;
        } catch (PDOException $e) {
            return array("message" => $e->getMessage(), "codigo" => "404");
        }
    }


    function getDocChofer(Request $request)
    {
        $idChofer = $request->getParam('idChofer');
        try {
            $db = new Database();
            $db = $db->connectDb();
            $r = $db->query("SELECT d.vchRuta, ch.observaciones, ch.iIdUsuario as idUsuario, d.iEstado, d.iTipoDocumento, d.vchMotivoRechazo, d.dFecReg from Documento d inner join Documentacion dc on d.iIdDocumentacion=dc.iIdDocumentacion inner join Usuario u on u.iIdUsuario=dc.iIdUsuario inner join Chofer ch on ch.iIdUsuario=u.iIdUsuario where ch.iIdChofer = $idChofer;");
            $data = [];
            $row_count = ($r->rowCount() * -1);
            if ($row_count > 0) {
                $choferes = $r->fetchAll(PDO::FETCH_OBJ);
                $data = array("documentos" => $choferes, "codigo" => "200");
            } else $data = array("message" => "No hay datos", "codigo" => "204");

            return $data;
        } catch (PDOException $e) {
            return array("message" => $e->getMessage(), "codigo" => "404");
        }
    }
    function deactivateChofer(Request $request)
    {
        $idChofer = $request->getParam('idChofer');
        $observacion = $request->getParam('observaciones');
        try {
            if (!empty($idChofer)) {
                $db = new Database();
                $db = $db->connectDb();
                $r = $db->prepare("SELECT *from chofer where iIdChofer=$idChofer");
                $data = [];
                $r->execute();
                $cliente = $r->fetch(PDO::FETCH_OBJ);
                if ($cliente->iEstado == 2) {
                    $r = $db->prepare("UPDATE  chofer set observaciones='$observacion', iEstado=0, fechaEstado=(SELECT SYSDATETIME()) where iIdChofer=$idChofer");
                    $data = [];
                    $r->execute();
                    if ($r->rowCount() > 0) $data = array("message" => "modificado con exito", "codigo" => "200");
                    else $data = array("message" => "Ocurrió un error al modificar", "codigo" => "404");
                } else {
                    $r = $db->prepare("UPDATE  chofer set observaciones='$observacion', iEstado=2, fechaEstado=(SELECT SYSDATETIME()) where iIdChofer=$idChofer");
                    $data = [];
                    $r->execute();
                    if ($r->rowCount() > 0) $data = array("message" => "modificado con exito", "codigo" => "200");
                    else $data = array("message" => "Ocurrió un error al modificar", "codigo" => "404");
                }
                return $data;
            } else return array("message" => "Datos incorrectos", "codigo" => "400");
        } catch (PDOException $e) {
            return array("message" => $e->getMessage(), "codigo" => "404");
        }
    }
    function docValidador(Request $request)
    {
        $idUsuario = $request->getParam('idUsuario');
        $tipoDoc = $request->getParam('documentos');
        $documentoT = json_decode($tipoDoc);
        try {
            $db = new Database();
            $db = $db->connectDb();
            if ($tipoDoc == "activado") {
                $r = $db->prepare("SELECT *from Documentacion where iIdUsuario=$idUsuario");
                $data = [];
                $r->execute();
                $doc = $r->fetch(PDO::FETCH_OBJ);
                $idDoc = $doc->iIdDocumentacion;
                $row_count = ($r->rowCount() * -1);
                if ($row_count > 0) {
                    $r = $db->prepare("UPDATE Documento set iEstado=2 where iIdDocumentacion=$idDoc");
                    $data = [];
                    $r->execute();
                    // $doc = $r->fetch(PDO::FETCH_OBJ);
                    if ($r->rowCount() > 0) {
                        $r = $db->prepare("UPDATE Chofer set iEstado=2, fechaEstado=(SELECT SYSDATETIME()) where iIdUsuario=$idUsuario");
                        $data = [];
                        $r->execute();
                        if ($r->rowCount() > 0) {
                            $data = array("message" => "modificado con exito", "codigo" => "200");
                        } else $data = array("message" => "Ocurrió un error al modificar", "codigo" => "404");
                    } else $data = array("message" => "Ocurrió un error al modificar", "codigo" => "404");
                } else $data = array("message" => "Ocurrió un error al modificar", "codigo" => "404");
                return $data;
            } else {
                $r = $db->prepare("SELECT *from Documentacion where iIdUsuario=$idUsuario");
                $data = [];
                $r->execute();
                $doc = $r->fetch(PDO::FETCH_OBJ);
                $idDoc = $doc->iIdDocumentacion;
                $row_count = ($r->rowCount() * -1);
                if ($row_count > 0) {
                    $r = $db->prepare("SELECT *from Documento where iIdDocumentacion=$idDoc");
                    $data = [];
                    $r->execute();
                    $row_count = ($r->rowCount() * -1);
                    if ($row_count > 0) {
                        $r = $db->prepare("UPDATE Documento set iEstado=3 where iIdDocumentacion=$idDoc");
                        $data = [];
                        $r->execute();
                        if ($r->rowCount() > 0) {
                            foreach ($documentoT as $valor) {
                                $r = $db->prepare("UPDATE Documento set iEstado=2 where iIdDocumentacion=$idDoc and iTipoDocumento=$valor");
                                $data = [];
                                $r->execute();
                            }
                            $r = $db->prepare("UPDATE chofer set iEstado=3, fechaEstado=(SELECT GETDATE())  where iIdUsuario=$idUsuario");
                            $data = [];
                            $r->execute();
                            if ($r->rowCount() > 0) {
                                $data = array("message" => "modificado con exito", "codigo" => "200");
                            } else $data = array("message" => "Ocurrió un error al modificar", "codigo" => "404");
                        } else $data = array("message" => "Ocurrió un error al modificar", "codigo" => "404");
                    } else $data = array("message" => "Datos incorrectos", "codigo" => "400");
                } else $data = array("message" => "Datos incorrectos", "codigo" => "400");
                return $data;
            }
        } catch (PDOException $e) {
            return array("message" => $e->getMessage(), "codigo" => "404");
        }
    }

    function getDocObservados(Request $request)
    {
        $idUsuario = $request->getParam('idUsuario');
        try {
            $db = new Database();
            $db = $db->connectDb();
            $r = $db->query("SELECT dc.vchRuta, dc.iEstado as estado, dc.iTipoDocumento as tipoDocumento  from Documentacion d inner join Documento dc on d.iIdDocumentacion=dc.iIdDocumentacion where d.iIdUsuario=$idUsuario");
            $data = [];
            $row_count = ($r->rowCount() * -1);
            if ($row_count > 0) {
                $choferes = $r->fetchAll(PDO::FETCH_OBJ);
                $data = array("documentosObservados" => $choferes, "codigo" => "200");
            } else $data = array("message" => "No hay datos", "codigo" => "204");
            return $data;
        } catch (PDOException $e) {
            return array("message" => $e->getMessage(), "codigo" => "404");
        }
    }
    function rechazarPendientes(Request $request)
    {
        $idChofer = $request->getParam('idChofer');
        $observaciones = $request->getParam('observaciones');
        try {
            $db = new Database();
            $db = $db->connectDb();
            $r = $db->prepare("SELECT * from chofer where iIdChofer=$idChofer");
            $r->execute();
            $doc = $r->fetch(PDO::FETCH_OBJ);
            $idDoc = $doc->iIdDocumentacion;
            $row_count = ($r->rowCount() * -1);
            if ($row_count > 0) {
                $db = new Database();
                $db = $db->connectDb();
                $r = $db->prepare("UPDATE chofer set observaciones='$observaciones', iEstado=4, fechaEstado=(SELECT GETDATE()) where iIdChofer=$idChofer");
                $data = [];
                $r->execute();
                if ($r->rowCount() > 0) {
                    $r = $db->prepare("UPDATE Documento set iEstado=5 where iIdDocumentacion=$idDoc");
                    $data = [];
                    $r->execute();
                    $data = array("message" => "modificado con exito", "codigo" => "200");
                } else $data = array("message" => "Ocurrió un error al modificar", "codigo" => "404");
                return $data;
            } else $data = array("message" => "Ocurrió un error al modificar", "codigo" => "404");
        } catch (PDOException $e) {
            return array("message" => $e->getMessage(), "codigo" => "404");
        }
    }
}
