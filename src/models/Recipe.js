class Recipe {
    id;
    name;
    created;
    description;
    items;
    orders;
    image;
    images;

    constructor(recipe) {
        this.id = getIdFromTypeId(recipe.typeId);
        this.name = recipe.name;
        this.created = recipe.created;
        this.description = recipe.description;
        this.items = recipe.items;
        this.orders = recipe.orders;
        this.image = recipe.image;
        this.images = recipe.images;
    }
}

export function getId() {
    return getIdFromTypeId(this.id);
}

function getIdFromTypeId(typeId) {
    return typeId.toString().split("#")[1]
}

export default Recipe;