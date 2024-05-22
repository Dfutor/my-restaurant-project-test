<template>
    <section class="welcome-section">
      <div class="welcome-content">
        <h1>Bienvenidos a Yayoi</h1>
        <p>COCINA JAPONESA CONTEMPORÁNEA</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'WellCome'
  }
  </script>
  
  <style scoped>
  .welcome-section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Ajusta según tus necesidades */
    background: url('https://static.wixstatic.com/media/c837a6_94887042ef304568a8406628f7d030d1~mv2.jpg/v1/fill/w_1125,h_879,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_94887042ef304568a8406628f7d030d1~mv2.jpg') no-repeat center center/cover;
    color: #fff;
    text-align: center;
    position: relative;
    z-index: 1;
  }
  
  .welcome-content {
    background: rgba(0, 0, 0, 0.6); /* Fondo oscuro semitransparente */
    padding: 2rem;
    border-radius: 10px;
  }
  
  .welcome-content h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-family: 'Noto Sans JP', sans-serif;
  }
  
  .welcome-content p {
    font-size: 1.5rem;
    font-family: 'Noto Sans JP', sans-serif;
  }
  </style>
  