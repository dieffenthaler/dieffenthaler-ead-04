class Salario {
	
	constructor(pSalarioBruto){
	var _salarioBruto = 0.0;
	var parcelaDeduzir = null;
	this._salarioBruto = Number(pSalarioBruto);
	
	console.log("                                      ")
	console.log("=========== Jordano Eric Rodrigues Alves ===========")
	console.log("Salário Bruto:" + this.salarioBruto() + "\n");
	console.log("Desconto INSS:" + this.descontoINSS() + "\n");
	console.log("Desconto IRPF:" + this.descontoIRPF() + "\n");
	console.log("Parcela a deduzir do IRPF:" + this.parcelaDeduzir + "\n");
	console.log("Total de Descontos: " + this.totalDescontos() + "\n");
	console.log("Salário Líquido: " + this.salarioLiquido() + "\n");
	
	if (typeof pSalarioBruto != 'number' || pSalarioBruto <0)
		throw new Error("O valor informado deve ser um número positivo");
	
	
	}
	

	salarioBruto(){
		return this._salarioBruto;
	}
	
	descontoINSS(){
		var valorDesconto = null;
		if (this._salarioBruto<=1692.72)
			valorDesconto = (this._salarioBruto*8)/100;
		else
		if (this._salarioBruto >= 1693.73 && this._salarioBruto <= 2822.90)
			valorDesconto = (this._salarioBruto*9)/100;
		else
		if (this._salarioBruto >= 2822.91)
			valorDesconto = (this._salarioBruto*11)/100;
		if (valorDesconto > 621.04)
			valorDesconto = 621.04;
		return valorDesconto;
		
	}
	
	descontoIRPF(){
		
		var inss = this._salarioBruto - this.descontoINSS();
		var descontoIRPF =  null;
		if (inss <= 1903.98){
			descontoIRPF = 0.0;
			this.parcelaDeduzir = 0.0;
		}	
		if (inss >= 1903.99 && inss <= 2826.65){
			descontoIRPF = (inss*7.5)/100;	
			this.parcelaDeduzir = 142.80;
		}
		if (inss >= 2826.66 && inss <= 3751.05){
			descontoIRPF = (inss*15)/100;	
			this.parcelaDeduzir = 354.80;
		}
		if (inss >= 3751.06 && inss <= 4664.68){
			descontoIRPF = (inss*22.5)/100;
			this.parcelaDeduzir = 636.13;
		}
		if (inss >=4664.68){
			descontoIRPF = (inss*27.5)/100;	
			this.parcelaDeduzir = 869.36;
		}
		return descontoIRPF;
		
	}
	
	totalDescontos(){
	
		var descontos = this.descontoIRPF() - this.parcelaDeduzir;
		return descontos;
	

		
	}
	
	
	salarioLiquido(){
		
		var a = null;
		a = this._salarioBruto - this.descontoINSS() - this.descontoIRPF() + this.parcelaDeduzir;
		var salarioLiquido = a.toFixed(2);
		return salarioLiquido;
		
	}	
		
	
	
}

