<template>
    <section class="tusnominas">
        <div class="headnewnomina">
            <div>
                <h1>Empresa I</h1>
            </div>
            <div class="checkestilossena">
                    <label><input type="checkbox" name="sena" value="sena">Paga sena</label><br>
            </div>
        </div>
        <section id="nominaelegida">
            <div class="headtusnominasdown">
                    <h1>#Empleados n</h1>
                    <div class="checkestilosaddemployee">                
                        <h1>Agregar Empleado</h1> 
                        <a href="/dentronom.html">
                            <img  class="imgheader1" id="imagenmas" :src="add" alt="add">
                        </a>
                    </div>
                </div>
                <div class="titulocargo"><h3>Cargo</h3></div>

                <h3 class="filtrocenter">Llene los filtros para definir el cargo del Empleado</h3>

                <div class="newnomina">
                    <input type="submit" value="Crear nomina" id="sizenomina">
                </div>
        </section>
    </section>
</template>

<script>
import iconoadd from '../assets/icons/addico.png'

export default {
    name: 'UserHome',

    data(){
        return{
            add: iconoadd
        }
    }
}
</script>