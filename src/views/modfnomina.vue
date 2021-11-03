<template>
    <body id="register">
    <section class="tusnominas">
        <div class="headtusnominas">
            <div>
                <h1>Nomina 1</h1>
                <a href="#">
                    <img :src="confignomina" alt="confignomina">
                </a>
            </div>
            <h1 style="margin:0;padding:0;">#Empleados n</h1>
        </div>
        <section id="nominamodificar">
            <div id="seleccionempleadomodf">
                <h1>Seleccione un empleado o llamalo por su ID</h1>
                <input type="number" >
            </div>
            <div id="nominabdm">
                <table class="resumnomina">
                    <thead>
                        <tr>
                            <th>Empleado</th>
                            <th>Cargo</th>
                            <th>Dotacion</th>
                            <th>Sueldo</th>
                            <th>Total</th>
                            <th>Modificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td class="menumodify">
                                <img :src="deletenomina" alt="delete">
                                <img :src="actualizar" alt="update">
                                <img :src="detalle" alt="seedetailed">
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td class="menumodify">
                                <img :src="deletenomina" alt="delete">
                                <img :src="actualizar" alt="update">
                                <img :src="detalle" alt="seedetailed">
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td class="menumodify">
                                <img :src="deletenomina" alt="delete">
                                <img :src="actualizar" alt="update">
                                <img :src="detalle" alt="seedetailed">
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td class="menumodify">
                                <img :src="deletenomina" alt="delete">
                                <img :src="actualizar" alt="update">
                                <img :src="detalle" alt="seedetailed">
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td>#####</td>
                            <td class="menumodify">
                                <img :src="deletenomina" alt="delete">
                                <img :src="actualizar" alt="update">
                                <img :src="detalle" alt="seedetailed">
                            </td>
                        </tr>
                        
                    </tbody>
                    <tfoot>
                        <tr >
                            <td colspan="6">Valor total nomina: #####</td>
                        </tr>
                    </tfoot>  
                </table>
            </div>
        </section>
        <div class="addnomina">
            <h1>Volver</h1>
            <a href="/DentroNomina">
                <img :src="iconosee" alt="agregarnomina">
            </a>
        </div>
        <div id="infomodify">
            <div>
                <h2>Eliminar</h2>
                <img :src="deletenomina" alt="delete">
            </div>
            <div>
                <h2>Actualizar</h2>
                <img :src="actualizar" alt="update">
            </div>
            <div>
                <h2>Ver detalle</h2>
                <img :src="detalle" alt="seedetailed">
            </div>
        </div>
    </section>
    <section id="contenedoryl">
        <div id="contenedorregister">
            <div class="tituloformulario">
                <h1>Modificar Empleado</h1>
            </div>
            <form>
                <br>
                <h1>¿Que dato desea modificar?</h1>
               <div class="checkestilos">
                </div>
                <div>
                <input type="submit" value="Cargo" id="enviarbtn">
                <input type="submit" value="Sueldo" id="enviarbtn">
                </div>
                <input type="submit" value="Ambos" id="enviarbtn">
                <input type="submit" value="Listo" id="enviarbtn">
            </form>
        </div>
    </section>
    <section id="contenedoryl">
        <div id="contenedorregister">
            <div class="tituloformulario">
                <h1>Modificar Cargo</h1>
            </div>
            <form>
                <br>
                <label for="sueldo">Modificando Empleado ID "N"</label><br>
                <input type="submit" value="Listo" id="enviarbtn">
            </form>
        </div>
    </section>
    <section id="contenedoryl">
        <div id="contenedorregister">
            <div class="tituloformulario">
                <h1>Modificar Sueldo</h1>
            </div>
            <form>
                <br>
                <h1>Modificando Empleado ID "N"</h1>
                <label for="sueldo">Nuevo sueldo (IBC)</label><br>
                <input type="text" name="saldo" id="saldo" placeholder="ingrese saldo IPC"><br>
                <label for="sueldo">Valor dotación</label><br>
                <div>
                <input type="radio">
                <input type="text" name="saldo" id="saldo"><br>
                </div>
                <input type="submit" value="Listo" id="enviarbtn">
            </form>
        </div>
    </section>
</body>
</template>

<script>
import confignomina from '../assets/icons/confignomina.png'
import deletenomina from '../assets/icons/deletemodifynomina.png'
import actualizar from '../assets/icons/editmodifynomina.png'
import detalle from '../assets/icons/seemodifynomina.png'
import iconosee from '../assets/icons/see.png'


export default {
    name: 'modifynom',
    
    data(){
        return{
            confignomina,
            deletenomina,
            actualizar,
            detalle,
            iconosee,
            clicks:0
        }
    },

    methods:{
      modmenu(){
        this.clicks+=1;
        if(this.clicks==2){
            
        }else{
            
        }
      },

      modsueldo(){
        this.clicks+=1;
        if(this.clicks==2){
            
        }else{
            
        }
      },

      modcargo(){
        this.clicks+=1;
        if(this.clicks==2){
            
        }else{
            
        }
      }
    },
}
</script>