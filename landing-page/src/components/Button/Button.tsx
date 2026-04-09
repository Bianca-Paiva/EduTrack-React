
// Componente de botão reutilizável para ações como "Login" e "Começar agora/cadastro"
interface ButtonProps {
    label: string; // O texto que será exibido no botão
    onClick: () => void; // A função que será chamada quando o botão for clicado, sem parâmetros e sem retorno
    filled: boolean; // Indica se o botão deve ser preenchido ou não
    border?: boolean; // Indica se o botão deve ter borda ou não, é opcional
}


// O componente Button recebe as props label, onClick e filled para personalizar seu comportamento e estilo
function Button({ label, onClick, filled, border}: ButtonProps) {
    return (
        <button 
            onClick={onClick} // A função onClick é chamada quando o botão é clicado
            style={{ // Estilos inline para o botão
                padding: '10px 15px', // 10px de padding vertical e 15px de padding horizontal
                borderRadius: '8px', // Bordas arredondadas para um visual mais moderno
                backgroundColor: filled ? 'var(--primary-color)' : 'transparent', // Se filled(preenchido) for true, o fundo é a cor primária; caso contrário, é transparente
                border: border? '2px solid var(--primary-color)' :'none' , // Se border for true, não há borda; caso contrário, há uma borda sólida de 2px com a cor primária
                color: border?  filled ? 'var(--white-color)' : 'var(--primary-color)' : 'var(--neutral-color)', // Se border for true e filled for true, a cor do texto é branca; se border for true e filled for false, a cor do texto é a cor primária; caso contrário, a cor do texto é a cor neutra
                fontSize: '0.875rem', // 14px
                fontWeight: '700', // Negrito para destacar o texto do botão
                cursor: 'pointer', // Cursor de ponteiro para indicar que é clicável
            }}
        >

            {label} {/* Exibe o texto do botão passado pela prop label */}
        </button>
    );
}


export default Button; // Componente de botão reutilizável para ações como "Login" e "Começar agora/cadastro"