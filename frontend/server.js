const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Configura as rotas de autenticação
server.use(middlewares);
server.use(auth);

// Adiciona a rota de login para retornar um JWT
server.post('/auth/login', (req, res) => {
    const { identifier, password } = req.body;

    // Simula a autenticação com os dados no DB
    const user = router.db.get('users').find(u => (u.cpf === identifier || u.cnpj === identifier) && u.password === password).value();

    if (user) {
        // Gera o JWT com o ID do usuário
        const token = generateJWT(user.id);
        return res.jsonp({ token });
    } else {
        return res.status(401).jsonp({ error: 'Credenciais inválidas' });
    }
});

const generateJWT = (userId) => {
    // Aqui você geraria o JWT com uma biblioteca como jsonwebtoken
    return `fake-jwt-token-for-user-${userId}`;
};

// Inicia o servidor
server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running');
});
