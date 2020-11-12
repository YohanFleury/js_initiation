var num = prompt("De quel nombre veux-tu calculer la factorielle ?")

function rFact(num)
{
    if (num === 0)
      { return 1; }
    else
      { return num * rFact( num - 1 ); }
}
console.log(`le résultat est : ${rFact(num)}`)