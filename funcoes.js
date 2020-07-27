function validar(login,senha) {
    if (login == "Yurys" && senha=="123")
       return true;
    return false;
}

exports.validarUsuario = validar;