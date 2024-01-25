#!/bin/bash

# Função para criar a estrutura básica do site
criar_estrutura() {
    pasta=$1
    prefixo=$2

    mkdir -p $pasta/assets/css
    mkdir -p $pasta/assets/js
    mkdir -p $pasta/assets/images
    mkdir -p $pasta/assets/fonts
    mkdir -p $pasta/pages

    touch $pasta/assets/css/$prefixo.css
    touch $pasta/assets/js/$prefixo.js
    touch $pasta/pages/sobre-$prefixo.html
    touch $pasta/pages/contato-$prefixo.html
    touch $pasta/pages/missao-$prefixo.html
    touch $pasta/pages/historia-$prefixo.html
    touch $pasta/index-$prefixo.html
}

# Criar estrutura para cada tipo de site
criar_estrutura "site-institucional" "institucional"
criar_estrutura "loja-virtual" "loja"
criar_estrutura "blog-corporativo" "blog"
criar_estrutura "portal-noticias" "noticias"
criar_estrutura "reservas-agendamentos" "reservas"
criar_estrutura "portfolio" "portfolio"
criar_estrutura "foruns-comunidades" "forum"
criar_estrutura "sites-afiliados" "afiliado"
criar_estrutura "cursos-educacao" "curso"
criar_estrutura "eventos" "evento"
criar_estrutura "atendimento-cliente" "atendimento"
criar_estrutura "diretorios-listagens" "diretorio"
criar_estrutura "marketplaces" "marketplace"
criar_estrutura "landing-pages" "landing"
criar_estrutura "intranets-corporativas" "intranet"
criar_estrutura "loja-concertos-celulares" "concerto-celular"
