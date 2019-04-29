import { Component} from "@angular/core";


@Component({
  selector: "retangulo-component",
  templateUrl: "retangulo.component.html"
})
export class RetanguloComponent{
  altura: number = 0;
  base: number = 0;
  resultado: string;

  calcular(): void{
    let area = Number(this.base) * Number(this.altura);
    this.resultado = "a área é: "+area;
  }
}
