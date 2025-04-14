import { UserConfig } from "./src/config"

const userConfig: UserConfig = {
    base_url: "https://ccfd610e.hugo-notion.pages.dev/",
    mount: {
        manual: false,
        page_url: 'https://www.notion.so/Notion-Hugo-1a2667b4db4980768afdfcd9a59867de?pvs=4',
        pages: [
            // {
            //     page_id: '<page_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                page_id: '45eb121158b9489480ec000fd25c812b',
                target_folder: '.'
            }
        ],
        databases: [
            // {
            //     database_id: '<database_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                database_id: 'b7b1816c05ec464391c8c111fa242985',
                target_folder: '.'
            }
        ],
    }
}

export default userConfig;
