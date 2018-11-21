
class pokemon{
  constructor(name,pokeLife,pokeAttack,pokeDefense,pokeAbilities,pic){
    this.name=name;
    this.pokeLife=pokeLife;
    this.pokeAttack=pokeAttack;
    this.pokeDefense=pokeDefense;
    this.pokeAbilities=pokeAbilities;
    this.pic=pic;

    this.container = document.getElementById('products');
    //make a div with classname product//
    this.element = document.createElement('div');
    this.element.className='product';
}

display(){

    this.element.style.float="left";

    let pic=document.createElement('img');
    pic.src=this.pic;
    this.element.appendChild(pic);
    // document.getElementsById('prodcts').appendChild(pic);

    let name = document.createElement("ul");
    name.innerHTML = "Name: " + this.name;
    this.element.appendChild(name);

    this.container.appendChild(this.element);

    let pokeLife = document.createElement("ul");
    pokeLife.innerHTML ="hp:" + this.pokeLife;
    this.element.appendChild(pokeLife);

    this.container.appendChild(this.element);

    let pokeAttack = document.createElement("ul");
    pokeAttack.innerHTML = "Attack:" + this.pokeAttack;
    this.element.appendChild(pokeAttack);

    this.container.appendChild(this.element);

    let pokeDefense = document.createElement("ul");
    pokeDefense.innerHTML = "Defense:" + this.pokeDefense;
    this.element.appendChild(pokeDefense);

    this.container.appendChild(this.element);

    let pokeAbilities = document.createElement("ul");
    this.conatiner2 = document.getElementById('test')
    pokeAbilities.innerHTML = "Ability:" + this.pokeAbilities;
    this.element.appendChild(pokeAbilities);

    this.container.appendChild(this.element);
  }

}

class Trainer{
    constructor(){
      this.pokeInfo = [];

    }

    all(){
      return this.pokeInfo;

    }

    add (info){
      this.pokeInfo.push(info);
    }

    get(momo){
      for(let i = 0; i < this.pokemon.length;i++){
        if (momo === this.pokemon[i].name){
          return this.pokemon[i];
        }
      }
    }
}

let Rinzin = new Trainer();


//******************************************************************

axios.get
  ("https://fizal.me/pokeapi/api/v2/name/pikachu.json")
    .then (function(response){

      let name=response.data.name;

      let hp = response.data.stats[5].base_stat;

      let ability = response.data.abilities[0].ability.name;

      let attack = response.data.stats[4].base_stat;

      let defense = response. data.stats[3].base_stat;

      let pic = "pic1.jpg";

    let pikachu = new pokemon(name, hp, attack, defense, ability,pic);
    pikachu.display();

    Rinzin.add(pikachu);
});

axios.get
  ("https://fizal.me/pokeapi/api/v2/name/charmander.json")
    .then (function(response){

      let name=response.data.name;

      let hp = response.data.stats[5].base_stat;

      let ability = response.data.abilities[0].ability.name;

      let attack = response.data.stats[4].base_stat;

      let defense = response. data.stats[3].base_stat;

      let pic = "charmander1.jpg";

  let charmander = new pokemon(name, hp, attack, defense, ability, pic);
  charmander.display();

  Rinzin.add(charmander);
});

axios.get
  ("https://fizal.me/pokeapi/api/v2/name/skarmory.json")
    .then (function(response){

      let name =response.data.name;

      let hp = response.data.stats[5].base_stat;

      let ability = response.data.abilities[0].ability.name;

      let attack = response.data.stats[4].base_stat;

      let defense = response. data.stats[3].base_stat;

      let pic = "skarmory.png";

  let skarmory = new pokemon(name, hp, attack, defense, ability,pic);
      skarmory.display();

      Rinzin.add(skarmory);
});
