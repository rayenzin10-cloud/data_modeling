function creerlivre(titre, auteurs, prix, genre, nombreDePages, description) {
    return {
        titre: titre,
        auteurs: auteurs,
        prix: prix,
        genre: genre,
        nombreDePages: nombreDePages,
        description: description
    }
}

var livre1 = creerLivre("Harry Potter à l'école des sorciers", ["JK Rowling"], 100, "aventure", 205, "harry potter")
var livre2 = creerLivre("Roméo et Juliette", ["William Shakespeare"], 120, "love", 40, "love")
var livre3 = creerLivre("Structure et interprétation des programmes informatiques", ["Gerald Jay Sussman", "Hal Abelson"], 200, "Info", 50, "informatique")
let livres = [livre1, livre2, livre3];
function afficherLivre(livre) {
    return livre.titre + " " + livre.auteurs + " " + livre.prix + " " + livre.genre + " " + livre.nombreDePages + " " + livre.description;
}
afficherLivre(livre1)

function afficherTousLesLivres(livres) {
    var affichage = "";
    for (var i = 0; i < livres.length; i++) {
        affichage = affichage + i + "." + afficherLivre(livres[i]) + "\n";
    }
    console.log(affichage);
}
afficherTousLesLivres(livres)


function correspondLivre(recherche, livre) {
    if (livre.titre.includes(recherche) || livre.genre.includes(recherche) || film.description.includes(recherche)) {
        return true;
    } return false;
}
correspondLivre("harry", livre)
function rechercherLivres(recherche, livres) {
    let resultats = [];
    for (var livre of livres) {
        if (correspondLivre(recherche, livre)) {
            resultats.push(livre);
        }
    }
    return resultats;
}
rechercherLivres("harry", livres)


function supprimerLivre(titre, livres) {
    for (var i = 0; i < livres.length; i++) {
        if (livres[i].titre === titre) {
            livres.splice(i, 1);
            return 'livre retiré : ' + titre;
        }
    }
    return 'Impossible de trouver ' + titre;
}
supprimerLivre("Structure et interprétation des programmes informatiques", livres)
