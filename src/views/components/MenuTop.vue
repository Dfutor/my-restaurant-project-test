<template>
    <div>
       
        <div class="header" >
          <!-- Logo -->
          <div class="logo">
            <img src="../../assets/logo.png" alt="Logo">
          </div>
      
          <!-- Nombre del Restaurante -->
          <div class="restaurant-name">
           <nav class="nav">
               <router-link to="/"><h1>Ramen Delight</h1></router-link>
           </nav>
          </div>
      
          <!-- Menú de Navegación -->
          <nav class="nav">
            <ul>
              <li><router-link to="/">Inicio</router-link></li>
              <li class="separator"></li> <!-- Elemento de separación -->
              <li><router-link to="/menu" style="margin-left: 10px;">Menú</router-link></li>
              <li><router-link to="/domicilios">Domicilios</router-link></li>
            </ul>
          </nav>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MenuTop'
  }
  </script>
  
  <style scoped>
  .separator {
  border-right: 1px solid #333; /* Línea de separación */
  height: 20px; /* Altura de la línea */
  margin: 0 1rem; /* Espacio alrededor de la línea */
}
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #1e1e1e;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    
  }
  
  .logo img {
    width: 180px;
    height: 135px;
  }
  
  .restaurant-name h1 {
    font-size: 1.5rem;
    color: #fff;
   
  }
  
  .nav ul {
    display: flex;
    list-style-type: none;
  }
  
  .nav li {
    margin-right: 1rem;
  }
  
  .nav a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    transition: color 0.9s ease;
    font-size: larger;
  }
  
  .nav a:hover {
    color: #ffa500;
  }
  </style>
  