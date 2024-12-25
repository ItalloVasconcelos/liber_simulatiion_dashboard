import { useState, ChangeEvent, FormEvent } from 'react';
import { Button, Typography, TextField, CircularProgress, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import SelectGroup from '../molecules/SelectGroup';

const Register = () => {
    const [registrationType, setRegistrationType] = useState('');
    const [formData, setFormData] = useState<{ [key: string]: string }>({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    // Função para verificar a validade do formulário
    const validateForm = (type: string, data: { [key: string]: string }) => {
        const requiredFields =
            type === 'Pessoa Fisica'
                ? ['name', 'email', 'cpf', 'password', 'confirmPassword']
                : ['contactName', 'email', 'cnpj', 'businessName', 'fantasyName', 'password', 'confirmPassword'];

        return requiredFields.every((field) => data[field]?.trim());
    };

    // Alteração do tipo de cadastro
    const handleRegistrationTypeChange = (event: ChangeEvent<{ value: unknown }>) => {
        const selectedType = event.target.value as string;
        setRegistrationType(selectedType);
        setFormData({});
        setIsFormValid(false);
    };

    // Alteração nos campos do formulário
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const updatedFormData = { ...formData, [name]: value };
        setFormData(updatedFormData);
        setIsFormValid(validateForm(registrationType, updatedFormData));
    };

    // Envio do formulário
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            navigate('/login');
        }, 1000); // Redireciona após 1 segundo
    };

    // Formulário de Pessoa Física
    const renderIndividualForm = () => (
        <form style={{
            width: '20rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
        }}>
            <TextField label="Nome completo" name="name" fullWidth required size="small" onChange={handleInputChange} />
            <TextField label="Email" name="email" type="email" fullWidth required size="small" onChange={handleInputChange} />
            <TextField label="CPF" name="cpf" fullWidth required size="small" onChange={handleInputChange} />
            <TextField label="Celular" name="phone" fullWidth size="small" onChange={handleInputChange} />
            <TextField label="Criar senha" name="password" type="password" fullWidth required size="small" onChange={handleInputChange} />
            <TextField
                label="Confirme sua senha"
                name="confirmPassword"
                type="password"
                fullWidth
                required
                size="small"
                onChange={handleInputChange}
            />
        </form>
    );

    // Formulário para os demais tipos de cadastro
    const renderBusinessForm = () => (
        <form style={{
            width: '20rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
        }}>
            <TextField label="Nome para contato" name="contactName" fullWidth required size="small" onChange={handleInputChange} />
            <TextField label="Email" name="email" type="email" fullWidth required size="small" onChange={handleInputChange} />
            <TextField label="CNPJ" name="cnpj" fullWidth required size="small" onChange={handleInputChange} />
            <TextField label="Razão Social" name="businessName" fullWidth required size="small" onChange={handleInputChange} />
            <TextField label="Nome Fantasia" name="fantasyName" fullWidth required size="small" onChange={handleInputChange} />
            <TextField label="Celular" name="phone" fullWidth size="small" onChange={handleInputChange} />
            <TextField label="Criar senha" name="password" type="password" fullWidth required size="small" onChange={handleInputChange} />
            <TextField
                label="Confirme sua senha"
                name="confirmPassword"
                type="password"
                fullWidth
                required
                size="small"
                onChange={handleInputChange}
            />
        </form>
    );

    return (
        <>
            <Typography variant="h5" component="h2" align="center" gutterBottom>
                Cadastro de cliente
            </Typography>
            <form onSubmit={handleSubmit}>
                {/* Select para escolher o tipo de cadastro */}
                <SelectGroup
                    label="Tipo de cadastro"
                    value={registrationType}
                    onChange={handleRegistrationTypeChange}
                    options={[
                        { label: 'Pessoa física', value: 'Pessoa Fisica' },
                        { label: 'Factoring', value: 'Factoring' },
                        { label: 'FIDC', value: 'FIDC' },
                        { label: 'Securitizadora', value: 'Securitizadora' },
                        { label: 'Banco', value: 'Banco' },
                        { label: 'Empresa Simples de Crédito', value: 'Empresa Simples de Crédito' },
                    ]}
                />

                {/* Renderizar o formulário apropriado */}
                <Grid container spacing={2} style={{ marginTop: '1rem' }}>
                    {registrationType === 'Pessoa Fisica' && renderIndividualForm()}
                    {registrationType !== 'Pessoa Fisica' && registrationType && renderBusinessForm()}
                </Grid>

                {/* Botão de registro */}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="small"
                    fullWidth
                    disabled={!isFormValid || isSubmitting}
                    style={{ marginTop: '1rem' }}
                >
                    {isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Cadastrar'}
                </Button>

                {/* Botão para voltar ao login */}
                <Button
                    variant="text"
                    color="primary"
                    fullWidth
                    size="small"
                    onClick={() => navigate('/login')}
                    style={{ marginTop: '1rem' }}
                >
                    Voltar para o Login
                </Button>
            </form>
        </>
    );
};

export default Register;
