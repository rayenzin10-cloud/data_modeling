function creerFilm(titre, realisateur, duree, dateSortie, acteurs, studios, resume, note) {
    return {
        titre: titre,
        realisateur: realisateur,
        duree: duree,
        dateSortie: dateSortie,
        acteurs: acteurs,
        studios: studios,
        resume: resume,
        note: note
    };
}
var film1 = creerFilm("war", "alexander", 150, 2015, [{ nom: "alexander", role: "responsable" }], "studio1", "world war", 9.5)
var film2 = creerFilm("football", "mario", 150, 2015, [{ nom: "ronaldo", role: "goat" }], "staduim", "world cup", 10)

function afficherFilm(film) {
    return film.titre + " " + film.realisateur + " " + film.duree + " " + film.dateSortie + " " + film.acteurs + " " + film.studios + " " + film.resume + " " + film.note;
}
afficherFilm(film1)

function afficherCasting(film) {
    return film.acteurs;
}
afficherCasting(film1);
let films = [film1, film2];



function afficherTousLesFilms(films) {
    var affichage = "";
    for (var i = 0; i < films.length; i++) {
        affichage = affichage + i + "." + afficherFilm(films[i]) + "\n";
    }
    console.log(affichage);
}
afficherTousLesFilms(films)


function moyenneDuree(films) {
    var affichage = 0;
    for (var i = 0; i < films.length; i++) {
        affichage = films[i].duree / films.length;
    }
    console.log(affichage);
}
moyenneDuree(films)

function moyenneNote(films) {
    var affichage = 0;
    for (var i = 0; i < films.length; i++) {
        affichage = films[i].note / films.length;
    }
    console.log(affichage);
}
moyenneNote(films)

function correspondFilm(recherche, film) {
    if (film.titre.includes(recherche) || film.titre.includes(recherche) || film.titre.includes(recherche) || film.titre.includes(recherche)) {
        return true;
    } return false;
}
correspondFilm("war", film1)

function rechercherFilms(recherche, films) {
    let resultats = [];
    for (var film of films) {
        if (correspondFilm(recherche, film)) {
            resultats.push(film);
        }
    }
    return resultats;
}
rechercherFilms("war", films)

