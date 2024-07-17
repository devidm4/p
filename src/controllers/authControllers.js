const usuariosRepository = require('../repositories/usuariosRepository');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const usuario = await usuariosRepository.getUsuariosByEmail(email);

    if (!usuario || usuario.password !== password) {
        return res.status(401).json({ message: 'Email ou senha inválidos!' });
    }
    return res.status(200).json({ message: 'Login realizado com sucesso!' });
}