"use client";

import { useMemo, useState } from "react";

type Dish = { id:number; name:string; description:string; price:number; category:string; tag?:string };
const dishes: Dish[] = [
  { id:1, name:"Pão de fermentação natural", description:"Manteiga defumada, flor de sal e mel de engenho.", price:24, category:"Entradas", tag:"Da casa" },
  { id:2, name:"Croqueta de costela", description:"Costela 12h, aioli de limão-cravo e picles.", price:34, category:"Entradas" },
  { id:3, name:"Cupim na brasa", description:"Purê de macaxeira, cebola tostada e jus de rapadura.", price:82, category:"Principais", tag:"Mais pedido" },
  { id:4, name:"Peixe do dia", description:"Moqueca clara, arroz de coco e farofa de castanha.", price:76, category:"Principais" },
  { id:5, name:"Abóbora cabotiá", description:"Queijo coalho, cogumelos e molho de ervas frescas.", price:59, category:"Principais", tag:"Vegetariano" },
  { id:6, name:"Cocada de forno", description:"Sorvete de tapioca e caramelo de café.", price:29, category:"Sobremesas" },
];
const money = (value:number) => value.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});

export default function Home() {
  const [category, setCategory] = useState("Principais");
  const [cart, setCart] = useState<number[]>([]);
  const visible = dishes.filter((dish) => dish.category === category);
  const total = useMemo(() => cart.reduce((sum, id) => sum + (dishes.find((dish) => dish.id === id)?.price ?? 0), 0), [cart]);
  const message = encodeURIComponent(`Olá, Forno & Brasa! Gostaria de pedir: ${cart.map((id) => dishes.find((d) => d.id === id)?.name).join(", ")}. Total estimado: ${money(total)}.`);
  const add = (id:number) => setCart((current) => [...current, id]);
  const removeLast = (id:number) => setCart((current) => { const index = current.lastIndexOf(id); return index < 0 ? current : current.filter((_, itemIndex) => itemIndex !== index); });

  return (
    <main>
      <header>
        <a className="logo" href="#inicio"><span>F</span><div>FORNO <i>&</i> BRASA<small>cozinha brasileira</small></div></a>
        <nav aria-label="Navegação"><a href="#menu">Menu</a><a href="#historia">Nossa casa</a><a href="#reservas">Reservas</a></nav>
        <a className="outline-button" href="#reservas">Reserve sua mesa ↗</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy"><span className="kicker">Cozinha brasileira contemporânea</span><h1>O fogo revela<br /><em>o essencial.</em></h1><p>Ingredientes brasileiros, tempo respeitado e o sabor que só a brasa sabe contar.</p><div className="hero-actions"><a className="primary-button" href="#menu">Ver o menu <span>↓</span></a><span className="open"><i></i> Hoje · 18h às 00h</span></div></div>
        <aside className="award"><span>✦</span><p>Sabores do Ceará<br /><b>Guia Mesa 2026</b></p></aside>
      </section>

      <section className="ticker"><span>Brasa</span><b>✦</b><span>Território</span><b>✦</b><span>Tempo</span><b>✦</b><span>Afeto</span><b>✦</b><span>Brasil</span></section>

      <section className="story" id="historia">
        <div className="story-number">01</div><div><span className="kicker dark">Nossa cozinha</span><h2>Da origem ao prato,<br />sem atalhos.</h2></div><p>Compramos de pequenos produtores, aproveitamos o ingrediente por inteiro e deixamos o fogo trabalhar. O resultado é uma cozinha brasileira viva, direta e cheia de memória.</p>
      </section>

      <section className="menu-section" id="menu">
        <div className="menu-heading"><div><span className="kicker">Menu da casa</span><h2>Escolha sem pressa.</h2></div><div className="tabs" role="tablist" aria-label="Categorias do menu">{["Entradas","Principais","Sobremesas"].map((item) => <button role="tab" aria-selected={category === item} className={category === item ? "active" : ""} onClick={() => setCategory(item)} key={item}>{item}</button>)}</div></div>
        <div className="menu-layout">
          <div className="dish-list">{visible.map((dish) => { const quantity = cart.filter((id) => id === dish.id).length; return <article className="dish" key={dish.id}><div className="dish-index">0{dish.id}</div><div className="dish-info">{dish.tag && <span className="dish-tag">{dish.tag}</span>}<h3>{dish.name}</h3><p>{dish.description}</p></div><div className="dish-action"><b>{money(dish.price)}</b><div><button aria-label={`Remover ${dish.name}`} disabled={!quantity} onClick={() => removeLast(dish.id)}>−</button><span>{quantity}</span><button aria-label={`Adicionar ${dish.name}`} onClick={() => add(dish.id)}>+</button></div></div></article>})}</div>
          <aside className="order-card"><span className="kicker dark">Seu pedido</span><h3>{cart.length ? `${cart.length} ${cart.length === 1 ? "item" : "itens"}` : "A mesa está vazia"}</h3><p>{cart.length ? "Pedido para retirada. Confirme os detalhes com nossa equipe." : "Adicione pratos do menu para montar uma prévia do seu pedido."}</p><div className="total"><span>Total estimado</span><b>{money(total)}</b></div>{cart.length > 0 ? <a href={`https://wa.me/5585999999999?text=${message}`} target="_blank" rel="noreferrer">Enviar pelo WhatsApp ↗</a> : <button disabled>Escolha um prato</button>}<small>Valores e disponibilidade são demonstrativos.</small></aside>
        </div>
      </section>

      <section className="experience"><div className="experience-image" role="img" aria-label="Chef preparando prato na cozinha aberta"></div><div className="experience-copy"><span className="kicker">À mesa</span><h2>Uma noite para<br />ficar na memória.</h2><p>Salão intimista, cozinha aberta e um serviço que acompanha o ritmo da conversa.</p><dl><div><dt>Ter–Qui</dt><dd>18h — 23h</dd></div><div><dt>Sex–Sáb</dt><dd>18h — 00h</dd></div><div><dt>Domingo</dt><dd>12h — 16h</dd></div></dl></div></section>

      <section className="reserve" id="reservas"><span className="kicker">Reservas</span><h2>Sua mesa espera.</h2><p>Para grupos de até 8 pessoas, reserve diretamente com nossa equipe.</p><a className="primary-button" href="https://wa.me/5585999999999?text=Olá%2C%20gostaria%20de%20reservar%20uma%20mesa." target="_blank" rel="noreferrer">Falar com a casa ↗</a></section>
      <footer><div className="logo"><span>F</span><div>FORNO <i>&</i> BRASA<small>cozinha brasileira</small></div></div><p>Rua do Fogo, 118 · Fortaleza, CE<br />(85) 99999-9999</p><p>Projeto demonstrativo de portfólio.<br />Informações e contatos fictícios.</p></footer>
    </main>
  );
}
