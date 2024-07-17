const informacoesRepository = require('../repositories/informacoesRepository');

exports.getInformacoes = async (req, res) => {
    const informacoes = await informacoesRepository.getInformacoes()
    res.json(informacoes);
}


exports.createInformacao = async (req, res) => {
    const informacoes = req.body;
    const newInformacoes = await informacoesRepository.createInformacao(informacoes);
    res.json(newInformacoes);
}


exports.updateInformacao = async (req, res) => {
    const informacoes = req.body;
    const newInformacoes = await informacoesRepository.updateInformacao(informacoes);
    res.json(newInformacoes);
}


exports.deleteInformacao = async (req, res) => {
    await informacoesRepository.deleteInformacao();
    res.json({ message: `Informação  deleted!` });
}