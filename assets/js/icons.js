// TODO: Figlet art pending, can't find a generator/style like this.
// Functions for generating icons from their <i> placeholders.

const iconDataAttribute = (iconLibrary) => {
	switch(iconLibrary) {
		case 'Simple Icons':
			return 'data-simpleicons';
		case 'Lucide':
		default:
			return 'icon-name';
	}
}

const createAllIcons = () => {
	lucide.createIcons();
	createSimpleIcons();
}

// Like lucide.createIcons() but for Simple Icons.
// Replaces Simple Icons placeholders for their corresponding svg.
//nice: fix the visible loading delay when there's no icon.
const createSimpleIcons = () => {
	const placeholders = document.querySelectorAll('i[data-simpleicons]');

	placeholders.forEach((placeholder) => {
		const iconName = placeholder.getAttribute('data-simpleicons');
		if (!iconName) return;

		const imgElement = document.createElement('img');
		imgElement.src = `https://cdn.simpleicons.org/${iconName}`;

		for (const attr of placeholder.attributes) {
			imgElement.setAttribute(attr.name, attr.value);
		}
		imgElement.removeAttribute('data-simple-icons');
		imgElement.classList.add('simpleicons', `simpleicons-${iconName}`);

		placeholder.replaceWith(imgElement);
	});
}
