from conexion import Conexion
from cursor_del_pool import CursorDelPool
from logger_base import log
from usuario import Usuario


class UsuarioDAO:
    '''
    DAO -> Data Access Object Para la tabla usuario
    CRUD -> Create - Read - Update - Delete
    '''
    _SELECCIONAR = 'SELECT * FROM usuario ORDER BY id_usuario'
    _INSERTAR = 'INSERT INTO usuario(username, password) VALUES(%s, %s)'
    _ACTUALIZAR = 'UPDATE usuario SET username=%s, password=%s WHERE id_usuario=%s'
    _ELIMINAR = 'DELETE FROM usuario WHERE id_usuario = %s'

    # Definimos los métodos de clase

    @classmethod
    def seleccionar(cls):
        with CursorDelPool() as cursor:
            log.debug('Seleccionando usuarios')
            cursor.execute(cls._SELECCIONAR)
            registros = cursor.fetchall()
            usuarios = []
            for registro in registros:
                usuario = Usuario(registro[0], registro[1], registro[2])
                usuarios.append(usuario)
            return usuarios

    @classmethod
    def insertar(cls, usuario):
        with CursorDelPool() as cursor:
            valores = (usuario.username, usuario.password) 
            cursor.execute(cls._INSERTAR, valores) 
            log.debug(f'Usuario a insertar: {usuario}')
            return cursor.rowcount 
            
            
    @classmethod
    def actualizar(cls, usuario):
        with CursorDelPool() as cursor:
            valores = (usuario.username, usuario.password, usuario.id_usuario)
            cursor.execute(cls._ACTUALIZAR, valores)
            log.debug(f'Usuario a actualizar: {usuario}')
            return cursor.rowcount
            

    @classmethod
    def eliminar(cls, usuario):
        with CursorDelPool() as cursor:
            valores = (usuario.id_usuario,)
            cursor.execute(cls._ELIMINAR, valores)
            log.debug(f'Usuario a eliminar: {usuario}')
            return cursor.rowcount
                
if __name__ == "__main__":
    # Eliminar un registro
    usuario1 = Usuario(id_usuario=1) 
    usuarios_eliminados = UsuarioDAO.eliminar(usuario1) 
    log.debug(f'Usuarios eliminados: {usuarios_eliminados}') 
    #-
    #Actualizar un registro 
    #usuario1 = Usuario(1, 'Juan', '1222') 
    #usuarios_actualizados = UsuarioDAO.actualizar(usuario1) 
    #log.debug(f'Usuarios actualizados: {usuarios_actualizados}') 
    #-
    # Insertar un registro 
    #usuario = Usuario(username='Mateo', password='5655') 
    #usuarios_insertado = UsuarioDAO.insertar(usuario) 
    #log.debug(f'Usuario Insertado: {usuarios_insertado}') 

    # Seleccionar objetos
    usuarios = UsuarioDAO.seleccionar()
    for usuario in usuarios:
        log.debug(usuario)
