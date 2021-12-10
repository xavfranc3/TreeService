# Jardinage

Dans ton jardin, on peut trouver une nouvelle variété de plante (au nom inconnu) composée de branches.

## Comment ça fonctionne ?

### Les branches :

Chaque branche est représentée par un objet `{}` qui contient sa taille (`size`), et des jonctions qui contiennent elles-mêmes des branches (sous forme de tableau).

### Les jonctions :

Il existe 4 types de jonction au comportement bien particulier :

- a : incassable
- b : ne peut tenir plus d'une journée qu'avec un nombre pair de "branches directes"
- c : ne peut tenir plus d'une journée qu'avec un nombre impair de "branches directes"
- d : ne peut tenir plus d'une journée que si la température est supérieure à 15 degrés (Celsius)

(Par "branches directes" on entend : branches sur la jonction (ne pas compter les sous-branches))
(Une branche ne peut pas avoir deux jonctions du même type)

### Exemple 1 :

```js
const tree1 = {
  size: 2,
  a: [
    {
      size: 1,
    },
    {
      size: 2,
      b: [
        {
          size: 3,
        },
        {
          size: 0.5,
        },
      ],
    },
  ],
};
```

### Exemple 2 :

```js
const tree2 = {
  size: 2,
  b: [
    {
      size: 2,
    },
  ],
  c: [
    {
      size: 1,
      a: [
        {
          size: 3,
        },
        {
          size: 6,
        },
      ],
    },
    {
      size: 2,
    },
    {
      size: 2,
      d: [
        {
          size: 5,
        },
      ],
    },
  ],
};
```

## Objectif

Exposer une route API qui prend en argument un `tree` au format exposé précédemment, et un paramètre booléen `wait` qui doit renvoyer la longueur totale (somme de la longueur de toutes les branches de l'arbre).
`wait` signifie si on attend plus d'un jour avant de faire la mesure ou non :

- si `wait = false`, on ne tiendra pas compte des conditions de jonction
- si `wait = true`, on prendra en compte les conditions de jonction (les branches qui sont tombées ne comptent pas)

Pour `tree=tree1` et `wait=false`, la réponse attendue est : `8.5`.
