import  { useState, ChangeEvent } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Checkbox from '../atoms/Checkbox';
import RadioGroup from '../molecules/RadioGroup';
import { formatCPF, formatCNPJ } from '../../utils/formatters';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import FooterLogin from "./FooterLogin"; // Importando o componente Alert

const LoginForm = () => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [selectedType, setSelectedType] = useState<'CPF' | 'CNPJ'>('CPF');
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    // Mock de dois usuários
    const users = [
        {
            identifier: '123.456.789-10', // CPF
            password: 'senha123',
            type: 'CPF',
        },
        {
            identifier: '12.123.123/0001-00', // CNPJ
            password: 'senha123',
            type: 'CNPJ',
        },
    ];

    // Validação de login
    const onSubmit = () => {
        // @ts-ignore
        const userFound = users.find(
            (user: { identifier: string; password: string; type: string; }) =>
                user.identifier === identifier &&
                user.password === password &&
                user.type === selectedType
        );

        if (userFound) {
            setError('');
            if (keepLoggedIn) {
                localStorage.setItem('user', JSON.stringify(userFound));
            }
            navigate('/dashboard'); // Redireciona para o dashboard
        } else {
            setError('Senha ou usuário incorreto');
        }

        // Limpar os campos após o login
        setIdentifier('');
        setPassword('');
    };

    const handleTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newType = event.target.value as 'CPF' | 'CNPJ';
        setSelectedType(newType);
        setIdentifier(''); // Limpa o campo de CPF/CNPJ ao trocar de tipo
    };

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }}
                style={{
                    width: '20rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                }}
            >
                <img
                    src={'src/assets/img/logo_login.svg'}
                    alt={'Logo Líber'}
                    style={{alignSelf: 'center', width: '100px'}}/>
                <h2 style={{textAlign: 'start'}}>Entre na sua conta!</h2>
                {/* Mensagem de erro com Alert */}
                {error && (
                    <Alert severity="warning" style={{marginTop: '1rem'}}>
                        {error}
                    </Alert>
                )}

                {/* Tipo de Identificação */}
                <RadioGroup
                    options={[
                        {label: 'CPF', value: 'CPF'},
                        {label: 'CNPJ', value: 'CNPJ'},
                    ]}
                    value={selectedType}
                    onChange={handleTypeChange}/>

                {/* Input de CPF/CNPJ */}
                <Input
                    value={identifier}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setIdentifier(
                        selectedType === 'CPF'
                            ? formatCPF(e.target.value)
                            : formatCNPJ(e.target.value)
                    )}
                    label={selectedType === 'CPF' ? 'CPF' : 'CNPJ'}
                    placeholder={selectedType === 'CPF' ? '123.456.789-10' : '12.345.678/0001-11'}
                    inputProps={{
                        maxLength: selectedType === 'CPF' ? 14 : 18, // Limite de caracteres no input
                    }}/>

                {/* Input de Senha */}
                <Input
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    label="Senha"
                    type="password"
                    placeholder="Digite sua senha"/>

                {/* Checkbox */}
                <Checkbox
                    label="Manter-me conectado"
                    checked={keepLoggedIn}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setKeepLoggedIn(e.target.checked)}/>

                {/* Botão de Login */}
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={!identifier || password.length < 1}
                >
                    Entrar
                </Button>


                {/* Botões adicionais */}
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => navigate('/register')}
                >
                    Cadastrar
                </Button>
                <Button
                    variant="text"
                    color="primary"
                    onClick={() => navigate('/forgot-password')}
                >
                    Esqueci a senha
                </Button>
            </form>
            <FooterLogin/></>
    );
};

export default LoginForm;
