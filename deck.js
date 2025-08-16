class Deck {
	constructor(root) {
		this.root = root;
		this.surface = root.querySelector('deck-surface');
		this.cards = root.querySelectorAll('deck-surface > *');
		this.prev_btn = root.querySelector('deck-prev');
		this.next_btn = root.querySelector('deck-next');
		this.shieldbox = root.querySelector('deck-shieldbox');
		this.index = 0;
		this.max = this.cards.length - 1;
		
		if (this.prev_btn) this.prev_btn.addEventListener('click', () => this.prev());
		if (this.prev_btn) this.next_btn.addEventListener('click', () => this.next());

		this.shields = [];

		if (this.shieldbox) {
			this.cards.forEach((_, n) => {
				let shield = document.createElement('deck-shield');
				shield.addEventListener('click', () => this.seek(n));
				this.shieldbox.appendChild(shield);
				this.shields.push(shield);
				this.shields[n].innerText = n + 1;
			});
		}

		this.update();
	}

	prev() {
		this.index = this.index <= 0 ? this.max : this.index - 1;
		this.update();
	}
	
	next() {
		this.index = this.index >= this.max ? 0 : this.index + 1;
		this.update();
	}

	seek(n) {
		if (n < 0) {
			this.index = 0;
		} else if (n >= this.max) {
			this.index = this.max;
		} else {
			this.index = n;
		}
		this.update();
	}

	update() {
		this.cards.forEach((card, n) => {
			const active = this.index === n;
			card.classList.toggle('active', active);
			if (this.shieldbox) {
				this.shields[n].classList.toggle('active', active);
			}
		});
	}
}

document.querySelectorAll('deck').forEach(deck => {
	new Deck(deck);
});
