

    const required = new Notyf({
      duration: 5000, // Duração padrão das notificações em milissegundos
      position: {
        x: 'right',
        y: 'bottom',
      }, // Posição padrão das notificações
      types: [
    
        {
          type: 'error',
          backgroundColor: '#e02d2d',
          icon: false,
        },
      ], // Definição de tipos personalizados de notificações
    });



export default required