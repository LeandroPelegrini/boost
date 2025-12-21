<script lang="ts">
	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "$lib/components/ui/card";
	import * as AlertDialog from "$lib/components/ui/alert-dialog";
	import { Button } from "$lib/components/ui/button";
	import * as Table from "$lib/components/ui/table";

	const products = [
		{
			name: "RTV Silicone",
			description: "Vedação perfeita e resitente.",
			image: "/imgs/boost_rtv-silicone.webp",
			desc: "Formador de juntas de alta temperatura, resiste a óleos, água aditivada com glicóis, graxas, fluídos em geral que não danifica sensores de oxigênio. CARACTERÍSTICAS: Resistente à alta temperatura e mudanças causadas por ciclos térmicos. Alta flexibilidade e resistência à temperatura, estável em trabalhos até 315oC, com picos de até 343 oC.<br><br> Ideal para: Tampas de distribuição; Caixa de câmbio; Termostato; Cilindros; Tampa de cárter; Coletor de admissão; Bomba d'água; Tampa de válvulas; Flanges de cubo de rodas; Sensores de temperatura; Falanges do carburador; Injeção eletrônica.<br><br>Seca e sela como uma Junta. Cura totalmente entre 18 e 24 horas",
			tab1: "Quantidade por tubo",
			cont1: "105 g",
			tab2: "Tubos por caixa",
			cont2: "144 tubos",
			tab3: "Dimensões da caixa",
			cont3: "50,5 x 26 x 43 cm",
			tab4: "Peso bruto por caixa",
			cont4: "21,50kg",
		},
		{
			name: "Óleo Lubrificante GN-80",
			description: "Lubrifica, remove e protege.",
			image: "/imgs/boost_oleo-lubrificante-gn-80.webp",
			desc: "Proteção e Lubrificação Profissional O Óleo Lubrificante GN-80 da Boost é um spray supermultiuso com ação profissional para lubrificação, proteção anticorrosiva e desengorduramento. Com sua fórmula de alta potência, ele remove óxidos e solta peças travadas, como parafusos e dobradiças. Disponível em embalagem spray 250ml/155g, é um verdadeiro aliado para manutenção eficiente.",
			tab1: "Quantidade por lata",
			cont1: "250 ml / 155 g",
			tab2: "Latas por caixa",
			cont2: "24 latas",
			tab3: "Dimensões da caixa",
			cont3: "32 × 21,3 × 20,7 cm",
			tab4: "Peso bruto por caixa",
			cont4: "5,6 kg",
		},
		{
			name: "Limpa Contato",
			description: "Limpeza que restaura a performance elétrica.",
			image: "/imgs/boost_limpa-contato.webp",
			desc: "Restauração Instantânea para Componentes Elétricos O Limpa Contato Boost é um spray de ação instantânea, desenvolvido para restaurar a condutividade e garantir a limpeza de contatos elétricos e eletrônicos. Sua fórmula de secagem rápida remove sujeira, poeira, óleo e gordura, protegendo contra umidade e evitando falhas elétricas. Ideal para uso automotivo, motocicletas e eletrônicos, o produto também oferece proteção antiferrugem.",
			tab1: "Quantidade por lata",
			cont1: "250 ml / 155 g",
			tab2: "Latas por caixa",
			cont2: "24 latas",
			tab3: "Dimensões da caixa",
			cont3: "32 × 21,3 × 20,7 cm",
			tab4: "Peso bruto por caixa",
			cont4: "5,6 kg",
		},
		{
			name: "Descarbonizante",
			description: "Libera peças travadas com facilidade.",
			image: "/imgs/boost_descarbonizante.webp",
			desc: "Limpeza Profunda para o Sistema de Admissão O Descarbonizante Boost é um limpador de alta performance para o corpo do acelerador, válvula de admissão e bicos injetores. Sua fórmula foi desenvolvida para motores a álcool, gasolina, diesel e flex, removendo depósitos de carbono e garantindo um desempenho superior do motor. Além de proteger e lubrificar a válvula borboleta, é seguro para sensores de oxigênio e conversores catalíticos. Recomenda-se o uso a cada 3 meses ou 5.000 km para manter o sistema sempre limpo e eficiente",
			tab1: "Quantidade por lata",
			cont1: "250 ml / 155 g",
			tab2: "Latas por caixa",
			cont2: "24 latas",
			tab3: "Dimensões da caixa",
			cont3: "32 × 21,3 × 20,7 cm",
			tab4: "Peso bruto por caixa",
			cont4: "5,6 kg",
		},
	];
</script>

<section id="produtos" class="py-20 bg-muted/30">
	<div class="container mx-auto px-4">
		<div class="text-center mb-12">
			<h2 class="text-4xl md:text-5xl font-bold mb-4">NOSSOS PRODUTOS</h2>
		</div>

		<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

			{#each products as product}
				<AlertDialog.Root>
					<Card class="overflow-hidden hover:shadow-lg-xl transition-shadow-lg duration-300 pt-0">
						<div class="aspect-square overflow-hidden">
							<img src={product.image} alt={product.name} class=" object-fill h-full hover:scale-105 transition-transform duration-300" />
						</div>
						<CardHeader>
							<CardTitle class="text-xl">{product.name}</CardTitle>
							<CardDescription>{product.description}</CardDescription>
						</CardHeader>
						<CardFooter>
							<AlertDialog.Trigger><Button variant="outline" class="w-full">Saiba mais</Button></AlertDialog.Trigger>
						</CardFooter>
					</Card>
				<AlertDialog.Content>
				<AlertDialog.Header>
				<AlertDialog.Title>{product.name}</AlertDialog.Title>
				<AlertDialog.Description>
					{@html product.desc}
					<br><br>
					{product.tab1} &emsp;&emsp; {product.cont1}<br>
					{product.tab2} &emsp;&emsp;&emsp; {product.cont2}<br>
					{product.tab3} &emsp;&emsp; {product.cont3}<br>
					{product.tab4} &emsp;&emsp; {product.cont4}<br>
				</AlertDialog.Description>
				</AlertDialog.Header>
				<AlertDialog.Footer>
				<AlertDialog.Cancel>Fechar</AlertDialog.Cancel>
				</AlertDialog.Footer>
				</AlertDialog.Content>
				</AlertDialog.Root>

			{/each}
		</div>
	</div>
</section>
