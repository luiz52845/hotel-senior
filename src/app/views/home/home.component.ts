import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './../../shared/service/service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  personForm = this.formBuilder.group({
    id: [null],
    nome: ['', [Validators.required, Validators.minLength(3)]],
    documento: [123, [Validators.required, Validators.minLength(3)]],
    telefone: ['', [Validators.required, Validators.minLength(3)]],
  });




  constructor(
    public serviceService: ServiceService,
    private formBuilder: FormBuilder,
    // private http : HttpClient
    //private http: HttpClient
  ) { }

  public isActive: boolean = false;

  ngOnInit(): void {

    // const body = { title: 'Angular PUT Request Example' };
    // this.http.put<any>('https://jsonplaceholder.typicode.com/posts/1', body)
    //   .subscribe(data => this.postId = data.id);

  }

  onSubmit(): void {
    // Process checkout data here

    const data = this.personForm.value


    console.warn('minha cu', this.personForm.value);

    this.serviceService.postPessoa(this.personForm.value).subscribe(result => { });

  }


  adicionarPessoa() {
    this.isActive = true;
    console.log(this.isActive)
  }

  salvarPessoa() {
    console.log("implementar")
  }

  cancelar() {
    this.isActive = false;
    console.log(this.isActive)
  }

}
