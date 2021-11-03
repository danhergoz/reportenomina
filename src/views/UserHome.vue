<template>
<body id="register">
    <section class="tusnominas">
        <div class="headtusnominas">
            <h1>Tus Nominas</h1>
        </div>
        <section id="nominas">
            <div class="nominacreada">
                <div class="infonomina">
                    <a href="/DentroNomina">
                        <img id="imgnomi" src="" alt="nomina1">
                    </a>
                        <dl>
                            <dt>Nomina 1 Ejemplo</dt>
                            <dd>Creada el 00/00/00</dd>
                        </dl>
                </div>
                <div class="btnsnomina">
                    <div class="btnomina">
                        <a href="/DentroNomina">
                            <img :src="see" alt="">
                            <h3>Ver Nomina</h3>
                        </a>
                    </div>
                    <div class="btnomina">
                        <a href="/DetalleNom">
                            <img :src="seedt" alt="">
                            <h3>Ver Detallada</h3>
                        </a>
                    </div>
                </div>
            </div>
            <div class="nominacreada">
                <div class="infonomina">
                    <a href="/DentroNomina">
                        <img id="imgnomi" src="" alt="nomina1">
                    </a>
                    <dl>
                        <dt>Nomina 2 Ejemplo</dt>
                        <dd>Creada el 00/00/00</dd>
                    </dl>
                </div>
                <div class="btnsnomina">
                    <div class="btnomina">
                        <a href="/DentroNomina">
                            <img :src="see" alt="">
                            <h3>Ver Nomina</h3>
                        </a>
                    </div>
                    <div class="btnomina">
                        <a href="/DetalleNom">
                            <img :src="seedt" alt="">
                            <h3>Ver Detallada</h3>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        
        <div class="addnomina">
            <h1>Nueva Nomina</h1>
            <a href="/NuevaNom">
                <img :src="add" alt="agregarnomina">
            </a>
        </div>
    </section>
</body>
</template>

<script>
import iconosee from '../assets/icons/see.png'
import iconoseedt from '../assets/icons/seedetailed.png'
import iconoadd from '../assets/icons/addico.png'

export default {
    name: 'UserHome',

    data(){
        return{
            see: iconosee,
            seedt: iconoseedt,
            add: iconoadd
        }
    }
}
</script>