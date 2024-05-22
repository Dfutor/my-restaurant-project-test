<template>
  <div class="footer border-2 ">
    <div class="footer-content flex flex-column ">

      <div class="footer-section  border-bottom-2">
        <div class="my-5">
          <h1 class="logo-text">ICHIRAKU RAMEN</h1>
          <p class="my-4">COCINA-NARUTO</p>
          <P class="my-2 ">Recordando tradición</P>
        </div>
      </div>
      <div class="grid border-bottom-2 flex">
        <div class=" col-5 col-offset-1  footer-section newsletter my-5 ">
          <h2>Suscríbete a nuestro boletín</h2>
          <p>para recibir novedades y ofertas especiales.</p>
          <form @submit.prevent="subscribe">
            <input type="email" v-model="email" placeholder="Email" required>
            <button type="submit">ENVIAR</button>
          </form> 
        </div>
  
        <div class=" col-5 footer-section ">
          <h2>Contactos</h2>
          <p>Av. Fray Antonio Alcalde 10,<br> Guadalajara</p>
          <p>+52-1-33-12345678</p>
          <p>info@misitio.com</p>
          
        </div>
      </div>

      <div class="footer-section social">
        <h2>Conéctate con nosotros</h2>
        <div class="social-icons">
          <a href="https://www.instagram.com" target="_blank"><i class="pi pi-instagram"></i></a>
          <a href="https://www.facebook.com" target="_blank"><i class="pi pi-facebook"></i></a>
          <a href="https://www.tripadvisor.com" target="_blank"><i class="pi pi-tripadvisor"></i></a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <ul>
        <li><router-link to="/terms">T y </router-link></li>
        <li><router-link to="/privacy">Políticas de hambre</router-link></li>
      </ul>
      <p>© 2035 por ICHIRAKU.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterDown',
  data() {
    return {
      email: ''
    };
  },
  methods: {
    subscribe() {
      // Lógica para suscribirse al boletín
      console.log(`Subscribed with email: ${this.email}`);
      this.email = ''; // Resetea el campo de email
    }
  }
};
</script>

<style scoped>
.footer {
  background: #1e1e1e;;
  color: #fff;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
}

.footer-section {
  flex: 1;
  padding: 1rem;
}

.logo-text {
  font-size: 2 rem;
  color: #ffcc00;
}

.newsletter input[type="email"] {
  padding: 0.5rem;
  width: 70%;
  margin-bottom: 1rem;
}

.newsletter button {
  padding: 0.5rem 1rem;
  background-color: #ffcc00;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.newsletter button:hover {
  background-color: #ff6600;
}

.social-icons a {
  margin: 0 0.5rem;
  color: #ffcc00;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #ff6600;
}

.footer-bottom {
  margin-top: 1rem;
  text-align: center;
  font-size: 0.8rem;
}

.footer-bottom ul {
  list-style: none;
  padding: 0;
}

.footer-bottom ul li {
  display: inline;
  margin: 0 1rem;
}

.footer-bottom a {
  color: #ffcc00;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-bottom a:hover {
  color: #ff6600;
}
</style>
