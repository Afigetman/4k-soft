// console.log(1);

// // let num = 12;

// // console.log(num);

// const leftBorderWidth = 1;

// console.log(leftBorderWidth);



// leftBorderWidth = 10;
// console.log(leftBorderWidth);

// {

//     let result = 1;

// }

// console.log(result);

// let ind; 
// console.log(ind); //NaN - нема ящика, underfind - ящик пустий

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
