import { Component} from "@angular/core";


@Component({
  selector: "losango-component",
  templateUrl: "losango.component.html"
})
export class LosangoComponent{
  diagonalmenor: number = 0;
  diagonalmaior: number = 0;
  resultado: string;

  calcular(): void{
    let area = Number(this.diagonalmenor) * Number(this.diagonalmaior) / 2;
    this.resultado = "a área é: "+area;
  }
}
