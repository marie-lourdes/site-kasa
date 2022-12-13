// import du module  AJV node.js pour l implementation d une logique de validation des données  en json via les shema  et type en javascript
const Ajv = require("ajv")

const schema = {
    type: "object",
    properties: {
        id: { type: "string" },
        title: { type: "string" },
        cover: { type: "string" },
        pictures: {
            type: "array",
            items: { type: "string" },
        },
        description: { type: "string" },
        host: {
            type: "object",
            properties: {
                name: { type: "string" },
                picture: { type: "string" },
            }
        },
        rating: { type: "string" },
        location: { type: "string" },
        equipments: {
            type: "array",
            items: { type: "string" },
        },
        tags: {
            type: "array",
            items: { type: "string" },
        },
    },
    required: ["id", "title", "cover", "pictures", "host", "location", "equipments", "tags"]
}

//creation d 'une instance objet '
const ajv = new Ajv();

// objet sera compilé avec le structure de shema et ses validators
module.exports = ajv.compile(schema)

