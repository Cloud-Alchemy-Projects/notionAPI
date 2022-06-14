import dotenv from "dotenv";
import { Client } from "@notionhq/client";
dotenv.config()
const notion = new Client({auth: process.env.NOTION_API_KEY});

export const getDatabase = async(req, res)=>{
    try {
        const response = await notion.databases.retrieve({
            database_id: process.env.NOTION_DATABASE
        })
        res.send(response)
    } catch (error) {
        console.log(error);
    }
}

export function createData({nombre, encargado, cliente}) {
    notion.pages.create({
        parent:{
            database_id: process.env.NOTION_DATABASE
        },
        properties:{
            [process.env.ID_NOMBRES]:{
                title:[
                    {
                        type: 'text',
                        text:{
                            content: nombre
                        }
                    }
                ]
            },
            [process.env.ID_ENCARGADO]:{
                rich_text:[
                    {
                        type: 'text',
                        text:{
                            content: encargado
                        }
                    }
                ]
            },
            [process.env.ID_CLIENTE]:{
                rich_text:[
                    {
                        type: 'text',
                        text:{
                            content: cliente
                        }
                    }
                ]
            },

        }
    })
}

createData({nombre: "P-100", encargado:"Alfonso Santillan", cliente: "Sergio Espejel"})
createData({nombre: "P-200", encargado:"Alfonso Santillan", cliente: "Wilfredo Tablero"})