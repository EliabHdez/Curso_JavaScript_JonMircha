const delCaracteres = (texto = '', patron = '') => {
    (!texto)
    ? console.warn('No ingresaste ningun texto')
    : (!patron)
        ? console.warn('No ingresaste el patron de caracteres a eliminar')
        : console.info(texto.replace(new RegExp(patron,'ig'),''))
}

delCaracteres()
delCaracteres('xyz1, xyz2, xyz3, xyz4 y xyz5')
delCaracteres('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz')
delCaracteres('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xy')
delCaracteres('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xz')
delCaracteres('xyz1, xyz2, xyz3, xyz4 y xyz5', 'yz')