
<template>
<div>
    <div v-if="mesaSeleccionada" style="display: flex;">
        <div>
            <div>
                <h3>
                    <strong>{{ mesaSeleccionada.nombre }}</strong>
                </h3>
            </div>

            <div v-for="(mItem, idx) in menu" :key="idx" style="border: 1px solid; margin: 30px; border-radius: 5px; padding: 10px; cursor: pointer;">
                <h2>
                    <strong>{{ mItem.nombre }}</strong>
                </h2>
                <p>
                    <strong>{{ mItem.precio }}</strong>
                </p>
                <p>
                    <span>{{ mItem.descripcion }}</span>
                </p>

                <p @click="agregarPlatoAPedido(mItem)" style="margin: 10px; padding: 10px; border: 1px solid; border-radius: 5px;">
                    <strong>Agregar al pedido</strong>
                </p>
            </div>
        </div>

        <div>
            <h2>Pedido Actual</h2>

            <div v-if="mesaSeleccionada.codigo === 'domicilio'">
                <div style="width: 300px;">
                    <label for="nombreCliente">Nombre Cliente</label>
                    <input id="nombreCliente" type="text" v-model="nombreCliente">
                </div>
                <div style="width: 300px;">
                    <label for="direccionCliente">Direccion Cliente</label>
                    <input id="direccionCliente" type="text" v-model="direccionCliente">
                </div>
            </div>

            <div v-for="(plato, idx) in platosDelPedido" :key="idx" style="border: 1px solid; margin: 30px; border-radius: 5px; padding: 10px; cursor: pointer;">
                <h5>
                    <strong>{{ plato.nombre }}</strong>
                </h5>
                <p>
                    <strong>{{ plato.precio }}</strong>
                </p>
                <p>
                    <span>{{ plato.descripcion }}</span>
                </p>
            </div>
            
            <div v-if="platosDelPedido.length > 0">
                <p @click="crearPedido" style="cursor: pointer; margin: 10px; padding: 10px; border: 1px solid; border-radius: 5px;">
                    <strong>Guardar Pedido</strong>
                </p>
                {{ totalPedido }}
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { addDocument } from "../../firebase/firestoreService";

export default {
    data () {
        return {
            nombreCliente: null,
            direccionCliente: null,

            pedidos: [],

            mesaSeleccionada: {
                codigo: 'domicilio',
                nombre: 'Domicilio'
            },

            platosDelPedido: [],

            mesas: [
                {
                    codigo: 'domicilio',
                    nombre: 'Domicilio'
                },
                {
                    codigo: 'ventanilla',
                    nombre: 'Ventanilla'
                },
                {
                    codigo: 'mesa-1',
                    nombre: 'Mesa 1'
                },
                {
                    codigo: 'mesa-2',
                    nombre: 'Mesa 2'
                },
                {
                    codigo: 'mesa-3',
                    nombre: 'Mesa 3'
                },
                {
                    codigo: 'mesa-4',
                    nombre: 'Mesa 4'
                },
            ],

            menu: [
                {
                    codigo: 'Ramen Hokage',
                    nombre: 'Ramen Hokage',
                    precio: 10.99,
                    descripcion: 'Un plato legendario que combina fideos de trigo, caldo de cerdo cocido a fuego lento durante horas y una mezcla de verduras frescas. ¡El favorito del Hokage!'
                },
                {
                    codigo: 'Ramen Shinobi',
                    nombre: 'Ramen Shinobi',
                    precio: 9.49,
                    descripcion: 'Un plato clásico de Ichiraku que presenta fideos de arroz en un caldo de pollo sazonado, acompañado de rodajas de cerdo chashu, huevo cocido a la perfección y cebolletas frescas. Ideal para cualquier ninja en entrenamiento.'
                },
                {
                    codigo: 'Ramen Jinchuriki',
                    nombre: 'Ramen Jinchuriki',
                    precio: 11.99,
                    descripcion: 'Una versión especial del ramen Ichiraku que presenta una combinación única de fideos de camote en un caldo picante de miso, servido con carne de cerdo marinada, huevo mollet y brotes de bambú. ¡Prepárate para liberar el poder de tu bestia interior!'
                },
                {
                    codigo: 'Ramen Sharingan',
                    nombre: 'Ramen Sharingan',
                    precio: 12.99,
                    descripcion: 'Una creación exclusiva de Ichiraku que combina fideos de huevo en un caldo ahumado de pescado, acompañado de camarones frescos, cangrejo de río y alga nori. ¡Una experiencia que te dejará con los ojos bien abiertos!'
                },
                {
                    codigo: 'Ramen Akatsuki',
                    nombre: 'Ramen Akatsuki',
                    precio: 13.49,
                    descripcion: 'Un plato audaz y picante que presenta fideos de trigo en un caldo de cerdo ennegrecido con ajo y salsa de soja, acompañado de carne de res a la parrilla, maíz dulce y un toque de aceite de chile. ¡El sabor de la oscuridad!'
                },
                {
                    codigo: 'Ramen Chūnin',
                    nombre: 'Ramen Chūnin',
                    precio: 8.99,
                    descripcion: 'Una opción clásica y reconfortante que presenta fideos de trigo en un caldo claro de pollo, acompañado de huevo cocido, alga nori y cebolletas frescas. ¡Perfecto para cualquier aspirante a chūnin!'
                },
            ],
        }
    },
    computed: {
        totalPedido(){
            return  this.platosDelPedido.reduce((total, objeto) => total + objeto.precio, 0);
        }
    },
    methods: {
        addData (pedido) {
            console.log('addData')
            addDocument("dbPedido", pedido)
                .then(() => {
                    console.log('Pedido Creado')
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
        },

        agregarPlatoAPedido (plato) {
            this.platosDelPedido.push(plato)
            alert('Plato agregado')
        },

        crearPedido () {
            let promesas = []

            this.platosDelPedido.forEach((plato) => {
                const pedido = {
                    nombreCliente: this.nombreCliente,
                    direccionCliente: this.direccionCliente,
                    codigoMesa: this.mesaSeleccionada.codigo,
                    codigoMenu: plato.codigo
                }
                console.log('crear pedido', pedido)

                const promesaPedido = this.addData(pedido)

                promesas.push(promesaPedido)
            });

            Promise.all(promesas)
                .then(() => {
                    alert('Pedido Creado')

                    this.platosDelPedido = []
                })
                .catch((error) => {
                    console.error("Error committing batch: ", error);
                });
        },

        obtenerMesaSeleccionada (pedido) {
            return this.mesas.find(m => m.codigo == pedido.codigoMesa)
        },
        obtenerMenuSeleccionado (pedido) {
            return this.menu.find(m => m.codigo == pedido.codigoMenu)
        },
    }
}
</script>