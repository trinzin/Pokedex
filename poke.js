console.log('🐱‍👓');

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

    let name = document.createElement("ol");
    name.innerHTML = this.name;
    this.element.appendChild(name);

    this.container.appendChild(this.element);

    let pokeLife = document.createElement("ol");
    pokeLife.innerHTML = this.pokeLife;
    this.element.appendChild(pokeLife);

    this.container.appendChild(this.element);

    let pokeAttack = document.createElement("ol");
    pokeAttack.innerHTML = this.pokeAttack;
    this.element.appendChild(pokeAttack);

    this.container.appendChild(this.element);

    let pokeDefense = document.createElement("ol");
    pokeDefense.innerHTML = this.pokeDefense;
    this.element.appendChild(pokeDefense);

    this.container.appendChild(this.element);

    let pokeAbilities = document.createElement("ol");
    this.conatiner2 = document.getElementById('test')
    pokeAbilities.innerHTML = this.pokeAbilities;
    this.element.appendChild(pokeAbilities);

    let pic=document.createElement('img');
    pic.src=this.pic;
    this.element.appendChild(pic);
    // document.getElementsById('prodcts').appendChild(pic);

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

      let pic = "pic1.jpg";

    let pikachu = new pokemon(name, hp, ability, attack, defense,pic);
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

      let pic = "charmander1.jpg";

  let charmander = new pokemon(name, hp, ability, attack, defense,pic);
  charmander.display();
});

axios.get
  ("http://fizal.me/pokeapi/api/v2/name/skarmory.json")
    .then (function(response){

      let name =response.data.name;

      let hp = response.data.stats[5].base_stat;

      let ability = response.data.abilities[0].ability.name;

      let attack = response.data.stats[4].base_stat;

      let defense = response. data.stats[3].base_stat;

      let pic = "skarmory.png";

  let skarmory = new pokemon(name, hp, ability, attack, defense,pic);
      skarmory.display();
});
