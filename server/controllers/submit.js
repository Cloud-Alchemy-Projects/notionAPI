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
export function createData({nombre, apellidos, correo}) {
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
            [process.env.ID_APELLIDOS]:{
                rich_text:[
                    {
                        type: 'text',
                        text:{
                            content: apellidos
                        }
                    }
                ]
            },
            [process.env.ID_CORREO]:{
                rich_text:[
                    {
                        type: 'text',
                        text:{
                            content: correo
                        }
                    }
                ]
            },

        }
    })
}

// createData({nombre: "Wil", apellidos:"Ta", correo:"sdfsd"})