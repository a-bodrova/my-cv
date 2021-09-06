
# Anna Bodrova #


### Junior Frontend Developer ###


----------------------------------------------------------------------------------

### Contacts ###

+ E-mail: [soulwent94@gmail.com](mailto:soulwent94@gmail.com)
+ GitHub: [@a-bodrova](https://github.com/a-bodrova)
+ LinkedIn: [anna-b](https://ru.linkedin.com/in/anna-b-4b989818b/)
+ Telegram: [@Nittka](https://t.me/Nittka)


-----------------------------------------------------------------------------------

> **The way of a thousand li begins with the first step**

Hi, I am Anna, I'm a career changer.
I have more than 10 years experience in accounting management
at the advertising agency, but I want to change my career now.
I'm planning be a fullstack developer in two years. I have
no relevant work experience in commercial development, but I’m ready to learn hard.

----------------------------------------------------------------------------------
### Courses ###

+ ["Combinatorics" from MIPT](https://coursera.org/share/3d640ac0ea1977a0fda0b2780a69224b) - completed
+ ["Probability theory basics" from MIPT](https://www.coursera.org/learn/probability-theory-basics/home/welcome) - in progress
+ ["Discrete math" from HSE](https://www.coursera.org/learn/discrete-math/home/welcome) - in progress
+ ["Basics of HTML/CSS" from MIPT & Yandex](https://coursera.org/share/dd424b84b03aba84bbb06dc18cea5eed) - completed
+ ["Javascript, part 1: basics and functions" from MIPT & Yandex](https://coursera.org/share/3d077feead563eb46630d0804959c7e0) - completed

----------------------------------------------------------------------------------

### Code example ###

"The Deca Tree" from CODEWARS


```
class tree {
  constructor(trunks) {
    this.trunks = trunks;
    this.branches = trunks * 10;
    this.twigs = trunks * 100;
    this.leaves = trunks * 1000;
  }
  
  chopTrunk(n) {
    this.trunks = Math.max(this.trunks - n, 0);
    this.chopBranch(n * 10);
  }
  
  chopBranch(n) {
    this.branches = Math.max(this.branches - n, 0);
    this.chopTwig(n * 10);
  }
  
  chopTwig(n) {
    this.twigs = Math.max(this.twigs - n, 0);
    this.chopLeaf(n * 10);
  }
  
  chopLeaf(n) {
    this.leaves = Math.max(this.leaves - n, 0);
  }
  
  describe() {
    return `This tree has ${this.trunks} trunks, ${this.branches} branches, ${this.twigs} twigs and ${this.leaves} leaves.`
  }
  
}

```

> **Somewhere, something incredible is waiting to be known**

----------------------------------------------------------------------------------