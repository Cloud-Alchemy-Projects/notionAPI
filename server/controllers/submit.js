import dotenv from "dotenv";
import { Client } from "@notionhq/client";
dotenv.config()
const notion = new Client({auth: process.env.NOTION_API_KEY});

export async function getDatabase(){
    try {
        const response = await notion.databases.retrieve({
            database_id: process.env.NOTION_DATABASE
        })
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
getDatabase()
export function createData({nombre, estado, encargado, cliente}) {
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