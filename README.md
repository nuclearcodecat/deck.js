# deck.js  
## a tiny deck library  
i was looking for a small library to display images of products on my website. many claimed to be "lightweight" and "simple" but often weighed tens of kibibytes and had many functions.  
deck.js does not require writing any js. everything is realized within html and css.  
decks are controlled by root `<deck>` objects, with `<deck-surface>`, `<deck-prev>`, `<deck-shieldbox>`, `<deck-shield>` and `<deck-next>` elements inside.  
the whole script contains only 64 lines of code and the minified version weighs 871 bytes.
```
λ ~/----/ master* du -h --apparent-size deck.js.min
871	deck.js.min
```

### [project page with example decks, soon :)](https://webcatz.eu/project/deck-js)

# usage
load the script after the dom is loaded, so before the end of `<body>`, or defer it in the `<head>`.  
you can load either `deck.js` or `deck.js.min`. the latter is minified and takes less time to load, weighing only 871 bytes.  
please see the example in `example/`  
the script detects every `<deck>` object and tries to initalize a Deck for it.  
you can leave out the `<deck-prev>` and `<deck-next>` buttons, as well as the `<deck-shieldbox>`, although i would recommend leaving some way to control the deck...  
css is MANDATORY for the decks to function. the minimum is the following:  
```
deck-surface > *:not(.active) {
    display: none;
}

deck-surface > *.active {
    display: block;
}
```
without these styles, the deck will not function. i was debating whether i should inject this in the script, but since you have to style the deck anyway, you can copy this over.  
i think the best way to work with this would be to just steal the styles from the github example and modify them to your liking.  
the example code is pretty bare and not mobile-friendly, but it should be enough for a start.  
feel free to use multiple decks on one document too! you are not restriced to just one. as long as you use the valid names, the script will work.  

# customizing
the decks can be styled as much as css allows. deck.js uses `display` to swap the images (or other objects), so animations on the surfaces cannot be introduced. it's a quick-to-add feature, so feel free to fork the lib. i don't need this functionality and i want deck.js to be super simple. you could use transitions on the shields (like in the github example) and buttons to add some charm.
