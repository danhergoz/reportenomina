<template>
<body id="register">
    <section class="tusnominas">
        <div class="headtusnominas">
            <div>
                <h1>Nomina 1</h1>
                <a href="/ModfNomina">
                    <img :src="confignomina" alt="confignomina">
                </a>
                <a href="/UserHome">
                    <img :src="retur" alt="confignomina">
                </a>
            </div>
            <h1>#Empleados n</h1>
        </div>
        <section id="nominaelegida">
            <div class="headnominae">
                <h1>Empleados</h1>
            </div>
            <div id="nominabd">
                <table class="resumnomina">
                    <thead>
                        <tr>
                            <th>Empleado</th>
                            <th>Cargo</th>
                            <th>Dotacion</th>
                            <th>Sueldo</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td>#####</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td>#####</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td>#####</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td>#####</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td>#####</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td>#####</td>
                        </tr>

                    </tbody>
                    <tfoot>
                        <tr >
                            <td colspan="5">Valor total nomina: #####</td>
                        </tr>
                    </tfoot>  
                </table>
            </div>
        </section>
        <div class="addnomina">
            <h1>Ver detalle</h1>
            <a href="/DetalleNom">
                <img :src="see" alt="agregarnomina">
            </a>
        </div>
    </section>
</body>
</template>

<script>
import iconosee from '../assets/icons/see.png'
import confignom from '../assets/icons/confignomina.png'
import retur from '../assets/icons/return.png'

export default {
    name: 'dentronomina',

    data(){
        return{
            see: iconosee,
            confignomina:confignom,
            retur
        }
    }
}
</script>