function createNCharacters(n)
{

    let guys = [];
    for(let i = 0; i < n; i++)
    {
        guys[i] =
        {
            intelligence : Math.floor(Math.random() * 5) + 1,
            sosiality: Math.floor(Math.random() * 5) + 1,
            race: (Math.random() > 0.5 ? "elf" : "human"),
            height : Math.floor(Math.random() * 5) + 1,
            name : nameGenerator() + " " +  nameGenerator() + nameGenerator(),
            weapon :
                    [{
                   title: "Miekka",
                   damage: 5,
                   durability:10,
                   speed:7,
                  },{

                   title: "Kirves",
                   damage:7,
                   durability:10,
                   speed:5,
                 },{

                   title: "Jousi",
                   damage: 5,
                   durability:10,
                   speed: 9
                 },{
                   title: "Nuija",
                   damage: 9,
                   durability:10,
                   speed: 4
                 }]


    }
    return guys;

}


function getRandomWeapon()
{     

      let weaponsArray = ["Miekka","Kirves","Jousi","Nuija"];

      let randomWeapon = weaponsArray[Math.floor(Math.random() * weaponsArray.length)];

      return randomWeapon;

}


function nameGenerator()
{
    const consanants = ["k", "l" , "j", "m", "n", "p", "r", "t", "s", "x", "z", "b"];
    const vowels = ["a", "e" , "i", "u", "o", "ä", "ö", "y"];

    let name = "";
    for(let i = 0; i < 5; i++)
        name += i % 2 == 0 ? consanants[Math.floor(Math.random() * consanants.length)] : vowels[Math.floor(Math.random() * vowels.length)];
    return name;
}

let numberOfPersons = 5

let persons = createNCharacters(numberOfPersons);
for(let i = 0;i < numberOfPersons;i++)
    document.writeln(JSON.stringify(persons[i]));
