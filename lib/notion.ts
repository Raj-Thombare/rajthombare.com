import "server-only";

import { Client } from "@notionhq/client";
import React from "react";
import {
    BlockObjectResponse,
    PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

export const fetchPages = React.cache(() => {
    return notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID!,
        filter: {
            property: "Status",
            select: {
                equals: "Published",
            },
        },
    });
});

export const getPageBySlug = React.cache((slug: string) => {
    return notion.databases
        .query({
            database_id: process.env.NOTION_DATABASE_ID!,
            filter: {
                property: "Slug",
                rich_text: {
                    equals: slug,
                },
            },
        })
        .then((res) => res.results[0] as PageObjectResponse | undefined);
});

export const getPageContent = React.cache((pageId: string) => {
    return notion.blocks.children
        .list({ block_id: pageId })
        .then((res) => res.results as BlockObjectResponse[]);
});

export const getAllProjects = React.cache(async () => {
    const databaseId = process.env.NOTION_DATABASE_ID;
    const response = await notion.databases.query({
        database_id: databaseId,
    });

    const projects = await Promise.all(
        response.results.map(async (page) => {
            const pageObj = page as any;

            const content = await notion.blocks.children.list({
                block_id: pageObj.id,
                page_size: 50,
            });

            return {
                title: pageObj.properties.Name.title[0].plain_text,
                tagline: pageObj.properties.Tagline.rich_text[0].plain_text,
                projectUrl: pageObj.properties.ProjectUrl.url,
                githubUrl: pageObj.properties.GithubUrl.url,
                date: pageObj.properties.Date.date.start,
                content: content.results,
                slug: pageObj.properties.Slug.rich_text[0].plain_text,
                icon: pageObj.properties.Icon.files[0].file.url,
            };
        })
    );

    return projects;
})
