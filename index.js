function scuberGreetingForFeet(distance){
  // Write your code here!
  let message;
  if (distance <= 400){
    message = "This one is on me!";
    return message;
  }else if(distance <= 2000){
    message = "That will be twenty bucks."
    return message;
  }else if(distance <= 2500){
    message = "I will gladly take your thirty bucks."
    return message;
  }
  else{
    message = "No can do."
    return message;
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  const destinationCity = city === "NYC"? "Ok, sounds good." : "No go."
  return destinationCity;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let salutation;
  switch(tip){
    case 'generous' : salutation = "Thank you so much."
    return salutation;
    break;

    case 'not as generous' : salutation = "Thank you."
    return salutation;
    break;

    default:
      salutation = "Bye."
      return salutation;
      break;
  }
}