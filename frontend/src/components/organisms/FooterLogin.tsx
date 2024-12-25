const Footer = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'absolute',
                bottom: 0,
                width:'20rem',
                padding: '1rem',
                background: 'transparent',
                borderTop: '1px solid #e0e0e0', // Opcional: linha para separar do conteúdo
                fontSize: '0.875rem',
            }}
        >
            {/* Logo */}
            <img src={'src/assets/img/logo_login.svg'} alt="Logo Líber" style={{ width: '80px' }} />

            {/* Informações de Contato */}
            <div style={{ textAlign: 'left' }}>
                <div style={{color:"rgb(80, 98, 134)", letterSpacing:"0.5px", fontWeight:700}}>CONTATO</div>
                <div>contato@libercapital.com.br</div>
                <div>+55 (11) 3534-7808</div>
            </div>
        </div>
    );
};

export default Footer;
