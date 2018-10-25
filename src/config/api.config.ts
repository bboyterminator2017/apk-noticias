import { Noticia } from "../model/noticia";
import { NoticiaCompleta } from "../model/noticia-completa";

export const NOTICIAS : Noticia[] = [
    {id : 1, nome : "Notícia 1", data:"December 20, 2016", imagem : "siria_guerra.jpg"},
    {id : 2, nome : "Notícia 2", data:"Fevereiro 16, 2018", imagem : "av_paulista.jpg"}
]


export const NOTICIASC : NoticiaCompleta[] = [
    {id : 1, imagem : "siria_guerra_completa.jpg",       titulo:"ONG revela que mais de 20 mil crianças já morreram na Síria \
    Em sete anos de guerra, são pelo menos 511 mil mortos.", 
    descricao:"A guerra na Síria teve início em 2011 \
    e durante muito tempo não recebeu destaque na mídia. \
    Os conflitos eram no interior, onde a rede de comunicação era mais precária. \
    Além disso, o governo de Bashar al-Assad fazia um tipo de censura do que era divulgado \
    pois lutava nas Nações Unidas contra algumas sanções propostas ao seu regime, \
    principalmente pelos Estados Unidos. \
\
    Com o apoio das nações islâmicas e da Rússia, ele conseguiu impedir \
    sua aprovação e até ocupou postos em comitês importantes. \
    Surpreendentemente, a ONU jamais reconheceu o genocídio contra \
    cristãos levado a cabo no país, sobretudo pela ação do Estado Islâmico, \
    que chegou a dominar 30% do território sírio." }, 
    {id : 2, imagem : "av_paulista.jpg", titulo:"", descricao:""}
]