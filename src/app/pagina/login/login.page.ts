import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { LoginService, Usuario } from 'src/app/servico/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  Numero_Matricula: string = '';
  Senha: string = '';
  Cliente!: Usuario[];
  LPass: boolean = false;

  constructor(private navCtrl: NavController, private service: LoginService, private alertController: AlertController) { }
  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'Senha Incorreta',
      message: 'Verifique se a senha ou matricula estão corretas',
      buttons: ['OK']
    });

    await alert.present();
  }
  ngOnInit() {
    this.service.getUsuario().subscribe(response => {
      this.Cliente = response;
    })
  }
  onLogin() {
    for(let i=0;i<this.Cliente.length;i++){
      if(this.Cliente[i]['matricula'] === this.Numero_Matricula && this.Cliente[i]['senha'] === this.Senha){
        console.log('func');
        this.navCtrl.navigateForward("livros");
        this.LPass= true;
      }
    }
    if(this.LPass==false){
      console.log("matricula/senha errada")
      this.exibirAlerta();
    }
  }
}
