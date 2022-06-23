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

const roles = [
    {id: 1 , title:"Hola"},
    {id: 2, title:"Hola"},
    {id: 3 , title:"Hola"},
    {id: 4 , title:"Hola"},
    {id: 5 , title:"Hola"},
];

const rolesRow = roles.map((rol) => 
    (
        {             
            "type": "table_row",
            "table_row": {
                "cells": [
                    [
                        {
                            "type": "text",
                            "text": {
                                "content": rol.title
                            },
                        }
                    ],
                ]
            }
        }
    )
)

rolesRow.unshift(
    {            
        "type": "table_row",
        "table_row": {
            "cells": [
                [
                    {
                        "type": "text",
                        "text": {
                            "content": "Roles"
                        },
                        "annotations": {
                            "bold": true,
                            "color": "red_background"
                        },
                    }
                ],
            ]
        }
    },
)
const otherRow = roles.map((rol) => 
    (
        {
            "type": "table_row",
            "table_row": {
                "cells": [
                    [
                        {
                            "type": "text",
                            "text": {
                                "content": rol.title
                            },
                        }
                    ],
                ]
            }
        }
    )
)

otherRow.unshift(
    {                  
        "type": "table_row",
        "table_row": {
            "cells": [
                [
                    {
                        "type": "text",
                        "text": {
                            "content": "Other Row"
                        },
                        "annotations": {
                            "bold": true,
                            "color": "red_background"
                        },
                    }
                ],
            ]
        }
    },
)

//test
export const createData = async (req, res) => {
    const {nombre, encargado, cliente,emoji} = req.body
    try {
        notion.pages.create({
            parent:{
                database_id: process.env.NOTION_DATABASE
            },
            icon: {
                type: "emoji",
                    emoji: emoji
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
                [process.env.ID_ESTATUS]:{
                    select: {
                        id: process.env.ID_OPTION_NOTSTARTED,
                        name: "Not started"
                    }
                },
            },
            children: [
                {
                    "type": "table",
                    "table": {
                        "table_width": 1,
                        "has_column_header": false,
                        "has_row_header": false,
                        "children": rolesRow
                    }
                },
                {
                    "type": "table",
                    "table": {
                        "table_width": 1,
                        "has_column_header": false,
                        "has_row_header": false,
                        "children": otherRow
                    }
                }
            ]
        })
        res.status(201).json({message: "Data send"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}