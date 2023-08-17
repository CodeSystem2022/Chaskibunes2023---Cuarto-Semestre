from logger_base import log
from usuario import Usuario
from usuario_dao import UsuarioDAO

opcion = None
while opcion != 5:
        print('Opciones: ')
        print('1. Listar usuarios')
        print('2. Agregar usuario')
        print('3. Modificar usuario')
        print('4. Eliminar usuario')
        print('5. Salir')
        opcion = int(input('Digite una opción de menú (1-5): '))
        if opcion == 1:
            usuarios = UsuarioDAO.seleccionar()
            for usuario in usuarios:
                log.info(usuario)
        elif opcion == 2:
            username_var = input('Digite el nombre de usuario: ')
            password_var = input('Digite su contraseña: ')
            usuario = Usuario(username=username_var, password=password_var)
            usuario_insertado = UsuarioDAO.insertar(usuario)
            log.info(f'Usuario insertado: {usuario_insertado}')
        elif opcion == 3:
            id_usuario_var = int(input('Digite el id del usuario a modificar: '))
            username_var = input('Digite el nombre del usuario a modificar: ')
            password_var = input('Digite la contraseña del usuario a modificar: ')
            usuario = Usuario(id_usuario=id_usuario_var, username=username_var, password=password_var)
            usuario_actualizado = UsuarioDAO.actualizar(usuario)
            log.info(f'Usuario actualizado: {usuario_actualizado}')
        elif opcion == 4:
            id_usuario_var = int(input('Digite el id del usuario a eliminar: '))
            usuario = Usuario(id_usuario=id_usuario_var)
            usuario_eliminado = UsuarioDAO.eliminar(usuario)
            log.info(f'Usuario eliminado: {usuario_eliminado}')
        else:
            print('Salimos de la aplicación, Hasta pronto!!!')
