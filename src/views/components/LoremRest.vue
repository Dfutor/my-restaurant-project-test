<template>
    <div style="margin-top:15px ;">
        <div class="grid">
            <div class="col border-right-2 border-top-2 border-bottom-2" >

            </div>
            <div class="col-10 border-top-2 border-bottom-2" style="display: flex; flex-direction: column;">
                <h2>Inspirado en sabores tradicionales, Yayoi ofrece una interpretación fresca y creativa de la cocina japonesa.</h2>
                <PButton label="Contrast" severity="contrast" outlined />
                <PImage src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250" preview />

                
                <div class="grid my-3" style="height: auto;">
                    <div class="col-6  border-top-2  " style="align-content: center;">
                        <PImage src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250" preview />
                    </div>
                    <div class="col-6 border-top-2 " style="display: flex; flex-direction: column;align-content:center; ">
                        <div class="my-3">  
                            <h2>El destino perfecto para cualquier ocasión</h2>
                            <p>Párrafo. Haz clic aquí para agregar tu propio texto y editar. Aquí puedes contar tu historia y permitir que tus usuarios sepan más sobre ti.</p>
                            <PButton label="Contrast" severity="contrast" outlined />
                            <div class="my-2">
                                <div>
                                    <div class="grid">
                                        <h3 class="col">
                                            Horarios de apertura
                                        </h3>
                                            <div class="col">
                                            <h3>Lun - Vie: 8:00 - 20:00</h3>
                                            <h3>Sábado: 9:00 - 19:00</h3>
                                            <h3>Domingo: 9:00 - 20:00</h3>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="grid">
                                        <h3 class="col">
                                            Dirección
                                        </h3>
                                            <h3 class="col">
                                            v. Fray A. Alcalde 10 44100 Guad., Jal., México
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
            <div class="col border-left-2 border-top-2 border-bottom-2">

            </div>
        </div>

   
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoremRest',
    data() {
      return {
        email: ''
      };
    },
    methods: {
      subscribe() {
        // Aquí puedes añadir la lógica para manejar la suscripción por correo electrónico.
        alert(`Suscripción exitosa para: ${this.email}`);
        this.email = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .footer {
    color: #fff;
    padding: 2rem;
    text-align: center;
  }
  
  .footer-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .footer h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  
  .footer p {
    margin: 0.5rem 0;
  }
  
  .footer form {
    margin: 1rem 0;
  }
  
  .footer input[type="email"] {
    padding: 0.5rem;
    font-size: 1rem;
    margin-right: 0.5rem;
  }
  
  .footer button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #ff6347; /* Tomate */
    color: #fff;
    border: none;
    cursor: pointer;
  }
  
  .footer button:hover {
    background-color: #e55337;
  }
  
  .social-media a,
  .legal-links a {
    color: #ff6347;
    margin: 0 0.5rem;
    text-decoration: none;
  }
  
  .social-media a:hover,
  .legal-links a:hover {
    text-decoration: underline;
  }
  
  .contact-info p,
  .legal-links a {
    margin: 0.5rem 0;
  }
  </style>
  