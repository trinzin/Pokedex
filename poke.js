console.log('🐱‍👓');

class pokemon{
  constructor(name,pokeLife,pokeAttack,pokeDefense,pokeAbilities){
    this.name=name;
    this.pokeLife=pokeLife;
    this.pokeAttack=pokeAttack;
    this.pokeDefense=pokeDefense;
    this.pokeAbilities=pokeAbilities;

    this.container = document.getElementById('products');
    //make a div with classname product//
    this.element = document.createElement('div');
    this.element.className='product';

}

display(){

    let name = document.createElement("li");
    name.innerHTML = this.name;
    this.element.appendChild(name);

    this.container.appendChild(this.element);

    let pokeLife = document.createElement("li");
    pokeLife.innerHTML = this.pokeLife;
    this.element.appendChild(pokeLife);

    this.container.appendChild(this.element);

    let pokeAttack = document.createElement("li");
    pokeAttack.innerHTML = this.pokeAttack;
    this.element.appendChild(pokeAttack);

    this.container.appendChild(this.element);

    let pokeDefense = document.createElement("li");
    pokeDefense.innerHTML = this.pokeDefense;
    this.element.appendChild(pokeDefense);

    this.container.appendChild(this.element);

    let pokeAbilities = document.createElement("li");
    pokeAbilities.innerHTML = this.pokeAbilities;
    this.element.appendChild(pokeAttack);

    this.container.appendChild(this.element);
  }
}

//******************************************************************

axios.get
  ("http://fizal.me/pokeapi/api/v2/name/pikachu.json")
    .then (function(response){

      let name=response.data.name;

      let hp = response.data.stats[5].base_stat;

      let ability = response.data.abilities[0].ability.name;

      let attack = response.data.stats[4].base_stat;

      let defense = response. data.stats[3].base_stat;

    let pikachu = new pokemon(name, hp, ability, attack, defense);
    pikachu.display();
});

axios.get
  ("http://fizal.me/pokeapi/api/v2/name/charmander.json")
    .then (function(response){

      let name=response.data.name;

      let hp = response.data.stats[5].base_stat;

      let ability = response.data.abilities[0].ability.name;

      let attack = response.data.stats[4].base_stat;

      let defense = response. data.stats[3].base_stat;

  let charmander = new pokemon(name, hp, ability, attack, defense);

});

axios.get
  ("http://fizal.me/pokeapi/api/v2/name/skarmory.json")
    .then (function(response){

      let name =response.data.name;

      let hp = response.data.stats[5].base_stat;

      let ability = response.data.abilities[0].ability.name;

      let attack = response.data.stats[4].base_stat;

      let defense = response. data.stats[3].base_stat;

  let skarmory = new pokemon(name, hp, ability, attack, defense);

});
