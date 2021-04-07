const turnover_average = (array) => {
  var sum = 0;
  for(let index=0; index< array.length; index++){
      sum += array[index].revenue
  }

  const average = (sum/array.length)
  console.log("Le chiffre d'affaires moyen par utilisateur: " + average.toFixed(2))

}
  
turnover_average(users)

//////////////////////////////////////////////////////////////////////////////

const turnover_per_for_more_zero = (array) => {
  var num_of_pers = 0
  for(let index=0; index< array.length; index++){
    if(array[index].revenue != 0){
      num_of_pers += 1
    }    
  }
  const percentage = (num_of_pers * 100)/array.length
  
  console.log("Le pourcentage d'utilisateurs ayant rapporté de l'argent (revenue supérieur à 0: " + percentage.toFixed(2) + "%")
}

turnover_per_for_more_zero(users)

//////////////////////////////////////////////////////////////////////////////

const turnover_average_per_for_more_zero = (array) => {
  var turnover = 0
  var count = 0
  for(let index=0; index< array.length; index++){
    if(array[index].revenue != 0){
      turnover += array[index].revenue
      count += 1
    }    
  }
  const turnover_average = (turnover/count)
  
  console.log("Parmi les utilisateurs ayant rapporté de l'argent, le chiffre d'affaires moyen d'un utilisateur: " + turnover_average.toFixed(2))
}


turnover_average_per_for_more_zero(users)

//////////////////////////////////////////////////////////////////////////////

const profit = (array) => {
  var sum = 0;
  for(let index=0; index< array.length; index++){
      sum += array[index].revenue
  }
  const profit = sum/100     
  console.log("L'argent gagnée au total : " + profit.toFixed(2) + "€")
}

profit(users)

//////////////////////////////////////////////////////////////////////////////

const num_of_users_in_france = (array) => {
  var num_of_pers = 0
  for(let index=0; index< array.length; index++){
    if(array[index].country == "France"){
      num_of_pers += 1
    }    
  }
  
  console.log("Le nombre d'utilisateur en France est: " + num_of_pers)
}

num_of_users_in_france(users)

//////////////////////////////////////////////////////////////////////////////

const num_of_users_in_france_payed = (array) => {
  var num_of_pers = 0
  for(let index=0; index< array.length; index++){
    if(array[index].country == "France" && array[index].revenue != 0 ){
      num_of_pers += 1
    }    
  }
  
  console.log("Le nombre d'utilisateur en France qu'ont payés: " + num_of_pers)
}

num_of_users_in_france_payed(users)

//////////////////////////////////////////////////////////////////////////////

const turnover_by_country = (array) => {
  
  const countries = ["Germany", "United States", "France", "Great Britain"]
  const sum = []
  var turnover = 0

  for(let j=0; j<countries.length; j++){   
    for(let index=0; index< array.length; index++){
      if(countries[j] == array[index].country){
        turnover += array[index].revenue 
      }    
    }
    sum.push(turnover)
    turnover = 0
  }    
    console.log("Le chiffre d'affaire dans ces payes est: Germany " + sum[0]+ " United States " + sum[1] + " France " + sum[2] + " Great Britain " + sum[3])           
    console.log("Le chiffre d'affraire total dans ces pays est: " + (sum[0]+sum[1]+sum[2]+sum[3]))
  }

turnover_by_country(users)

//////////////////////////////////////////////////////////////////////////////

const list_of_countries_with_turnover = (array) => {
  const countries = []
  for(let index=0; index< array.length; index++){
    if(array[index].revenue != 0){
      countries.push(array[index].country)
    }    
  }
  const countries_filtred = countries.filter((item,index) => countries.indexOf(item) === index)
  console.log(countries_filtred)  
}

list_of_countries_with_turnover(users)

//////////////////////////////////////////////////////////////////////////////

// const compare_descending = (a, b) => {

//   if (a.revenue < b.revenue) {
//       return 1
//   }
//   else if (a.revenue > b.revenue) {
//       return -1
//   }
//   else {
//       return 0
//   }

// }

// const list_of_five_users_turnover = (array) => {
//   const new_array = array.sort(compare_descending)
//   for(let i=0; i<5;i++){
//     console.log(new_array[i])
//   }
// }

// list_of_five_users_turnover(users) 

//////////////////////////////////////////////////////////////////////////////

const men_or_women = (array) => {
  var sum_men = 0;
  var sum_women = 0;
  for(let index=0; index< array.length; index++){
      if(array[index].sex == "F"){
        sum_women += array[index].revenue
      }
      else{
        sum_men += array[index].revenue
      }  
  }
  if(sum_women > sum_men){
    console.log("Les femmes rapportent plus de gain")
  }
  else if (sum_women < sum_men){
    console.log("Les hommes rapportent plus de gain")
  }
  else{
    console.log("Les femmes et les homme rapportent la même chose")
  }      
}

men_or_women(users)

//////////////////////////////////////////////////////////////////////////////

const list_of_users = (array) => {
  const new_users = []
  for(let index=0; index< array.length; index++){
    if(array[index].revenue >= 7500){
      new_users.push(array[index])
    }    
  }
  console.log(new_users)
}

list_of_users(users)

//////////////////////////////////////////////////////////////////////////////

const percentage_of_first_hundred_user_payed = (array) => {
  var count = 0
  for(let index=0; index<100;index++ ){
    if(array[index].revenue != 0){
      count += 1
    }
  }
  console.log("Le pourcentage des client qu'ont payés dans  les 100 premiers est " + count +"%" )
}

percentage_of_first_hundred_user_payed(users)