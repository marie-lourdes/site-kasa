const Ajv = require("ajv")

const shema = {
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

}




const ajv = new Ajv();

module.exports = ajv.compile(shema)

