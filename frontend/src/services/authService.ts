import axios from 'axios';

// Função para autenticar o usuário e retornar o token JWT
export const login = async (identifier: string, password: string) => {
    try {
        const response = await axios.post('http://localhost:3000/auth/login', {
            identifier,
            password,
        });
        return response.data.token;
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        throw new Error('Erro ao autenticar');
    }
};
