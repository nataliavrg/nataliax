import { Component} from "@angular/core";


@Component({
  selector: "losango-component",
  templateUrl: "losango.component.html"
})
export class LosangoComponent{
  diagonalMenor: number = 0;
  diagonalMaior: number = 0;
  resultado: string;

  calcular(): void{
    let area = Number(this.diagonalMaior) * Number(this.diagonalMenor) / 2;
    this.resultado = "A área é: "+area;
  }
}
